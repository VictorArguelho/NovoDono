import type { Ad } from "@models/Ad";

const STORAGE_KEY = "ads";

export class AdsStorageError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "AdsStorageError";
  }
}

function isAd(value: unknown): value is Ad {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const ad = value as Record<string, unknown>;

  return (
    typeof ad.id === "string" &&
    typeof ad.category === "string" &&
    typeof ad.description === "string" &&
    Array.isArray(ad.imagesUrl) &&
    ad.imagesUrl.every((image) => typeof image === "string") &&
    typeof ad.conservation === "string" &&
    typeof ad.size === "string" &&
    typeof ad.location === "string"
  );
}

function readStorage(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    throw new AdsStorageError(
      "Não foi possível acessar o armazenamento local para ler os anúncios.",
      { cause: error },
    );
  }
}

function writeStorage(ads: Ad[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
  } catch (error) {
    throw new AdsStorageError(
      "Não foi possível salvar os anúncios no armazenamento local.",
      { cause: error },
    );
  }
}

export function getAds(): Ad[] {
  const adsStorage = readStorage();

  if (!adsStorage) {
    return [];
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(adsStorage);
  } catch (error) {
    throw new AdsStorageError(
      "Os anúncios armazenados estão corrompidos e não puderam ser lidos.",
      { cause: error },
    );
  }

  if (!Array.isArray(parsed) || !parsed.every(isAd)) {
    throw new AdsStorageError(
      "Os anúncios armazenados estão em um formato inesperado.",
    );
  }

  return parsed.map((ad) => ({
    ...ad,
    imagesUrl: ad.imagesUrl.filter(isSafeImageUrl),
  }));
}

export function getAdById(id: string): Ad | undefined {
  const ads = getAds();
  return ads.find((ad) => ad.id === id);
}

export function createAd(ad: Ad): void {
  saveAds([...getAds(), ad]);
}

export function saveAds(ads: Ad[]): void {
  writeStorage(ads);
}

export function clearAds(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    throw new AdsStorageError(
      "Não foi possível limpar os anúncios do armazenamento local.",
      { cause: error },
    );
  }
}

function isSafeImageUrl(imageUrl: string): boolean {
  const normalizedImageUrl = imageUrl.trim();

  if (normalizedImageUrl.startsWith("//")) {
    return false;
  }

  if (
    normalizedImageUrl.startsWith("/") ||
    normalizedImageUrl.startsWith("./") ||
    normalizedImageUrl.toLowerCase().startsWith("data:image/")
  ) {
    return true;
  }

  try {
    const parsedUrl = new URL(normalizedImageUrl, window.location.origin);
    return (
      parsedUrl.protocol === "http:" ||
      parsedUrl.protocol === "https:" ||
      parsedUrl.protocol === "blob:"
    );
  } catch {
    return false;
  }
}

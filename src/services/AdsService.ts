import type { Ad } from "@models/Ad";

const STORAGE_KEY = "ads";

export function getAds(): Ad[] {
  const adsStorage = localStorage.getItem(STORAGE_KEY);

  if (!adsStorage) {
    return [];
  }

  return JSON.parse(adsStorage);
}

export function getAdById(id: string): Ad | undefined {
  const ads = getAds();
  return ads.find((ad) => ad.id === id);
}

export function createAd(ad: Ad): void {
  const ads = getAds();
  ads.push(ad);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ads));
}

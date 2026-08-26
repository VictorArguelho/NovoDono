import { getAds, saveAds } from "@services/AdsService";

import type { Ad } from "@models/Ad";

import roupa2 from "@assets/images/AdsPlaceholders/roupa_2.jpg";
import roupa3 from "@assets/images/AdsPlaceholders/roupa_3.jpg";
import roupa4 from "@assets/images/AdsPlaceholders/roupa_4.jpg";
import roupa5 from "@assets/images/AdsPlaceholders/roupa_5.jpg";
import roupa7 from "@assets/images/AdsPlaceholders/roupa_7.jpg";
import roupa8 from "@assets/images/AdsPlaceholders/roupa_8.jpg";
import roupa9 from "@assets/images/AdsPlaceholders/roupa_9.jpg";
import roupa10 from "@assets/images/AdsPlaceholders/roupa_10.jpg";
import roupa11 from "@assets/images/AdsPlaceholders/roupa_11.jpg";
import roupa12 from "@assets/images/AdsPlaceholders/roupa_12.jpg";

const defaultLocation = "Maringá, PR";

type AdPlaceholder = Omit<Ad, "id" | "location"> & { location?: string };

const placeholders: AdPlaceholder[] = [
  {
    category: "Camiseta manga longa",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    imagesUrl: [roupa5, roupa2, roupa3, roupa4, roupa9, roupa11],
    conservation: "Bom",
    size: "M",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta marrom em um ótimo estado.",
    imagesUrl: [roupa2],
    conservation: "Novo",
    size: "G",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta branca em um estado mediano",
    imagesUrl: [roupa3],
    conservation: "Mediano",
    size: "M",
    location: "Sarandi, PR",
  },
  {
    category: "Vestido",
    description: "Vestido preto novinho.",
    imagesUrl: [roupa4],
    conservation: "Novo",
    size: "P",
    location: "Mandaguaçu, PR",
  },
  {
    category: "Camiseta manga longa",
    description: "Camiseta branca meio desgastada, com um furo embaixo do braço.",
    imagesUrl: [roupa5],
    conservation: "Desgastada",
    size: "G",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta azul em um estado bom.",
    imagesUrl: [roupa7],
    conservation: "Bom",
    size: "M",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta branca bem cuidada.",
    imagesUrl: [roupa8],
    conservation: "Mediano",
    size: "G",
  },
  {
    category: "Regata",
    description: "Regata preta quase nova.",
    imagesUrl: [roupa9],
    conservation: "Novo",
    size: "M",
    location: "Sarandi, PR",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta preta em um estado bom.",
    imagesUrl: [roupa10],
    conservation: "Bom",
    size: "P",
  },
  {
    category: "Camiseta manga longa",
    description: "Camiseta azul em um bom meio desgastado, possui um rasgo na costura lateral.",
    imagesUrl: [roupa11],
    conservation: "Desgastado",
    size: "G",
    location: "Mandaguaçu, PR",
  },
  {
    category: "Camiseta manga curta",
    description: "Camiseta azul em um estado mediano.",
    imagesUrl: [roupa12],
    conservation: "Mediano",
    size: "P",
  },
];

export function CreateAds(): void {
  if (getAds().length > 0) {
    return;
  }

  saveAds(
    placeholders.map((placeholder, index) => ({
      ...placeholder,
      id: String(index + 1),
      location: placeholder.location ?? defaultLocation,
    })),
  );
}

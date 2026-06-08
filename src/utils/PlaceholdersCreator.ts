import { createAd } from "@services/AdsService";

import roupa1 from "@assets/images/AdsPlaceholders/roupa_1.jpg";
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

export function CreateAds(): void {
  localStorage.setItem("ads", "");

  createAd({
    id: "1",
    category: "Blusa",
    description: "Blusa vermelha em bom estado.",
    imagesUrl: [roupa1],
    conservation: "Bom",
    size: "M",
    location: "Maringá, PR",
  });

  createAd({
    id: "2",
    category: "Camiseta manga curta",
    description: "Camiseta marrom em um ótimo estado.",
    imagesUrl: [roupa2],
    conservation: "Novo",
    size: "G",
    location: "Maringá, PR",
  });

  createAd({
    id: "3",
    category: "Camiseta manga curta",
    description: "Camiseta branca em um estado mediano",
    imagesUrl: [roupa3],
    conservation: "Mediano",
    size: "M",
    location: "Sarandi, PR",
  });

  createAd({
    id: "4",
    category: "Vestido",
    description: "Vestido preto novinho.",
    imagesUrl: [roupa4],
    conservation: "Novo",
    size: "P",
    location: "Mandaguaçu, PR",
  });

  createAd({
    id: "5",
    category: "Camiseta manga longa",
    description: "Camiseta branca meio desgastada, com um furo embaixo do braço.",
    imagesUrl: [roupa5],
    conservation: "Desgastada",
    size: "G",
    location: "Maringá, PR",
  });

  createAd({
    id: "6",
    category: "Camiseta manga curta",
    description: "Camiseta azul em um estado bom.",
    imagesUrl: [roupa7],
    conservation: "Bom",
    size: "M",
    location: "Maringá, PR",
  });

  createAd({
    id: "7",
    category: "Camiseta manga curta",
    description: "Camiseta branca bem cuidada.",
    imagesUrl: [roupa8],
    conservation: "Mediano",
    size: "G",
    location: "Maringá, PR",
  });

  createAd({
    id: "8",
    category: "Regata",
    description: "Regata preta quase nova.",
    imagesUrl: [roupa9],
    conservation: "Novo",
    size: "M",
    location: "Sarandi, PR",
  });

  createAd({
    id: "9",
    category: "Camiseta manga curta",
    description: "Camiseta preta em um estado bom.",
    imagesUrl: [roupa10],
    conservation: "Bom",
    size: "P",
    location: "Maringá, PR",
  });

  createAd({
    id: "10",
    category: "Camiseta manga longa",
    description: "Camiseta azul em um bom meio desgastado, possui um rasgo na costura lateral.",
    imagesUrl: [roupa11],
    conservation: "Desgastado",
    size: "G",
    location: "Mandaguaçu, PR",
  });

  createAd({
    id: "11",
    category: "Camiseta manga curta",
    description: "Camiseta azul em um estado mediano.",
    imagesUrl: [roupa12],
    conservation: "Mediano",
    size: "P",
    location: "Maringá, PR",
  });
}

import styles from "./AdsSection.module.css";

import AdCard from "./AdCard/AdCard";

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

export default function AdsSection() {
  return (
    <section className={styles.adsSection}>
      <AdCard
        adData={{
          image: roupa1,
          name: "Camiseta manga longa",
          location: "Maringá, PR",
          state: "Ótimo Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa2,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Bom Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa3,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Estado ruim",
        }}
      />
      <AdCard
        adData={{
          image: roupa4,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Péssimo Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa5,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Ótimo Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa7,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Ótimo Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa8,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Bom Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa9,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Estado Ruim",
        }}
      />
      <AdCard
        adData={{
          image: roupa10,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Ótimo Estado",
        }}
      />
      <AdCard
        adData={{
          image: roupa11,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Estado péssimo",
        }}
      />
      <AdCard
        adData={{
          image: roupa12,
          name: "Lorem",
          location: "Maringá, PR",
          state: "Aniquilação",
        }}
      />
    </section>
  );
}

import React from "react";
import "../Astottaram.css";
import { Helmet } from "react-helmet";

const names = [
  "OM Sri Sai Nathaaya namaha",
  "OM Sri Sai Lakshmi naarayanaya namaha",
  "OM Sri Sai Krishnaraamashiva maruthyaadhi roopaaya namaha",
  "OM Sri Sai Seshasai ne namaha",
  "OM Sri Sai Godhavarithata shirdhivasi ne namaha",
  "OM Sri Sai Bhakta hrudaalayaaya namaha",
  "OM Sri Sai Sarva hrunnilayaaya namaha",
  "OM Sri Sai Bhoota vaasaya namaha",
  "OM Sri Sai Bhootha bhavishyadbhaava varnithaaya namaha",
  "OM Sri Sai Kaalaa thiithaaya namaha",
  "OM Sri Sai Kaalaaya namaha",
  "OM Sri Sai Kaala kaalaaya namaha",
  "OM Sri Sai Kaaladarpa damanaaya namaha",
  "OM Sri Sai Mrutyunjayaaya namaha",
  "OM Sri Sai Amarthyaaya namaha",
  "OM Sri Sai Marthyaa bhayapradhaaya namaha",
  "OM Sri Sai Jiivadhaaraaya namaha",
  "OM Sri Sai Sarvadhaaraaya namaha",
  "OM Sri Sai Bhaktaavana samarthaaya namaha",
  "OM Sri Sai Bhaktavana prathikjnaaya namaha",
  "OM Sri Sai Anna vastra daaya namaha",
  "OM Sri Sai Aroogya ksheemadaaya namaha",
  "OM Sri Sai Dhana maangalyapradaaya namaha",
  "OM Sri Sai Buddhi siddhi pradaaya namaha",
  "OM Sri Sai Putra mitra kalathra bandhudaaya namaha",
  "OM Sri Sai Yogaksheema vahaaya namaha",
  "OM Sri Sai Aapadbhaandhavaaya namaha",
  "OM Sri Sai Maargabandhavee namaha",
  "OM Sri Sai Bhukti mukti swargaapavargadaaya namaha",
  "OM Sri Sai Priyaaya namaha",
  "OM Sri Sai Preeti vardhanaaya namaha",
  "OM Sri Sai Antharyaminee namaha",
  "OM Sri Sai Sacchitatmanee namaha",
  "OM Sri Sai Nityanandaaya namaha",
  "OM Sri Sai Parama sukhadaaya namaha",
  "OM Sri Sai Parameeshwaraaya namaha",
  "OM Sri Sai Parabrahmanee namaha",
  "OM Sri Sai Paramaatmanee namaha",
  "OM Sri Sai Gnaana Swaroopinee namaha",
  "OM Sri Sai Jagath pithre namaha",
  "OM Sri Sai Bhaktaanaam maathru daathru pithaamahaaya namaha",
  "OM Sri Sai Bhaktaabhaya pradhaaya namaha",
  "OM Sri Sai Bhakta para dheenaya namaha",
  "OM Sri Sai Bhaktaanugraha karaaya namaha",
  "OM Sri Sai Sharaanagatha vatsalaaya namaha",
  "OM Sri Sai Bhakti shakti pradaaya namaha",
  "OM Sri Sai Gnana yraaghya prdaaya namaha",
  "OM Sri Sai Preema pradaaya namaha",
  "OM Sri Sai Samskhaya hrudaya dowurbhalya paapa karma vaasanaa kshayakaraaya namaha",
  "OM Sri Sai Hrudayagranthi bheedakaaya namaha",
  "OM Sri Sai Karma dhvamsiinee namaha",
  "OM Sri Sai Suddasathva sthithaaya namaha",
  "OM Sri Sai Gunaatheetha gunaathmanee namaha",
  "OM Sri Sai Anantha kalyaana gunaaya namaha",
  "OM Sri Sai Amitha parakramaaya namaha",
  "OM Sri Sai Jayinee namaha",
  "OM Sri Sai Durdhaarshaa kshobyaaya namaha",
  "OM Sri Sai Aparaajitaya namaha",
  "OM Sri Sai Trilookeeshu avighaatha gatayee namaha",
  "OM Sri Sai Ashakya rahitaaya namaha",
  "OM Sri Sai Sarva shakti murthayee namaha",
  "OM Sri Sai Suroopa sundaraaya namaha",
  "OM Sri Sai Suloochanaaya namaha",
  "OM Sri Sai Bahuroopa vishwamuurthayee namaha",
  "OM Sri Sai Aroopaavyaktaaya namaha",
  "OM Sri Sai Aachintyaaya namaha",
  "OM Sri Sai Sookshmaaya namaha",
  "OM Sri Sai Sarvaantharyaminee namaha",
  "OM Sri Sai Manoovaaga theethaya namaha",
  "OM Sri Sai Preemamoorthayee namaha",
  "OM Sri Sai Sulabha durlabhaaya namaha",
  "OM Sri Sai Asahaaya sahaayaaya namaha",
  "OM Sri Sai Anaatha naatha deenabaandhavee namaha",
  "OM Sri Sai Sarvabhaara bhrutee namaha",
  "OM Sri Sai Akarmaaneeka karma sukarminee namaha",
  "OM Sri Sai Punyasravana keerthanaaya namaha",
  "OM Sri Sai Theerthaaya namaha",
  "OM Sri Sai Vasudeevaaya namaha",
  "OM Sri Sai Sataamgathayee namaha",
  "OM Sri Sai Satyanaaraayanaaya namaha",
  "OM Sri Sai Lokanaathaaya namaha",
  "OM Sri Sai Paavananaaghaaya namaha",
  "OM Sri Sai Amruthamsavee namaha",
  "OM Sri Sai Bhaaskara Prabhaaya namaha",
  "OM Sri Sai Bramhacharya tapascharyaadi suvrathaaya namaha",
  "OM Sri Sai Satyadharma paraayanaaya namaha",
  "OM Sri Sai Siddheshvaraaya namaha",
  "OM Sri Sai Siddha sankalpaaya namaha",
  "OM Sri Sai Yogeshwaraaya namaha",
  "OM Sri Sai Bhagwatee namaha",
  "OM Sri Sai Bhakta vatsalaaya namaha",
  "OM Sri Sai Sathpurushaaya namaha",
  "OM Sri Sai Purushootthamaaya namaha",
  "OM Sri Sai Satyatatva boodhakaaya namaha",
  "OM Sri Sai Kaamaadi shadyri dwamsinee namaha",
  "OM Sri Sai Abheedaanandaama bhava pradhaaya namaha",
  "OM Sri Sai Samasarvamatha sammataaya namaha",
  "OM Sri Sai Sri Dakshinaa moorthiyee namaha",
  "OM Sri Sai Sri Venkateesha ramanaaya namaha",
  "OM Sri Sai Adbhuthaanantha charyaaya namaha",
  "OM Sri Sai Prapannarthi haraaya namaha",
  "OM Sri Sai Samsaara sarva dukha kshayakaraaya namaha",
  "OM Sri Sai Sarva vitsarvato mukhaaya namaha",
  "OM Sri Sai Sarvaantharbhahi stitaaya namaha",
  "OM Sri Sai Sarvamangala karaaya namaha",
  "OM Sri Sai Sarvaabhiishta pradhaaya namaha",
  "OM Sri Sai Samaras sanmaarga sthaapanaaya namaha",
  "OM Sri Sai samartha sadguru Sri Sai nathaaya namaha"
];

const Astottaram: React.FC = () => {
  return (
    <div className="astottaram-container">
      <Helmet>
        <title>Sai Baba Astottaram</title>
      </Helmet>
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>
      <h1 className="astottaram-title">108 Names of Shri Sai Baba</h1>
      <p className="astottaram-intro">
        Chanting these names is believed to bring peace, blessings, and
        spiritual growth.
      </p>

      {/* List of 108 Names */}
      <div className="astottaram-grid">
        {names.map((name, index) => (
          <div className="astottaram-item" key={index}>
            <span className="astottaram-number">{index + 1}.</span> {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Astottaram;

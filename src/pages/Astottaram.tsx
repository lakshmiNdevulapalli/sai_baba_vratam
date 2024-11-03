import React from "react";
import "../Astottaram.css";
import { Helmet } from "react-helmet";

const names = [
  "Om Shri Sai Nathaya Namah",
  "Om Shri Sai Loka Nayakaya Namah",
  "Om Shri Sai Bhaktavatsalaya Namah",
  "Om Shri Sai Sharanagata Vatsalaya Namah",
  "Om Shri Sai Shantaya Namah",
  "Om Shri Sai Satchidananda Swarupaya Namah",
  "Om Shri Sai Satyamurthaye Namah",
  "Om Shri Sai Purushottamaya Namah",
  "Om Shri Sai Paramatmane Namah",
  "Om Shri Sai Parabrahmane Namah",
  "Om Shri Sai Parameshwaraya Namah",
  "Om Shri Sai Anantakalyana Gunaya Namah",
  "Om Shri Sai Ananta Brahmandanayakaya Namah",
  "Om Shri Sai Bhakta Priyaya Namah",
  "Om Shri Sai Bhakta Poshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Sakha Namah",
  "Om Shri Sai Bhakta Vasankaya Namah",
  "Om Shri Sai Bhakta Priyatamaya Namah",
  "Om Shri Sai Bhakta Pariposhakaya Namah",
  "Om Shri Sai Bhakta Janotsarakaraya Namah",
  "Om Shri Sai Bhakta Samrakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Sannidhya Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsay Nivarakaya Namah",
  "Om Shri Sai Bhakta Samsara Taranaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Samashrayaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Janashrayaya Namah",
  "Om Shri Sai Bhakta Jnana Vikasakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Dhyana Pradayakaya Namah",
  "Om Shri Sai Bhakta Shrestaya Namah",
  "Om Shri Sai Bhakta Sukhavardhanaya Namah",
  "Om Shri Sai Bhakta Sharanaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Santoshakaraya Namah",
  "Om Shri Sai Bhakta Kalyana Karakaya Namah",
  "Om Shri Sai Bhakta Ananda Pradayakaya Namah",
  "Om Shri Sai Bhakta Karya Sadhakaya Namah",
  "Om Shri Sai Bhakta Karya Saphalyaya Namah",
  "Om Shri Sai Bhakta Samparadayaya Namah",
  "Om Shri Sai Bhakta Samsara Bandha Mochakaya Namah",
  "Om Shri Sai Bhakta Sattva Gunaya Namah",
  "Om Shri Sai Bhakta Vatsalaya Namah",
  "Om Shri Sai Bhakta Daya Namah",
  "Om Shri Sai Bhakta Anugrahaya Namah",
  "Om Shri Sai Bhakta Bhaya Vinashakaya Namah",
  "Om Shri Sai Bhakta Bhakti Pradayakaya Namah",
  "Om Shri Sai Bhakta Bhakti Vikasakaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Jnana Vikasakaya Namah",
  "Om Shri Sai Bhakta Samsaya Harakaya Namah",
  "Om Shri Sai Bhakta Hridaya Nivasa Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Jnana Vikasakaya Namah",
  "Om Shri Sai Bhakta Samsara Mochakaya Namah",
  "Om Shri Sai Bhakta Samastha Gunaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Ananda Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Jnana Vikasakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Samsaya Harakaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Ananda Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Harakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Samashrayaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Ananda Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Priya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Samsaya Nivarakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
  "Om Shri Sai Bhakta Jnana Pradayakaya Namah",
  "Om Shri Sai Bhakta Rakshakaya Namah",
  "Om Shri Sai Bhakta Hridayalaya Namah",
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

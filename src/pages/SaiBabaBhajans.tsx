import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import "../Bhajans.css";

interface Song {
  title: string;
  description: string;
  mp4Url: string;
  coverImage: string;
  singers: string;
  lyricist: string;
  music: string;
}

const SaiBabaBhajans: React.FC = () => {
  const songs: Song[] = [
    {
      title: "Shlokam",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-1-of-8wmv.mp4",
      coverImage: "src/assets/sai-baba-bhajan.jpeg",
      singers: "Smt. Devulapalli Srinivasa Sridevi",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Gurudwaarame",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-2-of-8wmv.mp4",
      coverImage: "src/assets/sai_baba_bhajan_3.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Chakradhar",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Karuna Prema",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-3-of-8wmv.mp4",
      coverImage: "src/assets/Bhajans.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Siva Sharma",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Ekaadasa Sutralu",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-4-of-8wmv.mp4",
      coverImage: "src/assets/bhajan_2.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Madhuramaya",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-5-of-8wmv.mp4",
      coverImage: "src/assets/sai_bhajan_5.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Chakradhar",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Satyam Sivam Sundaram",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-6-of-8wmv.mp4",
      coverImage: "src/assets/krishna_bhajan.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Chakradhar",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Neellathoti Deepam",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-7-of-8wmv.mp4",
      coverImage: "src/assets/Baba_blissful.png",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Chakradhar",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
    {
      title: "Mangalam Sri Sai",
      description: "A soulful bhajan celebrating Sai Baba's blessings.",
      mp4Url: "src/bhajans/sadguru-sai-ananda-daayi-part-8-of-8wmv.mp4",
      coverImage: "src/assets/sai_bhajan_2.jpg",
      singers: "Smt. Devulapalli Srinivasa Sridevi & Chakradhar",
      lyricist: "Aakella Surya Narayana Murthy",
      music: "Siva Sharma",
    },
  ];

  return (
    <div className="bhajans-container">
      <Helmet>
        <title>Sai Baba Bhajans</title>
      </Helmet>
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>
      <h1 className="bhajans-title">Sai Baba Bhajans</h1>
      <p className="bhajans-intro">
        Immerse yourself in these soulful bhajans dedicated to Sai Baba.
      </p>
      <div className="bhajans-grid">
        {songs.map((song, index) => (
          <BhajanPlayer key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

const BhajanPlayer: React.FC<{ song: Song }> = ({ song }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="bhajan-tile">
      <img
        src={song.coverImage}
        alt={`${song.title} cover`}
        className="bhajan-cover-image"
      />
      <div className="bhajan-details">
        <h2 className="bhajan-title">{song.title}</h2>
        <p className="bhajan-description">{song.description}</p>
        <p className="bhajan-info">
          <strong>Singer(s):</strong> {song.singers}
        </p>
        <p className="bhajan-info">
          <strong>Lyricist:</strong> {song.lyricist}
        </p>
        <p className="bhajan-info">
          <strong>Music Director:</strong> {song.music}
        </p>
        <div className="bhajan-audio-player">
          <audio ref={audioRef} controls>
            <source src={song.mp4Url} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default SaiBabaBhajans;

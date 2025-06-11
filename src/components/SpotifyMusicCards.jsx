import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Heart, MoreHorizontal } from "lucide-react";

import song1 from "../assets/songs/Ela Une Todas As Coisas.mp3";
import song2 from "../assets/songs/Fico Assim Sem Você.mp3";
import song3 from "../assets/songs/Aquarela Do Brasil.mp3";
import song4 from "../assets/songs/Garota De Ipanema.mp3";

import jorgevercilloCover from "../assets/img/album-cover/JorgeVercillo-cover.png";
import ClaudinhoBuchechaCover from "../assets/img/album-cover/ClaudinhoBuchecha-cover.png";
import arybarrosoCover from "../assets/img/album-cover/AryBarroso-cover.png";
import TomJobimViníciusMoraesCover from "../assets/img/album-cover/TomJobimViníciusMoraes-cover.png";

const SpotifyMusicCards = () => {

  const glassCard =
    "bg-white/5 backdrop-blur-md border border-white rounded-lg";

  const [playingId, setPlayingId] = useState(null);
  const [progress, setProgress] = useState({});
  const [likedSongs, setLikedSongs] = useState({});
  const audioRefs = useRef({});

  const songs = [
    {
      id: 1,
      title: "Ela Une Todas As Coisas",
      artist: "Jorge Vercillo",
      album: "JV30 Deluxe",
      genre: "MPB",
      duration: "4:08",
      cover: jorgevercilloCover,
      url: song1,
    },
    {
      id: 2,
      title: "Fico Assim Sem Você",
      artist: "Claudinho & Buchecha",
      album: "Claudinho & Buchecha",
      genre: "Funk Carioca",
      duration: "3:44",
      cover: ClaudinhoBuchechaCover,
      url: song2,
    },
    {
      id: 3,
      title: "Aquarela do Brasil",
      artist: "Ary Barroso",
      album: "Clássicos do Samba",
      genre: "Samba",
      duration: "5:56",
      cover: arybarrosoCover,
      url: song3,
    },
    {
      id: 4,
      title: "Garota de Ipanema",
      artist: "Tom Jobim & Vinícius de Moraes",
      album: "The Girl from Ipanema",
      genre: "Bossa Nova",
      duration: "4:02",
      cover: TomJobimViníciusMoraesCover,
      url: song4,
    },
  ];

  const togglePlay = (id) => {
    const currentAudio = audioRefs.current[id];

    if (playingId === id) {
      currentAudio.pause();
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      currentAudio.play();
      setPlayingId(id);
    }
  };

  const toggleLike = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTimeUpdate = (id) => {
    const audio = audioRefs.current[id];
    if (!audio || !audio.duration) return;
    const currentProgress = (audio.currentTime / audio.duration) * 100;
    setProgress((prev) => ({
      ...prev,
      [id]: currentProgress,
    }));
  };

  const handleSeek = (e, id) => {
    const audio = audioRefs.current[id];
    if (!audio || !audio.duration) return;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekTime = (clickX / width) * audio.duration;
    audio.currentTime = seekTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playingId) {
        handleTimeUpdate(playingId);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playingId]);

  return (
    <div
      className={`${glassCard} rounded-lg text-center`}
      style={{ marginTop: "3rem", padding: "2rem" }}
    >
      <h3
        className="text-3xl font-bold text-white"
        style={{ marginBottom: "1rem" }}
      >
        🎵 Artistas Icônicos
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{ gap: "24px", marginTop: "32px" }}
      >
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-green-500 backdrop-blur-sm rounded-xl hover:bg-green-600 transition-all duration-300 cursor-default group"
            style={{ padding: "16px" }}
          >
            <audio
              src={song.url}
              ref={(el) => (audioRefs.current[song.id] = el)}
              onEnded={() => setPlayingId(null)}
            />

            <div className="relative" style={{ marginBottom: "16px" }}>
              <img
                src={song.cover}
                alt={`${song.title} cover`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => togglePlay(song.id)}
                  className="bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl transform hover:scale-110 transition-all duration-200 cursor-pointer"
                  style={{ padding: "16px" }}
                  aria-label={playingId === song.id ? "Pausar" : "Tocar"}
                >
                  {playingId === song.id ? (
                    <Pause size={24} />
                  ) : (
                    <Play size={24} className="ml-1" />
                  )}
                </button>
              </div>

              <div
                className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full"
                style={{ padding: "2px 8px" }}
              >
                {song.genre}
              </div>
            </div>

            <div className="text-left">
              <h4
                className="text-white font-bold text-lg truncate"
                style={{ marginBottom: "4px" }}
              >
                {song.title}
              </h4>
              <p
                className="text-white/80 text-sm truncate"
                style={{ marginBottom: "4px" }}
              >
                {song.artist}
              </p>
              <p
                className="text-white/60 text-xs truncate"
                style={{ marginBottom: "12px" }}
              >
                {song.album}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-white/60 text-[.9em]">
                  {song.duration}
                </span>
                <div className="flex items-center" style={{ gap: "8px" }}>
                  <button
                    className={` ${
                      likedSongs[song.id]
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                    onClick={() => toggleLike(song.id)}
                    aria-label={likedSongs[song.id] ? "Descurtir" : "Curtir"}
                  >
                    <Heart
                      size={20}
                      fill={likedSongs[song.id] ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>

              {playingId === song.id && (
                <div style={{ marginTop: "12px" }}>
                  <div
                    className="w-full bg-white/20 rounded-full h-1 cursor-pointer"
                    onClick={(e) => handleSeek(e, song.id)}
                  >
                    <div
                      className="bg-white h-1 rounded-full"
                      style={{
                        width: `${progress[song.id] || 0}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyMusicCards;

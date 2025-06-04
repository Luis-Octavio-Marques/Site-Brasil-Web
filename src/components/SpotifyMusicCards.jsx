import React, { useRef, useState } from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';

import jorgevercilloCover from "../assets/img/album-cover/JorgeVercillo-cover.png"
import ClaudinhoBuchechaCover from "../assets/img/album-cover/ClaudinhoBuchecha-cover.png"
import arybarrosoCover from "../assets/img/album-cover/AryBarroso-cover.png"
import TomJobimViníciusMoraesCover from "../assets/img/album-cover/TomJobimViníciusMoraes-cover.png"

const SpotifyMusicCards = () => {
  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  const songs = [
    {
      id: 1,
      title: 'Monalisa',
      artist: 'Jorge Vercillo',
      album: 'Leve',
      genre: 'MPB',
      duration: '4:12',
      cover: jorgevercilloCover,
      color: 'from-blue-600 to-purple-600',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      title: 'Nosso Sonho',
      artist: 'Claudinho & Buchecha',
      album: 'Claudinho & Buchecha',
      genre: 'Funk Carioca',
      duration: '3:45',
      cover: arybarrosoCover,
      color: 'from-yellow-500 to-orange-600',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      title: 'Aquarela do Brasil',
      artist: 'Ary Barroso',
      album: 'Clássicos do Samba',
      genre: 'Samba',
      duration: '3:28',
      cover: ClaudinhoBuchechaCover,
      color: 'from-green-500 to-teal-600',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      id: 4,
      title: 'Garota de Ipanema',
      artist: 'Tom Jobim & Vinícius de Moraes',
      album: 'The Girl from Ipanema',
      genre: 'Bossa Nova',
      duration: '5:05',
      cover: TomJobimViníciusMoraesCover,
      color: 'from-pink-500 to-rose-600',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    }
  ];

  const togglePlay = (id) => {
    const currentAudio = audioRefs.current[id];

    if (playingId === id) {
      currentAudio.pause();
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
        audioRefs.current[playingId].currentTime = 0;
      }
      currentAudio.play();
      setPlayingId(id);
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-center"
      style={{ padding: "8px", marginTop: "12px" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{ gap: "24px" }}
      >
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-black/20 backdrop-blur-sm rounded-xl hover:bg-black/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
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
              <div
                className={`absolute inset-0 bg-gradient-to-t ${song.color} opacity-60 rounded-lg`}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => togglePlay(song.id)}
                  className="bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl transform hover:scale-110 transition-all duration-200"
                  style={{ padding: "16px" }}
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
                <span className="text-white/60 text-xs">{song.duration}</span>
                <div className="flex items-center" style={{ gap: "8px" }}>
                  <button className="text-white/60 hover:text-white transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="text-white/60 hover:text-white transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>

              {playingId === song.id && (
                <div style={{ marginTop: "12px" }}>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full animate-pulse"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center text-white/80"
        style={{ marginTop: "32px", gap: "8px" }}
      >
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <Play size={12} className="text-black ml-0.5" />
        </div>
        <span className="text-sm font-medium">Powered by Spotify</span>
      </div>
    </div>
  );
};

export default SpotifyMusicCards;

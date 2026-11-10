import { useState, useRef } from 'react';
import './MusicPlayer.css';

export default function MusicPlayer({ audioSrc = "/portofolio/assets/music.mp3" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={audioSrc} loop />
            <button onClick={togglePlay} className="play-button">
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
            <span className="music-label">
                {isPlaying ? "Now Playing..." : "Play Music"}
            </span>
        </div>
    );
}

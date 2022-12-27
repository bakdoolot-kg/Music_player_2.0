import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { nocoverart } from '../assets';

const SongCard = ({
  song,
  isPlaying,
  activeSong,
  data,
  i,
}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({
      song,
      data,
      i,
    }));
    dispatch(playPause(true));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { song?.hub?.actions ? (
        <div
          className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
        >
          <div className="relative w-full h-56 group">
            <div
              className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
            >
              <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
              />
            </div>
            <img src={song.images?.coverart} alt="song_img" />
          </div>

          <div className="mt-4 flex flex-col">
            <p className="font-semibold text-lg text-white truncate">
              <Link to={`/songs/${song?.key}`}>{song.title}</Link>
            </p>
            <p className="text-sm truncate text-gray-300 mt-1">
              <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song.subtitle}</Link>
            </p>
          </div>
        </div>
      )
        : (
          <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
              <img src={nocoverart} alt="song_img" />
            </div>

            <div className="mt-4 flex flex-col">
              <p className="font-semibold text-lg text-white truncate">
                <a target="_blank" href={song.hub.options[0].uri} rel="noreferrer">{song.title}</a>
              </p>
              <p className="text-sm truncate text-gray-300 mt-1">
                <a target="_blank" href={song.hub.options[0].uri} rel="noreferrer">{song.subtitle}</a>
              </p>
            </div>
          </div>
        )}
    </>
  );
};

export default SongCard;

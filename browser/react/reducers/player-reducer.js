import { START_PLAYING, STOP_PLAYING } from '../constants';

const initialState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};

export default function (prevState = initialState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {

    case START_PLAYING:
      newState.isPlaying = true;
      break;

    case STOP_PLAYING:
      newState.isPlaying = false;
      break;

    default:
      return prevState;

  }
  return newState;
}

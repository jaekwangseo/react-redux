import { SET_LYRICS } from '../constants';
import axios from 'axios';

export function setLyrics(text) {

  return {
    type: SET_LYRICS,
    lyric: text,
  }
}

export const fetchLyrics = function (artist, song) {
  return function (dispatch) {
      axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => res.data)
      .then(data => dispatch(setLyrics(data.lyric)))
      .catch(err => console.error('call to lyrics API failed', err))
  };
};

// export const fetchAlbumsFromServer =() => {
//   return dispatch => {
//     axios.get('/api/albums')
//       .then(res => res.data)
//       // use the dispatch method the thunkMiddleware gave us
//       .then(albums => dispatch(receiveAlbumsFromServer(albums)));
//   }
// }

// export const playSong = songId => {
//   return dispatch => {
//     // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
//     audio.play()
//     dispatch(selectSong(songId));
//   }
// }


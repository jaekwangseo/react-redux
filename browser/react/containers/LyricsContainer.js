import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'
import { setLyrics } from '../action-creators/lyrics'
import axios from 'axios'



export default class LyricsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState())

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('state changed');
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({songQuery: song})
  }

  handleSubmit() {

    console.log('handleSubmit called')

    if (this.state.artistQuery && this.state.songQuery) {
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then(res => res.data)
      .then(data => store.dispatch(setLyrics(data.lyric)))
      .catch(err => console.error('call to lyrics API failed', err))
    }
  }

  render() {
    return (
      <div>
      <Lyrics
        text={this.state.text}
        setArtist={this.setArtist}
        setSong={this.setSong}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
      />
      </div>
    );
  }
}

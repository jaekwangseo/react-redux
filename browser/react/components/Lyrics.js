import React from 'react';

const Lyrics = (props) => {

  const artistChange = e => {
    props.setArtist(e.target.value)
  }

  const songChange = e => {
    props.setSong(e.target.value)
  }

  return (
  <div>
    <form className='form-group' style={{marginTop: '20px'}} onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.artistQuery}
        onChange={artistChange}
        placeholder='Artist Search'
      />
      <input
        type="text"
        value={props.songQuery}
        onChange={songChange}
        placeholder='Song Search'
      />
      <pre>{props.text || 'Search above'}</pre>
      <button
        type="submit"
        className="btn btn-success">Enter
      </button>
    </form>
  </div>
  )
}

export default Lyrics

import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class FormContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render () {

    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;
    let warning = '';

    if (!inputValue && dirty) warning = 'You must enter a name';
    else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';

    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={inputValue}
        warning={warning}
      />
    );
  }
}

export default FormContainer;


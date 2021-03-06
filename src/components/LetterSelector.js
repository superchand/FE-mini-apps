import React from "react";

class LetterSelector extends React.Component {
  state = {
    currentLetter: ""
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.setState({ currentLetter: "" });
          this.props.addNewLetter(this.state.currentLetter, event);
        }}
      >
        <label>
          <input
            value={this.state.currentLetter}
            type="text"
            placeholder="Choose Letter"
            maxLength="1"
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ currentLetter: event.target.value });
  };
}

export default LetterSelector;

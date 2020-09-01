import * as React from 'react';

class CustomTextInput extends React.Component {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    console.log('[Child] props:', props);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  componentDidMount() {
    console.log('[Child] textInput ref:', this.textInput.current);
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.textInput} />
        <input
          type='button'
          value='Focus the text input'
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export class AutoFocusTextInputClass extends React.Component {
  textInput: React.RefObject<CustomTextInput>;

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
    console.log('[Parent] textInput ref:', this.textInput.current);
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

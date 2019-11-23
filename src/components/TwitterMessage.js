import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""  
    };
  }

  messageEvent = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    const { maxChars } = this.props
    const { message } = this.state
    return (
      <div>
        <strong>Your message:</strong>
        <input value={message} onChange={e => this.messageEvent(e)} type="text" name="message" id="message" /><br/>
        <div>Characters Remaining: {maxChars - message.length}</div>
      </div>
    );
  }
}
export default TwitterMessage;

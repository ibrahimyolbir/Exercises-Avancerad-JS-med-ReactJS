import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      set: 'Set',
      intervalIsSet: false,
      messages: [],
      chatHistory: [],
      hideLogin: false,
    };
    this.handelKeyPress = this.handelKeyPress.bind(this);
    this.socket = socketIOClient('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
    this
      .socket
      .on('messages', function (messages) {
        addMessage(messages);
        console.log(messages);
      });
    this.socket.on("new_message", (message) => {
      // addMessage(message);

      this.setState({
        messages: [...this.state.messages, message],
      })
      console.log(message);
    })
    this.sendMessage = ev => {
      ev.preventDefault();
      const mymessage = this.state.message
      if (mymessage.length !== 0) {
        this
          .socket
          .emit('message', {
            username: this.state.username,
            content: this.state.message
          }, (response) => {
            console.log(response);
          });
        this.setState({ message: '' });
      }
    }
    const addMessage = messages => {
      console.log(messages);

      const these_messages = messages;

      this.setState({ messages: these_messages });
      console.log(these_messages);
    };
  }
  handelKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({ hideLogin: true });
    }
  }
  addEmoji = (e) => {
    //console.log(e.unified)
    if (e.unified.length <= 5){
      let emojiPic = String.fromCodePoint(`0x${e.unified}`)
      this.setState({
        message: this.state.message + emojiPic
      })
    }else {
      let sym = e.unified.split('-')
      let codesArray = []
      sym.forEach(el => codesArray.push('0x' + el))
      console.log(codesArray.length)
      console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
      let emojiPic = String.fromCodePoint(...codesArray)
      this.setState({
        message: this.state.message + emojiPic
      })
    }
  }


  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-8 col-xl-6 chat">
            <div className="card" style={{ display: this.state.hideLogin ? "block" : null }}>
              <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>Mandatory Exercise 1 - Advanced JavaScript with React</span>
                  </div>
                </div>
                <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
              </div>
              <div className="card-body msg_card_body">
                <ul className="msg_cotainer">
                  {this
                    .state
                    .messages
                    .map((message, key) => {
                      return (
                        <li key={key}>
                          <p className="name__letter">{message.username.charAt(0)}</p>
                          <div className="chat__text">
                            <span className="user__name" >{message.username}</span>
                            <span className="message__content">{message.content}</span>
                            <span className="msg_time">{new Date(message.timestamp).toLocaleString("sv-SE")}</span>

                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="card-footer">
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                  </div>
                  <input
                    type="text"
                    placeholder="Message"
                    required
                    value={this.state.message}
                    onChange={ev => this.setState({ message: ev.target.value })}
                    style={{ top: 0, left: 0 }}
                    className="type_msg form-control " placeholder="Type your message..."></input>
                  <div className="input-group-append">

                    <button onClick={this.sendMessage} className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
                  </div>
                </div>
              </div>
              <span>
                      <Picker onSelect={this.addEmoji} />
                    </span>
            </div>
            <div className="login__page" style={{ display: this.state.hideLogin ? "none" : null }}>
              <form onSubmit={this.setUsername}>
                <h3>Whats your Nickname? </h3>

                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onKeyDown={this.handelKeyPress}
                  onChange={ev => this.setState({ username: ev.target.value })}
                  className="form-control" />
              </form>
            </div>
          </div>
        </div>
        
      </div>

    )
  }
}

export default App;

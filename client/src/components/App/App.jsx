import React, { Component } from 'react';

const style = require('./App.css');

class App extends Component {
  render () {
    return (
      <div id="container" className={style.container}>
        <aside id="sidebar"  className={style.sidebar}>
          Users
        </aside>
        <section id="main" className={style.main}>
          <section id="messages-list" className={style.messages_list}>
            Messages list
          </section>
          <section id="new-message" className={style.new_message}>
            New message
          </section>
        </section>
      </div>
    );
  }
}

export default App;

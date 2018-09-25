import React, { Component } from 'react';
import Sidebar from '../../containers/Sidebar';
import MessagesList from '../../containers/MessagesList';
import AddMessage from '../../containers/AddMessage';

const style = require('./App.css');

class App extends Component {
  render () {
    return (
      <div id="container" className={style.container}>
        <Sidebar />
        <section id="main" className={style.main}>
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;

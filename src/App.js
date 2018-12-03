import React, { Component } from 'react';
import NoteTaking from './component/noteTaking';


class App extends Component {
  render() {
    return (
      <div className="noteable">
        <NoteTaking />
      </div>
    );
  }
}

export default App;

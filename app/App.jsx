import React, {Component} from 'react';
import {render} from 'react-dom';

export default class App extends Component{
    render(){
      return(
        <div id="app">
          <div id="div1">Teste 1</div>
          <div id="div2">Teste 2</div>
          <div id="div3">Teste 3</div>
        </div>
      );
    }
}

render(<App />, document.getElementById('root'));

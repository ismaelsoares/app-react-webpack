import React, {Component} from 'react';
import {render} from 'react-dom';



export default class App extends Component{
    render(){
      return(
        <div className="app">
          <div id='div1'>Teste 1</div>
          <div id='div2'><button type="submit" class="btn btn-danger">Testando</button></div>
          <div id='div3'>Teste 3</div>
        </div>
      );
    }
}

render(<App />, document.getElementById('root'));

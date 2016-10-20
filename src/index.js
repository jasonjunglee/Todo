import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

class App extends Component {

  render(){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.querySelector('.container'));

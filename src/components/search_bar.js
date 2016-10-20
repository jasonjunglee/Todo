import React, { Component } from 'react';


export default class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = { input:'',
                    term:[] }
  }
  handleChange(event){
    this.setState({ input:event.target.value });

  }
  removeItem(e){
    this.setState(this.state.term.splice(e.target.value,1))
  }
  onSubmit(e){
    if(!this.state.input){
      alert('hey put something in it')
    }
    if(this.state.input){
    this.state.term.unshift(this.state.input);
    e.preventDefault()
    this.setState({ input: '' })
    }
  }

  render(){
    let TodoListItems = this.state.term.map((term,termIndex) => {
      return <li key={termIndex}>{term}<button onClick={ this.removeItem.bind(this) } value={ termIndex }>delete</button></li>
    })
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' placeholder='things to do' value={this.state.input} onChange={this.handleChange.bind(this)} />
          <button className='myButton'type='submit'>need to do</button>
        </form>
        <div>
          <ul>
            {TodoListItems}
          </ul>
        </div>
      </div>
    )
  }
}

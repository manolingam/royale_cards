import React, {Component} from 'react';
import './App.css';
import CardData from './CardData.js';
import CardFlip from './CardFlip';

class App extends Component {

  constructor(){
		super();
		this.state = {
			cards:[],
      searchfield:'',
		};
  }

  componentDidMount() {
    this.setState({cards:CardData})
  }

  
  onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
	}

  render(){
    
    const filteredCards = this.state.cards.filter(card=>{
      return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    var common = [];
    var rare = [];
    var epic = [];
    var legendary = [];

    filteredCards.forEach((item) => {
      if(item.cardType === 'Common')
        return common.push(item)
      if(item.cardType === 'Rare')
        return rare.push(item)
      if(item.cardType === 'Epic')
        return epic.push(item)
      if(item.cardType === 'Legendary')
        return legendary.push(item)
    })

    return(
        <div>
          <nav className="sticky-top navbar-light bg-light">
              <nav className="navbar navbar-light bg-light">
                  <p className="f2 purple title">Royale Cards</p>
                  <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onSearchChange}></input>
                      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                  </form>
              </nav>
            </nav>
            <nav className="navbar navbar-light bg-light">
              <span className="badge badge-pill bg-light-blue pa2">Common</span>
              <span className="badge badge-pill bg-light-yellow pa2">Rare</span>
              <span className="badge badge-pill bg-light-purple pa2">Epic</span>
              <span className="badge badge-pill bg-light-green pa2">Legendary</span>
            </nav>
            <CardFlip common={common} rare={rare} epic={epic} legendary={legendary}/>
        </div>
    )
  }
}

export default App;

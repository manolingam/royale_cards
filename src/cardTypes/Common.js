import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import target from '../assets/target.png';
import elixir from '../assets/elixir.jpg';
import '../CardFlip.css';

class Common extends Component {

	constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}
	
	render() {
		return(
			<div className="card">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
					<div key="front" className='bg-light-blue dib br3 pa2 ma3 grow bw2 shadow-2' onClick={this.handleClick}>
						<img alt='cards' src={`${this.props.common.iconUrls.medium}`}/>
						<div className='tc'>
							<p className="f4 purple">{this.props.common.name}</p>
						</div>
					</div>                           
											
					<div key="back" className='bg-white dib br3 pa2 ma3 grow bw2 shadow-2' onClick={this.handleClick}>
						<div className='tc'>
							<p className='f6 purple tc desc'>{this.props.common.desc}</p>
							<div className='properties'>
								<img id="target" src={target} alt="target"></img>
								<p className='f6 purple mt3 ml1 tc'>{this.props.common.targets}</p>
								<img id='target' className='ml2' src={elixir} alt="elixir"></img>
								<p className='f6 purple mt3 ml1'>{this.props.common.elixir}</p>
							</div>
						</div>
					</div>
				</ReactCardFlip>
			</div>
		)
	}
}

export default Common;
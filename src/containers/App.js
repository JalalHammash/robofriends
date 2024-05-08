import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state={
			robots:[],
			searchfiled: ''
		}
	}
	onSearchChange=(event)=>{
		this.setState({
			searchfiled:event.target.value

		})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({robots:users}))
	}

	render(){
		const {robots,searchfiled}= this.state;
		const filteredRobots=robots.filter(robot=>
					robot.name.toLowerCase().includes(searchfiled.toLowerCase()))
		return !robots.length? <h1 className='tc'>Loading</h1>
			
			:( 
				<div className='tc'>
					<h1 className='f1'>RoboFriend</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots= {filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}

export default App;
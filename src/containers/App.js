import React from "react";
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundary from "./ErrorBoundary";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value,
        })
        
    }
    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}
export default App;
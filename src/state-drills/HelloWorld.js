import React from 'react';

class HelloWorld extends React.Component {
    handleWorldClick = () => {
        const newText = "world";
        this.setState({
            who: newText
        })
    }
    handleFriendClick = () => {
        const newText = "friend";
        this.setState({
            who: newText
        })
    }

    handleReactClick = () => {
        const newText = "React";
        this.setState({
            who: newText
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            who: "world"
        }
    }
    
    render() {
        return (
            <div> 
                <p>Hello, <span id="changeText">{this.state.who}</span>!</p>
                <button id="world" onClick={this.handleWorldClick}>world</button>
                <button id="friend" onClick={this.handleFriendClick}>friend</button>
                <button id="React" onClick={this.handleReactClick}>React</button>
            </div>
           
            
        )
    }
}

export default HelloWorld;
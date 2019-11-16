import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            text: "ROULETTE GUN!!!"
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    timeoutCallback = () => {
        const randomNumber = Math.ceil(Math.random() * 8);
        console.log(randomNumber);
        if (randomNumber === this.props.bulletInChamber) {
            this.setState({
                text: "BANG!!!!"
            })
        } else {
            this.setState({
                text: "you're safe!"
            })
        }
    }

  
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
            text: "spinning the chamber and pulling the trigger! ..."
        })
        console.log("The chamber is spinning!");
        let timeout = setTimeout(this.timeoutCallback, 2000);
    }
    render () {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;
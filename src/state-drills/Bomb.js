import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    // tickTock = () => {
    //     let text;
    //     if (this.state.count%2) {
    //         text = 'tick';
    //     } else {
    //         text = 'tock';
    //     }
    //     return text;
    // }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            let newText;
            if (newCount % 2) {
                newText = 'tick';
            } else if (newCount >= 8) {
                newText = "BOOM!!!!";
                clearInterval(this.interval);
            } else {
                newText = 'tock';
            }
          this.setState({
              count: newCount,
              text: newText
          })
        }, 1000)
      }

    componentWillUnmount() {
    clearInterval(this.interval)
    }

    

    render() {
        console.log(this.state.count);
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Bomb;
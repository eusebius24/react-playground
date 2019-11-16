import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections : [] }

    state = {
        currentSection: null
    }

    handleButtonClick () {
        console.log('button clicked!', {index});
        
    }
    render() {
        const accordion = this.props.sections.map((section, index) => (
           <li key={section.title}>
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
            </button>
            <p className="section">
                {section.content}
            </p>
            </li>
        ))
        return (
            <ul>
                {accordion}
            </ul>
            )
    }
}

export default Accordion;
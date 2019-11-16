import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections : [] }

    state = {
        currentSection: null
    }

    handleButtonClick = (key) => {
        console.log('button clicked!', {key});
        const ul = document.querySelector('ul');
        const children = ul.children
        console.log(children)
        
    }
    render() {
        const accordion = this.props.sections.map((section, index) => (
           <li key={section.title}>
            <button key={index} onClick={(e) => this.handleButtonClick(this.key)}>
                    {section.title}
            </button>
            <p className="section hidden">
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
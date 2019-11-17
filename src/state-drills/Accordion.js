import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections : [] }

    state = {
        currentSection: null
    }

    handleButtonClick (index) {
        console.log('button clicked!', {index});
        this.setState({
            currentSection: index
        })
        
    }

    renderParagraph(index) {
        const paragraph = this.props.sections[index].content;
        return (<p className="section">{paragraph}</p>)
    }
    render() {
        
        const accordion = this.props.sections.map((section, index) => (
           <li key={section.title}>
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
            </button>
           {this.renderParagraph(index)};
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
import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe("Messages component", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages name='Notifications' unread={10} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={4} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={0} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('HTML component renders', () => {
    it('Component renders without crashing', () => {
        shallow (<App />)
    })
})

describe('Component renders text', () => {
    it('Component has the correct text', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.text().includes('Test app using WebPack and Babel.')).toBe(true);
    })
})
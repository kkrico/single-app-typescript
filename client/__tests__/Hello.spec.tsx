import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from '../src/components/Hello';

describe('Hello World', () => {
    it('Render sem crash', () => {
        const link = shallow(<HelloWorld compiler="Typescript" framework="React" />);
        expect(link).toMatchSnapshot();
    });
});

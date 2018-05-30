import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  test('should render App', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
});

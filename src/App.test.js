import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import assert from 'assert';
//import renderer from 'react-test-renderer';
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe(' happyPath', function () {
it('defaults to state 1', () => {

  const component = shallow(<App/>);
  expect(component.state().isLoggedIn).toEqual(1);

  
})

it('continues to state 2', () => {
  const component = shallow(<App/>);

  component.instance().tick();
  expect(component.state().isLoggedIn).toEqual(2);

})

it('continues from state 3 to state 2', () => {
  const component = shallow(<App/>);


  component.instance().tick();
  component.instance().tick();
  expect(component.state().isLoggedIn).toEqual(3);

})
})

it('Can change from state 2 to state 1', () => {
  const component = shallow(<App/>);


  component.instance().tick();
  component.instance().handleLoginClick();
  expect(component.state().isLoggedIn).toEqual(1);

})

it('continues from state 3 to state 1', () => {
  const component = shallow(<App/>);


  component.instance().tick();
  component.instance().tick();

  component.instance().handleLoginClick();
  expect(component.state().isLoggedIn).toEqual(1);

})

import React from 'react';
import ReactDOM from 'react-dom';
import AppTimeout from './AppTimeout';
import App from '../App'
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

  const component = shallow(<AppTimeout/>);
  expect(component.state().isLoggedIn).toEqual(1);

  
})

it('continues to state 2', () => {
  const component = shallow(<AppTimeout/>);

  component.instance().tick();
  expect(component.state().isLoggedIn).toEqual(2);

})

it('continues from state 3 to state 2', () => {
  const component = shallow(<AppTimeout/>);


  component.instance().tick();
  component.instance().tick();
  expect(component.state().isLoggedIn).toEqual(3);

})
})

it('Can return from state 2 to state 1', () => {
  const component = shallow(<AppTimeout/>);


  component.instance().tick();
  component.instance().handleLoginClick();
  expect(component.state().isLoggedIn).toEqual(1);

})

it('Can return to state 1 from state 3', () => {
  const component = shallow(<AppTimeout/>);


  component.instance().tick();
  component.instance().tick();

  component.instance().handleLoginClick();
  expect(component.state().isLoggedIn).toEqual(1);

})

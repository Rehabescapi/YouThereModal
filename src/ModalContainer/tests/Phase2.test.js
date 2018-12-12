import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../ModalContainer';
import Phase2Example from '../../containers/Phase2Example'

import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Phase2Example />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/*
describe(' happyPath', function () {
it('defaults to state 1', () => {

 
  
})

it('Renders with a child component', () => {
  
})

it('It Renders with non-default start and end views', () => {
 

})
})

it('It renders within the View 1 component', () => {
 

})

it('It uses a non default modal template', () => {
  

})


it('Component States stay internal', () => {
  

})*/
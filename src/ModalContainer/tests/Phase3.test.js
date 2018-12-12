import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../ModalContainer';
import Phase3Container from '../../containers/Phase3Container'

import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe(' Phase3 Container', function () {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Phase3Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});

})
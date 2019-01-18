import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../ModalContainer';
import Phase3Container from '../../containers/Phase3Container'

import Enzyme , {mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { __await } from 'tslib';
import { resolve } from 'bluebird';




configure({ adapter: new Adapter() });

describe(' Phase3 Container', function () {

    let cardContainer;
    beforeEach(()=>{

    })
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Phase3Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});

})


describe('Basic Functions of the Game', function () {

    it('renders 4 Modal Containers' , () => {
        const wrapper = mount(<Phase3Container/>);
        

        expect(wrapper.find("ModalContainer" ).length).toEqual(4);
        
        
        
        
        //const div = document.createElement('div');
        //ReactDOM.render(<Phase3Container/>, div);
/*

        const wrapper = shallow(<Phase3Container/>);
        console.log(wrapper.html());
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();

        expect(wrapper.find("ModalContainer" ).length).toEqual(4);
*/
    });

    it('Flower 0 changes', async () => {
        const wrapper = mount (<div><Phase3Container/>
                                 <div id="modal-root">
                                 </div></div>, {attachTo: document.body});

        console.log(wrapper.html());
        var a = wrapper.find("ModalContainer").first().text()

        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
        console.log(a);
        console.log();
        console.log();
        console.log();
        //wrapper.instance().child().tick();
        console.log(wrapper.html());
        await new Promise(resolve=> setTimeout(resolve, 1500));
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is goodIts thirsty");
       

/**
 * console.log(wrapper.html());
        var a = wrapper.find("ModalContainer").first().text()
        console.log(a);
        console.log();
        console.log();
        console.log();

        
        console.log(a);

 */
await new Promise(resolve=> setTimeout(resolve, 2500));
expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Its dead");
    }
    )



    it('Flower 0 changes to third phase', async () => {
        const wrapper = mount (<div><Phase3Container/>
                                 <div id="modal-root">
                                 </div></div>, {attachTo: document.body});

        console.log(wrapper.html());
        var a = wrapper.find("ModalContainer").first().text()

        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
        console.log(a);
        console.log();
        console.log();
        console.log();
        //wrapper.instance().child().tick();
        console.log(wrapper.html());
        await new Promise(resolve=> setTimeout(resolve, 1500));
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is goodIts thirsty");
       
        await new Promise(resolve=> setTimeout(resolve, 2500));
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Its dead");
    }
    )
})
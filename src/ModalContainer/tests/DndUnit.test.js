import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../ModalContainer';
import Board from '../../Phase3Components/MockIndex'

import Enzyme , {mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { __await } from 'tslib';
import { resolve } from 'bluebird';




configure({ adapter: new Adapter() });

/**
 * Container 1
 */


 /**
  * Container 2
  * Phase 2
  * Good Card
  */

  /**Container 3
   * Phase 2 
   * Bad Card
   */


   /**
    * Container 4 
    * Dead Card
    */
describe('Basic Phases of the Game', function () {
    beforeAll(() => {
        const div = document.createElement('div');
        window.domNode = div;
        document.body.appendChild(div);
      })

      let wrapper
      beforeEach(()=> {
         wrapper = mount (<div><Board/>
            <div id="modal-root">
            </div></div>, {attachTo: window.domNode});
      })
      afterEach(()=>{
         
      })
    it('renders 4 Modal Containers' , () => {
        const wrapperz = mount(<Board/>);
        console.log()
        expect(wrapperz.find("ModalContainer" ).length).toEqual(4);
      //  console.log(wrapper.find("ModalContainer").debug())
        
        
    });

    it('Flower 0 changes', async () => {
        


        

        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
      
        await new Promise(resolve=> setTimeout(resolve, 1500));
        //currently doing this weird thing because Modal Function creates its 
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is goodIts thirstyIts thirsty");
       

/**
 * console.log(wrapper.html());
        var a = wrapper.find("ModalContainer").first().text()
        console.log(a);
        console.log();
        console.log();
        console.log();

        
        console.log(a);

 */

   }
    )
/*


    it('Flower 1 changes to third phase', async () => {
        
       
       
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
        
        //wrapper.instance().child().tick();
        
        await new Promise(resolve=> setTimeout(resolve, 1500));
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is goodIts thirsty");
       

        wrapper.find("ModalContainer").first().instance().tick();
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Oops Try Again Reset");
       

        wrapper.unmount();
        })

    it('Flower 2  can revert back to stage on 1', ()=> {

        expect(wrapper.find("AngryFlowerModal").at(1).text().trim()).toEqual("Life is good");
        

       

        wrapper.unmount();
      //  wrapper.find()
    })
    it('Flower 3 ', ()=> {

        expect(wrapper.find("ModalContainer").at(2).text().trim()).toEqual("Life is good");
        
        wrapper.unmount();
      
      //  wrapper.find()
    })

    it('Flower 4', ()=> {

        expect(wrapper.find("ModalContainer").at(3).text().trim()).toEqual("Oops Try Again Reset");
        

        wrapper.unmount();

      //  wrapper.find()
    })
*/

})

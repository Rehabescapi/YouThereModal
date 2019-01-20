
    it('Flower 0 changes', async () => {
        
        console.log(wrapper.html());
        
        expect(wrapper.find("ModalContainer").length).toEqual(4);
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
        
        //wrapper.instance().child().tick();
       
        await new Promise(resolve=> setTimeout(resolve, 1500));
      
        /** 
         * Looking into this is teems like the enzyme debug isn't updating children nodes attatching themselves at a later time.
         * 
        console.log(wrapper.find(".flowerCard__content").debug());


        console.log(wrapper.find("ModalContainer").first().text());
        console.log(wrapper.find("ModalContainer").at(0).prop('ModalTemplate').text);
        console.log(wrapper.find("ModalContainer").at(0).render().text());
        console.log(wrapper.find("ModalContainer").at(0).find('div.modal').length);
        

        
        console.log(wrapper.find("ModalContainer").exists('.flowerCard__content'));
        console.log(wrapper.find("ModalContainer").exists('.Dying__plant'));
        */
        expect(wrapper.find("ModalContainer").first().text().trim()).toContain("Its thirsty");
        

/**
 * console.log(wrapper.html());
        var a = wrapper.find("ModalContainer").first().text()
        console.log(a);
        console.log();
        console.log();
        console.log();

        
        console.log(a);

 */

        })



    it('Flower 0 changes to third phase', async () => {
        /*const wrapper = mount (<div><Phase3Container/>
                                 <div id="modal-root">
                                 </div></div>, { attatchTo : document.getElementById('root')});

        */
        var a = wrapper.find("ModalContainer").first().text()

        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Life is good");
        console.log(a);
        console.log();
        console.log();
        console.log();
        //wrapper.instance().child().tick();
        
        await new Promise(resolve=> setTimeout(resolve, 1500));
        expect(wrapper.find("ModalContainer").first().text().trim()).toContain("Life is goodIts thirsty");
       wrapper.find("ModalContainer").first().instance().tick();
       
        expect(wrapper.find("ModalContainer").first().text().trim()).toEqual("Oops Try Again Reset");
    }
    )
})

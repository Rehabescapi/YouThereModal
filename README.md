Add  <div id="modal-root"></div> under the root div in index.html

yarn add  "enzyme" and  "enzyme-adapter-react-16"


yarn run test and yarn run start.


This was origionally intended to be a simple design project that 
I have been interating. With the initial scope being a 'Modal component',
I found a way to create a simple drag and drop game using my modal container and 
some stolen assets. 

That was Phase 3...
The scope of Phase 4 is to set up better TDD principles on this project before I dig myself 
into a bigger hole on a project or missed error.

Things to implement
-- A state of modal manager,
      Here the timing window will ge shorter as the game goes on.
      Also rather than the bad plant be set on load it should be determined either
      on stage 1 or 2. 


--A point monitor to see when a user ends the game. 
      Currently it ends when the bad plant festers too long.
      Preffered 

--More Testing
      Right now there is a fair amount ot practice code happening in the modal Container,
      I've already broke pieces improving it and failed to notice my test were failing. 
      
      -- Better Documentation.

Current PLan was to perform this with a redux state management. But was not able to perform this before the coding challenge this week. 














ModalContainer.propTypes:
  DefaultView : PropTypes.func,
  TimedOutView : 
  Modal View : 
  Static components within the Modal Container wrapper. 

  ModalTemplate : 
  Wrapper within the wrapper to deliver non-default transition functions. 



  mainTimeout : 
        PropTypes.number, Accepts int, sets time for initial component period.
  modalTimeout : 
        Accepts int,  Sets the time for how long the modal will remain on the screen. 
        And also how the modal default animation will display. 



  timerEnable : bool, allows the timer to be seen 
  distinct: Bool, 
  modalIdTarget : 


  TestStage : accepts int 1-3 , allows a designer to work on the view of stage without changing the timeouts.
 





Phase 1 Goal
Implement a MVP Modal Product :Completed
With minor testing :Completed

Phase 2 Goals
Create Inner Component MVP  : Completed
Learn form existing code And ensure Modal style remains professional. : Completed


Phase 3 Goals 

Implement Drag and Drop Minigame : Completed

Add some background darken transisitions. Completed

Phase 4 Goals
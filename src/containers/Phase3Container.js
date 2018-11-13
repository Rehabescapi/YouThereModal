import React ,{Component} from 'react'
import Board from '../Phase3Components'
import BreakDown from '../utilityComponents/BreakDown';


class Phase3Container extends Component {
     render() {
		return (
			<div>
				<BreakDown> 
				<h2 className="SecondaryHeader">Here I expanding on what I could replace within the container.</h2>
				<p>I Wanted to work with the reactDnd package and be able to string functions down through a child component</p>
				<p>Having smaller cards to create a modal over helped me trim bad css directions</p>
				<p>The target timers are static, but I see it flexible enough to change in further iterations. </p>
				<p>Further Expansion + code that could be easier to test would require using a state management system.</p>
				</BreakDown>
				<Board />
			</div>
		)
	}
}





export default Phase3Container
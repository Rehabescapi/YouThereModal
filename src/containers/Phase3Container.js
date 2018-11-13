import React ,{Component} from 'react'
import Board from '../Phase3Components'
import BreakDown from '../utilityComponents/BreakDown';


class Phase3Container extends Component {
     render() {
		return (
			<div>
				<BreakDown> 
				<h2 className="SecondaryHeader">Further expanding on the making the default modal state durable.</h2>
				<p>Wanted to get better at using Drag and Drop package and apply it here to confirm that change the default functions </p>

				<p>Further Expansion + testable code here would require using a state management system.</p>
				</BreakDown>
				<Board />
			</div>
		)
	}
}





export default Phase3Container
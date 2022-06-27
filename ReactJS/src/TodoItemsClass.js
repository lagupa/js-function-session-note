import React from "react";

class TodoItems extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			a: 0,
			b: 0,
		};
	}

	addNumber(a, b) {
		// find out
		this.setState({
			...this.state,
			a,
			b,
		});
		return a + b;
	}
	render() {
		return (
			<>
				<h1 className="intro">Hello, this is react class based components!</h1>
				<h2>
					{this.state.a} + {this.state.b} = {this.addNumber(4, 6)}
				</h2>
			</>
		);
	}
}

export default TodoItems;

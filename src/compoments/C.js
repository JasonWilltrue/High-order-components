import React, { Component } from 'react';
import A from './A.js';
class C extends Component {
	render() {
		return (
			<div>
				<img src={require('../images/C.png')} style={{ width: 200, height: 200 }} alt="" />
			</div>
		);
	}
}

export default A(C);

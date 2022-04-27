import React from 'react';

import CFrame from '../../../index';

export default class App extends React.Component {
	render() {
		const breadcrumbs = [
			{ text: 'Root', link: '#' },
			{ text: 'Branch', link: '#' },
			{ text: 'Leaf' }
		]

		return (
			<CFrame breadcrumbs={breadcrumbs}>
				CONTENT
			</CFrame>
		);
	}
}

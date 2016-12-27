import React from 'react';
import ReactDOM from 'react-dom';

import routes from './components/router';

ReactDOM.render(
	<div>
		{ routes }
	</div>, document.getElementById('app'));
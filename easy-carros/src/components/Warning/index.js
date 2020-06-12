import React from 'react';

import './style.scss'

const Warning = (props)=>{
	return (
		<p className="warning-msg p-2 mb-1 mt-3 bg-danger text-white">
			<small>{props.message}</small>
		</p>
	);
}

export default Warning;
import React from 'react';

const PageBase = (props) => {
	return(
		<div className="page">
			{props.children}
		</div>
	)
}

export default PageBase;
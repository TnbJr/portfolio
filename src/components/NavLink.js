import React from 'react';
import classNames from 'classnames/bind';
import {NavLink} from 'react-router-dom';


class Link extends React.Component {
	render(){
		const linkClassName = classNames({"nav__menu--display": this.props.display})
		return(
			<NavLink {...this.props}>
				<li className={linkClassName} >
					{this.props.children}
				</li>
			</NavLink>
		)
	}
}

export default Link;
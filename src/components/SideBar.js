import React from 'react';
import {Link} from 'react-router-dom';
import NavLink from './NavLink.js';
import image from '../images/profile.jpg';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenuItems: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }


  handleMenuClick(){
    this.setState({
      showMenuItems: !this.state.showMenuItems
    })
  }
  render(){
    return(
      <nav className="nav">
        <div className="nav--bg"></div>
          <div className="avatar">
            <div className="avatar__image">
              <div className="avatar__image--wrapper">
                <Link to="/"><img src={image} alt="Jared Russell" className="avatar__image--rounded"/></Link>
              </div>
            </div>
            <div className="avatar__content">
                <h2 className="avatar__content--name">{this.props.name}</h2>
                <p className="avatar__content--subtitle">{this.props.subtitle}</p>
              </div>
          </div>
          <div className="nav__wrapper">
            <div className="social">
              <div className="social__title">Get In Touch</div>
              <div className="social__icons">
                <a href="mailto:jaredrussell93@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
                <a href="https://twitter.com/jaredrussell93" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-2x"></i></a>
                <a href="https://github.com/tnbjr" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/jared-russell-b65b0b82/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>       
              </div>
            </div>
            <a onClick={this.handleMenuClick}><div className="nav__menu--trigram">&#9776;</div></a>
          </div>
          <div className="nav__menu">
            <ul>
              {this.props.menus.map((menu, index) =>(<NavLink to={menu.link} activeClassName='is-active' display={this.state.showMenuItems ? this.state.showMenuItems.toString() : undefined  } key={`${menu.text}-${index}`}>{menu.text}</NavLink>))}
            </ul>
          </div>  
      </nav>
    )
  }
}

export default SideBar;
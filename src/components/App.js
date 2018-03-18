import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {AboutMePage, HomePage, PortfolioPage, SkillsPage} from './pages/index.js';
import {Row, Col} from './grid/Grid.js'
import SideBar from './SideBar.js';
import Data from '../data/data.js';
import '../styles/style.scss';


const PrimaryLayout = () =>{ 
  const styles = {
    container: {
      backgroundImage: 'url(' + require('../images/nyc-photo.jpeg') + ')',
    },
  }
  return(

      <Row className="primaryLayout" styles={styles.container}>
        <Col col="3">
          <SideBar menus={Data.menus} name="Jared Russell" subtitle="Full-Stack Web Developer"/>
        </Col>
        <Col col="9">
          <main className="primaryLayout__main">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/skills" component={SkillsPage}/>
              <Route path="/portfolio" component={PortfolioPage}/>
              <Route path="/about-me" component={AboutMePage}/>
            </Switch>
          </main>
        </Col>
      </Row>
  )
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout/>
      </BrowserRouter>
    );
  }
}
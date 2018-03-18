import React from 'react';
import Page from './Page.js';
import {ReactIcon, PythonIcon, JavascriptIcon, SassIcon, JqueryIcon, DjangoIcon, PostgresIcon, NodeIcon, WordpressIcon, GitIcon, RedisIcon, DockerIcon} from '../Icon.js'
import {Row, Col} from '../grid/Grid.js';
import {TextBlock} from '../helpers.js';


const SkillPage = () =>{
    return(
        <Page>
            <div className="container--fluid">
                <Row>
                    <Col col="12">
                    <TextBlock className="text-block">
                        <h2 className="text-block__heading">My Skills</h2>
                        <p className="text-block__p">I am a <strong>full-stack web developer</strong> with over <strong>three years of professional experience</strong> working on web applications.</p>
                        <p className="text-block__p">I have maintained, developed and launched <a href="/portfolio">multiple projects</a> from scratch, carrying the development of its' back-end and front-end codebases.</p>
                        <p className="text-block__p">My current toolset includes <a href="https://reactjs.org/">React</a>, <a href="https://redux.js.org/">Redux</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>, <a href="https://www.python.org/">Python</a>, <a href="http://flask.pocoo.org/">Flask</a>, <a href="https://www.djangoproject.com/">Django</a> and all the other various frameworks, libraries and technologies related to them.</p>
                        <hr/>
                    </TextBlock>
                    </Col>
                    <Col col="12">
                        <TextBlock className="text-block">
                          <h2 className="text-block__heading"><i className="fa fa-laptop"></i>Front-End Web Development</h2>
                          <p className="text-block__p">
                              <strong>I specialize in applications written in <a href=" https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>, <a href="http://es6-features.org/#Constants">ES6</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS3</a>, and <a href="https://sass-lang.com/">SASS</a></strong>. Recently, I became a huge fan of Reacts component based design and Redux one-way data flow architecture.
                          </p>
                          <p className="text-block__p">My current experience and skills in front-end include:</p>
                          <ul>
                              <li>Lead ES6/Javascript development in refactoring an existing app architecture by improving its extensibility and reliability</li>
                              <li>Full integration of front-end development using tools like <a href="https://webpack.js.org/">Webpack</a> with features like automatic code reload, code minifications</li>
                              <li>Knowledge and huge experience in many JS ecosystem, by using many libraries like React, React-Router, Redux, jQuery, Lodash/Underscore and whatever else was needed</li>
                              <li>Developed modular styles sheet using SASS/CSS3 with features like responsive design, modular typography scale </li>
                          </ul>
                        </TextBlock>
                        <Row className="icon-row">
                            <Col col="3" className="icon">
                              <div className="icon__wrapper">
                                  <ReactIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <SassIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <JavascriptIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <JqueryIcon/>
                              </div>
                            </Col>
                        </Row>
                        <hr/>
                    </Col>
                    <Col col="12">
                    <TextBlock className="text-block">
                          <h2 className="text-block__heading"><i className="fa fa-code"></i>Back-End Web Development</h2>
                          <p className="text-block__p">
                              <strong>My backend tech stack includes <a href="https://www.python.org/">Python</a> and <a href="https://www.djangoproject.com/">Django Framework</a>, and alternatively <a href="https://nodejs.org/en/">NodeJs</a>.</strong> The tech stack that I use on a project is largely based on the project requirements.
                          </p>
                          <p className="text-block__p">My current experience and skills in back-end include:</p>
                          <ul>
                              <li>Lead development of web apps in Python/Django</li>
                              <li>Developing RESTful APIs, and integrating third party APIs to applications </li>
                              <li>Intergrating different types of databases (like <a href=" https://www.postgresql.org/">PostgresSQL</a>, <a href="https://www.mysql.com/">MySQL</a>, <a href="https://redis.io/">Redis</a>)</li>
                              <li>Refactoring existing applications, by improving code readability, separating concerns into separate functions and classes</li>
                              <li>Writing unit and e2e tests</li>
                          </ul>
                          
                        </TextBlock>
                          <Row>
                            <Col col="3" className="icon">
                              <div className="icon__wrapper">
                                  <PythonIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <DjangoIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <NodeIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <PostgresIcon/>
                              </div>
                            </Col>
                        </Row>
                        <hr/>
                    </Col>
                    <Col col="12">
                    <TextBlock className="text-block">
                        <h2 className="text-block__heading"><i className="fa fa-terminal"></i>Other Skills</h2>
                        <p className="text-block__p">
                          Not only I have coded their back-end and front-end code, but often I also had to care about other things needed in a successful web application:
                        </p>
                        <ul>
                        <li>Automated Web Scraping</li>
                            <li>
                              Planning of UI design and thinking how it affects the UX
                            </li>
                            <li>
                              Consistency in design and typography
                            </li>
                            <li>
                              Search Engine Optimization
                            </li>
                            <li>
                              Developing project plans that is understandable for all stakeholders
                            </li>
                        </ul>
                        </TextBlock>
                    </Col>
                          <Row>
                            <Col col="3" className="icon">
                              <div className="icon__wrapper">
                                  <RedisIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <DockerIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <GitIcon/>
                              </div>
                            </Col>
                            <Col col="3">
                              <div className="icon__wrapper">
                                  <WordpressIcon/>
                              </div>
                            </Col>
                        </Row>
                </Row>
            </div>
        </Page>
    )
}

export default SkillPage;
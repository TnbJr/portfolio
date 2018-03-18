import React from 'react';
import Page from './Page.js';
import {Row, Col} from '../grid/Grid.js';
import {TextBlock, TechTags} from '../helpers.js';
import data from '../../data/data.js';

class Portfolio extends React.Component{
  renderTimeline(item, index){
    return(
      <li className="timeline-element" key={item.name ? item.name : `timeline-element-${index}`}>
        <Row>
          <Col col="2" hidden-sm-down>
            <div className="timeline-element__date">
              {item.date}
            </div>
          </Col>
          <Col sm="10">
          { item.image 
            ? 
            <Row className="timeline-element__content">
              <Col sm="12" md="6" className="project-text">
                <TextBlock>
                  <h3 className="timeline__heading"><a href={item.webLink}>{item.name ? item.name : ""}</a></h3>
                  { item.contentParagraphs ? item.contentParagraphs.map((p, index)=>(
                    <p className="text-block__p" key={`${item.name}-para-${index}`}>{p}</p>
                  )) : ""}
                  <ul>
                    { item.contentList ? item.contentList.map((li, index)=>(
                      <li key={`${item.name}-contentList-${index}`}>{li}</li>   
                    )) : ""}
                  </ul>
                  { item.techTags ? <TechTags tags={item.techTags}/> : ""}
                        </TextBlock>
              </Col>
              <Col sm="12" md="6" className="timeline-element-image">
                <div className="image-wrapper">
                  <img alt="" src={item.image} className="image-wrapper__image"/>  
                </div>
                
              </Col>
            <hr className="timeline-element__hr"></hr>
            </Row> 
            : 
            <div className="timeline-element__content">
              <TextBlock>
                <h3 className="timeline__heading"><a href={item.webLink}>{item.name ? item.name : ""}</a></h3>
                { item.contentParagraphs ? item.contentParagraphs.map((p, index)=>(
                  <p className="text-block__p" key={`${item.name}-para-${index}`}>{p}</p>
                )) : ""}
                <ul>
                { item.contentList ? item.contentList.map((li, index)=>(
                  <li key={`${item.name}-contentList-${index}`}>{li}</li>   
                )) : ""}
                </ul>
                { item.techTags ? <TechTags tags={item.techTags}/> : ""}
              </TextBlock>
              <hr className="timeline-element__hr"></hr>
            </div>
          }

            </Col>
          </Row>
      </li>
    )
  }

  render(){
    return(
      <Page>
        <div className="timeline">
          <h2 className="timeline__heading">Experience</h2>
          <ul>
            {data.portfolioItems.map((item, index)=>(this.renderTimeline(item, index)))}
          </ul>
        </div>
      </Page>
    )
  }
}

export default Portfolio;
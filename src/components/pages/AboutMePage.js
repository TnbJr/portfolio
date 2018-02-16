import React from 'react';
import Page from './Page.js'
import {Row, Col} from '../grid/Grid.js';
import {TextBlock} from '../helpers.js';
import jaredImage from '../../images/jared.jpg';

const AboutMePage = () =>{
	return(
		<Page>
			
			<Row className="about-element__content">
				<Col sm="12" md="7" className="project-text">
					<TextBlock>
						<h2 className="text-block__heading">About Me</h2>
						<p className="text-block__p">My name is <strong>Jared Russell</strong>, and I'm a <strong>Full-Stack Web Developer</strong> based in <strong>New York City, NY</strong>. I strive on <strong>creating scalable web application</strong> that have <strong>beautiful UI components.</strong></p>
						<p className="text-block__p">I started programming in <strong>2008</strong> after I taught myself <strong>HTML, CSS, and Javascript.</strong> I later used my new skills to create static web sites for friends and family members as a way to make money while I attended school.</p>
						<p className="text-block__p">I am alumni of <strong><a href="https://www.yearup.org/">Yearup</a></strong> as well as <strong><a href="https://streetwisepartners.org/new-york-city/">Street Wise Partners</a></strong> two organization that have helped shaped the lives of many young people. </p>
						<p className="text-block__p">Seeing the way that my life has changed due to the actions of others has inspired me to help others as well. I am a co-founder of <strong>TNB</strong> which is a small organization in <strong>Queens Village, NY</strong> that teaches young adults personal finance.</p>
						<p className="text-block__p">
							When I am not programming or learning about the latest and greates Python/JS technologies you can find me <strong>helping out my community</strong>. I also enjoy <strong>listening to music, playing basketball, and playing video games</strong>. 
						</p>
	                </TextBlock>

				</Col>
				<Col sm="12" md="5" className="about-element-image">
					<div className="image-wrapper">
						<img src={jaredImage} className="image-wrapper__image"/>	
					</div>
				</Col>
			</Row>
		</Page>
	)
}

export default AboutMePage
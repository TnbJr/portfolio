import React from 'react';

export const TextBlock = (props) => <div className="text-block">{props.children}</div>


export const TechTags = (props) => { 
	return(
		<div>
			<h5 className="text-block__heading">Technologies</h5>
			<ul className="tech-tags">
				{ props.tags.map((t)=>(
					<li className="tech-tags__tag" key={t}><a href="#" rel="nofollow" target="_blank" >{t}</a></li>		
				))}
			</ul>
		</div>
	)
}

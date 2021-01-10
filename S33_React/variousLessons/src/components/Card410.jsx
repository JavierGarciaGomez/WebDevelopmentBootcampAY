// 410
import React from 'react';
import Avatar from './Avatar411';

function Card410(props) {
	return (
		<div className="card">
			<div className="top">
				<h2 className="name">{props.name}</h2>
				<Avatar imgSrc={props.imgSrc} />
			</div>
			<div className="bottom">
				<p className="info">{props.tel}</p>
				<p className="info">{props.email}</p>
			</div>
		</div>
	);
}

export default Card410;

// 410
import React from 'react';
import Card410 from './Card410';
import contacts from '../contacts410';

function App410() {
	return (
		<div>
			<h1 className="heading">410. My Contacts</h1>
			<Card410
				name={contacts[0].name}
				imgSrc={contacts[0].imgURL}
				tel={contacts[0].tel}
				email={contacts[0].email}
			/>
			<Card410
				name={contacts[1].name}
				imgSrc={contacts[1].imgURL}
				tel={contacts[1].tel}
				email={contacts[1].email}
			/>
			<Card410
				name={contacts[2].name}
				imgSrc={contacts[2].imgURL}
				tel={contacts[2].tel}
				email={contacts[2].email}
			/>
		</div>
	);
}

export default App410;

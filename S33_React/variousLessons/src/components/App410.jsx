// 410, 412
import React from 'react';
import Card410 from './Card410';
import contacts from '../contacts410';
import Avatar from '../components/Avatar411';

const meImg =
	'https://lh3.googleusercontent.com/proxy/CTGZ4unUsoLx37y4NK0XB6TG_vUQ2egsphWAwOJE2ypGeGt2hno8ufDIhROaGaQHbO5rrfKnzx2k8flRqe7iSwvKJcNE5aVg0l71AslMjBBZ8LEtc41rx1HP';

// 412
function createCard(contact) {
	return (
		<Card410
			key={contact.id}
			id={contact.id}
			name={contact.name}
			imgSrc={contact.imgURL}
			tel={contact.phone}
			email={contact.email}
		/>
	);
}

function App410() {
	return (
		<div>
			<h1 className="heading">410. My Contacts</h1>
			{/* 411 Reusing class */}
			<Avatar imgSrc={meImg} />
			{/* 412 */}
			{contacts.map(createCard)};
			{/* Replaced with the map above
			
			<Card410
				name={contacts[0].name}
				imgSrc={contacts[0].imgURL}
				tel={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card410
				name={contacts[1].name}
				imgSrc={contacts[1].imgURL}
				tel={contacts[1].phone}
				email={contacts[1].email}
			/>
			<Card410
				name={contacts[2].name}
				imgSrc={contacts[2].imgURL}
				tel={contacts[2].phone}
				email={contacts[2].email}
			/> */}
		</div>
	);
}

export default App410;

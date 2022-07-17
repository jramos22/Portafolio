import React from 'react';

const PracticesCards = ({ props }) => {
	const practices = props.data.allPractices[0];
	return (
		<>
			{practices.practiceItem.map((element) => {
				return (
					<article
						key={element.id}
						className="card_practice_container"
						data-aos="fade-up-left"
					>
						<img
							src={element.cardImage[0].url}
							alt={element.cardImage[0].filename}
						/>
						<h2>{element.cardTitle}</h2>
						<ul>
							{element.cardTechnology.map((element) => {
								return (
									<li key={element.id}>
										{element.technologyName}
									</li>
								);
							})}
						</ul>
					</article>
				);
			})}
		</>
	);
};
export default PracticesCards;

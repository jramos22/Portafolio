import React from 'react';
import Open from '../img/open.png';
import Close from '../img/close.png';

const KnowContent = (know) => {
	return (
		<article className="Know_container" data-aos="fade-up-left">
			<img src={Open} alt="open" />
			<p>{know.know}</p>
			<img src={Close} alt="close" />
		</article>
	);
};

export default KnowContent;

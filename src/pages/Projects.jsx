import React, { useState, useEffect } from 'react';
import CallApi from '../services/CallApi';
import ProjectsCards from '../components/ProjectsCards';
import PracticesCards from '../components/PracticesCards';
import BackGround from '../components/BackGround';
export default function Projects() {
	const [isloged, setLoged] = useState(false);
	const [projects, setProjects] = useState([]);
	const [practices, setPractices] = useState([]);
	useEffect(() => {
		const getProjects = async () => {
			const Url = process.env.REACT_APP_API_URL;
			const Token = process.env.REACT_APP_API_TOKEN;
			const Body =
				'query project{allProjects{projectCard{id cardImage{url filename} cardTitle cardDescription cardTechnology{id technologyName} cardLink}}}';
			const get = await CallApi(Url, Token, Body);
			setProjects(get);
		};

		const getPractices = async () => {
			const Url = process.env.REACT_APP_API_URL;
			const Token = process.env.REACT_APP_API_TOKEN;
			const Body =
				'query practices{allPractices{practiceItem{id cardImage{url filename} cardTitle cardTechnology{id technologyName}}}}';
			const get = await CallApi(Url, Token, Body);
			setPractices(get);
		};
		const getInformation = async () => {
			await getProjects();
			await getPractices();
			setLoged(true);
		};
		getInformation();
	}, [isloged]);

	if (!isloged) return <p>Loading...</p>;

	return (
		<>
			<main className="content">
				<div className="projects_content">
					<h2 data-aos="fade-up-right">Projects</h2>
					<div className="projects_cards_container">
						<ProjectsCards props={projects} />
					</div>
					<h2 data-aos="fade-up-right">Practices</h2>
					<div className="practices_cards_container">
						<PracticesCards props={practices} />
					</div>
				</div>
				<BackGround />
			</main>
		</>
	);
}

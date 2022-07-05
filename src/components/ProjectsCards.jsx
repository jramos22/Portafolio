import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProjectsCards = ({ props }) => {
    const projects = props.data.allProjects[0];
    return (
        <>
            {projects.projectCard.map((element) => {
                return (
                    <article key={element.id} className='card_container' data-aos="fade-up-left">
                        <img src={element.cardImage[0].url} alt={element.cardImage[0].filename} />
                        <h2>{element.cardTitle}</h2>
                        <ReactMarkdown children={element.cardDescription} />
                        <ul>{element.cardTechnology.map((technology) => {
                            return (
                                <li key={technology.id}>{technology.technologyName}</li>
                            );
                        })}
                        </ul>
                        <a href={element.cardLink} target="_blank" rel="noreferrer">Go to website</a>
                    </article>
                );
            })}
        </>
    );
}
export default ProjectsCards;
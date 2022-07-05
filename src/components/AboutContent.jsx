import React from 'react';
import ReactMarkdown  from 'react-markdown';
import KnowContent from './KnowContent';
import { Link } from 'react-router-dom';
function AboutContent({aboutMe}){
    return(
        <>
            <section className='about_content' >
                <h2 data-aos="fade-up-right">About Me</h2>
                <img className='about_content_main_img' src={aboutMe.data.allAboutMes[0].img[0].url} alt="jose-img" data-aos="fade-up-left"/>
                <ReactMarkdown className='about_content_description' children={aboutMe.data.allAboutMes[0].description}/>  
                <h2 data-aos="fade-up-right">What do I know?</h2>
                <div className="about_content_main_knowledge" data-aos="fade-up-left">
                    {aboutMe.data.allAboutMes[0].know.map((element)=>{
                        return <KnowContent key={element.id} know={element.know}/>
                    })}
                </div>
                <h2 data-aos="fade-up-right">Additional knowledge</h2>
                <div className='about_content_aditional_knowledge'>
                    <ul>
                        {aboutMe.data.allAboutMes[0].aditionalKnowledge.map((element)=>{
                            return <li data-aos="fade-up-left" key={element.id}>{element.adtional}</li>
                        })}
                    </ul>
                </div>
                <h2 data-aos="fade-up-right">Want to know what I can do?</h2>
                <div className='about_content_button_container'>
                <Link data-aos="fade-up-left" className={'button'} to={'/projects'}>projects</Link>
                </div>
            </section>
        </>
    );
}

export default AboutContent;
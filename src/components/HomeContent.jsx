import React from 'react';
import { Link } from 'react-router-dom';
import { TypingAnimation } from './TypingAnimation';
import BackGround from '../components/BackGround';
export default function HomeContent() {
    
    return (
        <>
            <section className='home_content'>
                <h1>Hi, my name is</h1>
                <h2>José Ramos Barquero</h2>
                <TypingAnimation />
                <p>I am a person passionate about technology, I am always looking to learn new things.</p>
                <div className='button_container'>
                <Link className={'button'} to={'/about'}>About me</Link>
                </div>
            </section>
            <BackGround/>
        </>
    );
}
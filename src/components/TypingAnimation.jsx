import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const TypingAnimation = ()=> {

    const {text} = useTypewriter({
        words: [' Developer.', ' Designer.'],
        loop: 0, 
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 1500,
    })
    return (
        <>
            <div>
                <h3>I'm a web
                    <span>
                        {text}
                    </span>
                    <Cursor/>
                </h3>
            </div>
        </>
    );
}
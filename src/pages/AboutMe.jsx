import React, { useEffect, useState } from "react";
import AboutContent from "../components/AboutContent";
import BackGround from "../components/BackGround";
import CallApi from "../services/CallApi";

export default function AboutMe(){
    const [about, SetAbout] = useState([]);
    const [loaded, SetLoaded] = useState(false);

    useEffect(() => {
        const getAbout = async () =>{
            const URl = process.env.REACT_APP_API_URL;
            const TOKEN = process.env.REACT_APP_API_TOKEN;
            const Body = "query AboutMe{allAboutMes{img{id url}description know{id know} aditionalKnowledge{id adtional}}}"
            const get = await CallApi(URl, TOKEN, Body);
            SetAbout(get);
            SetLoaded(true);
        }
        getAbout();
    }, [loaded]);

    if(!loaded) return <p>Loanding..</p>
    
    return(
        <>
            <main className="content">
                < AboutContent aboutMe={about}/>
                <BackGround/>
            </main>
            
        </>
    )
}
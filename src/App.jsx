import './App.css'
import Home from './Home'
// import React from 'react'
import Layout from "./Layout"
import { MockData } from "./MockData";
import { MockDataCard } from "./MockDataCard";
import Tag from "./Tag";
import Card from "./Card";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import "./App.css";
import Title from './Title';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import MySkills from './MySkills';
import Projects from './Projects';
import Contacts2 from './Contacts2';

const App = () => {

    return (
        <>
            <Layout>
                <Home />
                <AboutMe />
                <Experiences />
                {/* <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                        <article className="mt-5 md:mt-0 md:w-2/5">
                            <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">Certification</h1>
                        </article>
                        <article className="md:w-3/5">
                            <p className="text-xl font-normal text-[#696464]">
                            </p>
                        </article>
                    </section> */}
                <MySkills />
                <Projects />
                <Contacts2 />
            </Layout>
        </>
    )
}

export default App

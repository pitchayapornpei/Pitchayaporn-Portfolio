// import React from 'react'
import Layout from "./Layout"
import { MockData } from "./MockData";
import { MockDataCard } from "./MockDataCard";
import Tag from "./Tag";
import Card from "./Card";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import "./App.css";
import Title from "./Title";

const Experiences = () => {

    return (
        <>
            <article className="flex mt-5 md:mt-[200px] md:w-full justify-center pt-20" id="experiences">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-2 top-[100%] left-[50%] translate-x-[100%] translate-y-[900%]
                            blur-[100px]">
                </div>
                <div className="relative z-10">
                    {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow ">Experiences</h1> */}
                    <Title text={"Experiences"} />
                </div>
            </article>

            <section className="md:mx-24 md:mt-[100px] md:mb-24 flex flex-col md:flex-row">
                <article className="mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        November, 2023 - February, 2024
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px]">
                    <p className="text-2xl font-semibold text-[#696464]">
                        Bootcamp
                    </p>
                    <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Junior Software Developer Programme(Cohort 6)
                    </p>
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        November, 2023 - February, 2024
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | Generation Thailand
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li>Effectively problem solve to identify solutions to resolve project related issues.</li>
                        <li>Use coding best practices to execute assigned tasks using languages such as HTML, JavaScript, MongoDB, Node, Express.</li>
                        <li>Consistently and proactively run tests to check code is correct.</li>
                        <li>Proactively learn new technical and non-technical skills in order to improve performance and increase the likelihood of a promotion.</li>
                        <li>Effectively communicate and collaborate with coworkers and other stakeholders using a variety of platforms.</li>
                    </ul>
                </article>
            </section>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-0 top-[90%] translate-x-[-50%] translate-y-[2300%]
                            blur-[100px]">
                </div>
                <article className="mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        July, 2023 - August, 2023
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px]">
                    <p className="text-2xl font-semibold text-[#696464] mt-10 md:mt-0">
                        Internship
                    </p>
                    <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Product Owner: Define Task Announcement requirements on the Workflow side.
                    </p>
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        July, 2023 - August, 2023
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | Vonder
                    </p>
                    <ul className="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li className="font-medium">Product Owner Duties:</li>
                        <ul className="list-disc text-xl font-normal text-[#696464] pl-[24px]">
                            <li>Defining requirements.</li>
                            <li>Designing Low Fidelity & High Fidelity Prototypes for all 8 Tasks of Task Announcement on the Workflow (Website) side.</li>
                            <li>Collaborating with various teams, including PO, UX/UI Design, Development, and CX teams.</li>
                            <li>Developing teamwork skills, assertiveness, and effective communication.</li>
                            <li>Learning to work independently.</li>
                        </ul>
                        <li className="pt-4 font-medium">UX/UI Designer Duties:</li>
                        <ul className="list-disc text-xl font-normal text-[#696464] pl-[24px]">
                            <li>Designing UI Flow for Task Assignment in the Dashboard section on the Workflow (Website) side.</li>
                            <li>Utilizing tools like Figma and Design System.</li>
                            <li>Gaining insights into UX/UI design team processes.</li>
                            <li>Developing collaborative and independent work skills.</li>
                        </ul>
                    </ul>
                    <p className="text-xl font-normal text-[#696464]">
                        During this experience, I learned how to transition from being a follower to a leader, actively participating in projects, conducting meetings, and gaining valuable skills in both team collaboration and independent work and expertise in an agile environment, where my passion for collaboration, quick decision-making, and iterative development can thrive.
                    </p>
                </article>
            </section>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">

                <article className="mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        June, 2022 - August, 2022
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px]">
                    <p className="text-2xl font-semibold text-[#696464] mt-10 md:mt-0">
                        Internship
                    </p>
                    <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Web application developer: Create and develop a web application.
                    </p>
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        June, 2022 - August, 2022
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | National Telecom Public Company Limited in the section of Internet Gateway Operation, Datacenter Operation Department
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li>The assigned duties are to create and develop web applications. Development languages include HTML/CSS and Vue.js.</li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Experiences
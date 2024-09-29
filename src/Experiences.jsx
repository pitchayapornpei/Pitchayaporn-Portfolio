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
                            rounded-[100%] absolute z-2 top-[110%] left-[50%] translate-x-[100%] translate-y-[900%]
                            blur-[100px]">
                </div>
                <div className="relative z-10">
                    {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow ">Experiences</h1> */}
                    <Title text={"Experiences"} />
                </div>
            </article>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-0 top-[90%] translate-x-[-50%] translate-y-[2300%]
                            blur-[100px]">
                </div>
                <article className="mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        September, 2024 - Present
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px]">
                    <p className="text-2xl font-semibold text-[#696464] mt-10 md:mt-0">
                        Business Analyst
                    </p>
                    {/* <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Business Analyst
                    </p> */}
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        September, 2024 - Present
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | SCG LIVING AND HOUSING SOLUTION CO., LTD
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li>Responsible for overseeing the IT system (Web Application) with a solid understanding of business processes related to purchasing, sales, inventory, and basic accounting.</li>
                        <li>Provide consultation and initial troubleshooting support for system users.</li>
                        <li>Gather and summarize business requirements or user-reported issues, including system enhancements, and prepare design documents while verifying solutions provided by vendors.</li>
                        <li>Design test scenarios and coordinate system testing with end-users.</li>
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
                        October, 2023 - November, 2023 &
                    </p>
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        March, 2024 - September, 2024
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
                    <p className="text-2xl font-semibold text-[#696464]">
                        Assistant Product Owner
                    </p>
                    {/* <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Business Analyst
                    </p> */}
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        October, 2023 - November, 2023 &
                    </p>
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        March, 2024 - September, 2024
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | Gofive
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li>Create, prioritize and maintain feature lists and user stories on the development scope for sprints.</li>
                        <li>Researched and analyzed the market and users to understand insights, needs and pain points for developing product improvements and new features.</li>
                        <li>Manage the product backlog and ensure that the development team(s) consistently delivers on the client's needs and wants.</li>
                        <li>Eliciting and codifying requirements into specific tools (e.g. JIRA) to guarantee effective demand management and job sequencing.</li>
                        <li>Work within an Agile environment to deliver large and complex products.</li>
                        <li>Work cross-functionally with UI/UX designers, IT and Customer Service that meet the business requirements.</li>
                    </ul>
                </article>
            </section>

            <section className="md:mx-24 md:mt-[100px] md:mb-24 flex flex-col md:flex-row">
                <article className="flex flex-col justify-between mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        September, 2024
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
                    <p className="text-2xl font-semibold text-[#696464]">
                        Product Blend: Where Business, Tech, Design, Data come together flawlessly.
                    </p>
                    {/* <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Product Blend: Where Business, Tech, Design, Data come together flawlessly.
                    </p> */}
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        September, 2024
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | PM Corner Thailand x หมีเรื่องมาเล่า
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4">
                        <li>Whether you come from a business, technology, design, or data background, we welcome your voice and those around you. By listening and understanding each other, we aim to collaborate in creating better products together.</li>
                        <li>Connect with fellow product creators, whether from the same or different lines of work.</li>
                        <li>Engage in meaningful conversations to better understand each other's challenges.</li>
                        <li>Let us help you brainstorm solutions that you can take back and apply to your work.</li>
                    </ul>
                </article>
            </section>
            <section className="w-full flex px-[48px] gap-5 flex-col md:flex-row">
                <article className="flex-1">
                    <img className="w-full mx-auto mb-[20px] relative z-10 object-cover h-full" src="./PM1.jpg" />
                </article>
                <article className="flex-1">
                    <img className="w-full mx-auto mb-[20px] relative z-10 object-cover h-full" src="./PM2.jpg" />
                </article>
            </section>

            <section className="md:mx-24 md:mt-[100px] md:mb-24 flex flex-col md:flex-row">
                <article className="flex flex-col justify-between mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        July, 2024
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
                    <p className="text-2xl font-semibold text-[#696464]">
                        PMAT Thailand HR Tech 2024
                    </p>
                    {/* <p className="text-xl font-semibold text-[#FC8178] py-4">
                        Product Blend: Where Business, Tech, Design, Data come together flawlessly.
                    </p> */}
                    <p className="text-xl font-normal text-[#696464] md:hidden block mb-5">
                        July, 2024
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        | PMAT
                    </p>
                    <ul class="list-disc text-xl font-normal text-[#696464] pl-[24px] py-4 mb-0 md:mb-24">
                        <li>HR TECH CONFERENCE: Featuring 4 Main Stages, 16 Parts, and 100 Sessions to discuss topics related to Business, Organization, People, Workplace, Wellbeing, and AI/Data.</li>
                        <li>HR TECH EXHIBITION: A full-scale exhibition covering a 7,000 sq.m. area, showcasing and allowing hands-on experiences with over 100 HR Technology and Solutions products.</li>
                        <li>STARTUP DEMO PITCH: A platform for HR Tech Startups to showcase their innovative ideas, present business concepts, and compete for awards.</li>
                        <li>HR TECH FOR WELLBEING: Unveiling new dimensions of employee physical and mental wellness, sharing concepts, methods, and technologies to promote employee happiness and organizational growth.</li>
                        <li>WORKSHOP: Hands-on sessions designed by leading speakers and instructors from top organizations.</li>
                        <li>NETWORKING: Providing opportunities for participants to engage and connect with fellow HR professionals.</li>
                    </ul>
                    <article className="w-full">
                        <img className="w-full mx-auto mb-[20px] relative z-10" src="./HRtech.jpg" />
                    </article>
                </article>
            </section>
            {/* <section className="w-full flex px-[48px] gap-5 flex-col md:flex-row">
                <article className="w-full">
                    <img className="w-full mx-auto mb-[20px] relative z-10" src="./HRtech.jpg" />
                </article>
            </section> */}

            <section className="md:mx-24 md:mt-[100px] md:mb-24 flex flex-col md:flex-row">
                <article className="flex flex-col justify-between mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        November, 2023 - February, 2024
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
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
            <section className="w-full flex px-[48px] gap-5 flex-col md:flex-row">
                <article className="w-full">
                    <img className="w-full mx-auto mb-[20px] relative z-10" src="./Bootcamp1.jpg" />
                </article>
                <article className="w-full">
                    <img className="w-full mx-auto mb-[20px] relative z-10" src="./Bootcamp2.jpg" />
                </article>
            </section>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-0 top-[120%] translate-x-[-50%] translate-y-[2300%]
                            blur-[100px]">
                </div>
                <article className="mt-5 md:mt-0 md:w-2/5">
                    <p className="text-xl font-normal text-[#696464] hidden md:block">
                        July, 2023 - August, 2023
                    </p>
                </article>
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
                    <p className="text-2xl font-semibold text-[#696464]">
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
                <article className="md:w-3/5 px-[48px] mt-10 md:mt-0">
                    <p className="text-2xl font-semibold text-[#696464]">
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
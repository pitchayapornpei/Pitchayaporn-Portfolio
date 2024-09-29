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

const AboutMe = () => {

    return (
        <>
            <section className="md:mx-24 md:mt-[200px] md:mb-24 flex flex-col md:flex-row pt-20" id="aboutme">
                <article className="mt-5 md:mt-0 md:w-2/5">
                    <img className="p-5 md:p-0 w-[493px] mx-auto mb-[20px] relative z-10" src="./ImageProfile2.jpg" />
                </article>
                <article className="flex flex-col justify-center md:w-3/5 p-[48px]">
                    <div className="text-center md:text-start">
                        {/* <h1 className=" bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow" >About me</h1> */}
                        <Title text={"About me"} />
                    </div>
                    <p className="text-xl font-normal text-[#696464] pt-[16px]">
                        I'm currently working as a Business Analyst at SCG, having previously gained experience as an Assistant Product Owner at Gofive. I'm also a graduate of the Junior Software Developer Programme (Cohort 6) at Generation Thailand. During my prior internship as a Web Application Developer, I was responsible for creating and developing web applications. Additionally, in my role as a Product Owner & UX/UI Designer, I took charge of defining requirements and designing user interfaces for web applications.
                    </p>
                </article>
            </section>
            <section className="md:mx-24 md:mt-[100px] md:mb-24 flex flex-col md:flex-row">
                <article className="mt-5 md:mt-0 md:w-2/5 text-center md:text-start mb-5 md:mb-0">
                    {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">Education</h1> */}
                    <Title text={"Education"} />
                </article>
                <article className="md:w-3/5 px-[48px]">
                    <p className="text-xl font-semibold text-[#696464]">
                        King Mongkut’s University of Technology Thonburi
                    </p>
                    <p className="text-xl font-normal text-[#696464] py-4">
                        August, 2019 - May, 2023 | Bangkok, TH
                    </p>
                    <p className="text-xl font-normal text-[#696464]">
                        B.Eng Computer Engineering, GPA: 3.00
                    </p>
                </article>
            </section>
        </>
    )
}

export default AboutMe
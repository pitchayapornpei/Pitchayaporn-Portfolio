// import React from 'react'
import Layout from "./Layout"
import { MockData } from "./MockData";
import { MockDataCard } from "./MockDataCard";
import Tag from "./Tag";
import Card from "./Card";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import "./App.css";

const Home = () => {

    return (
        <>
            <section className="justify-center px-5 md:justify-start md:mt-24 md:mb-24 flex flex-col md:flex-row">
                <div className="circleposition w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-0 top-[50%] left-[65%] translate-x-[-50%] translate-y-[-50%]
                            blur-[150px]">
                </div>
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-0 top-[90%] translate-x-[20%] translate-y-[170%] md:translate-x-[50%] md:translate-y-[120%]
                            blur-[50px]">
                </div>
                <article className="text-center w-full md:text-start mt-5 md:mt-0 md:w-3/5">
                    <p className="text-4xl font-bold text-[#696464]">Hello I’m</p>
                    <div className="relative z-10">
                        <h1 className="gradiant-text bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl text-center md:text-start lg:text-[90px] font-bold mt-10 md:mt-[72px] drop-shadow my-4 runnning-text">Pitchayaporn
                            Hadsametto</h1>
                    </div>
                    <p className="text-2xl font-semibold text-[#696464] my-4">I’m a Business Analyst | Product Owner | Junior Software Developer | Front-end Developer | UX/UI Designer</p>
                    <div className="flex justify-center md:justify-start gap-[8px] mt-[32px]">
                        <a href="https://drive.google.com/file/d/1Xq3fkvycDBq1QQKFEw9fQQNlkD6Zw1Po/view?usp=sharing" target="_blank">
                            <button className="btn bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] text-base font-medium text-[#FFFFFF] rounded-full hover:border-[#FC8178] hover:border-4">
                                <span className="material-symbols-outlined text-[#FFFFFF]">
                                    <span class="material-symbols-outlined">
                                        visibility
                                    </span>
                                </span>
                                <p className="hidden md:block">View Resume</p>
                            </button>
                        </a>
                        <Contacts text={"Github"} icon={"./github.png"} width={"w-[24px]"} height={"h-[24px]"} link={"https://github.com/pitchayapornpei"} />
                        <Contacts text={"LinkedIn"} icon={"./linkedin.png"} width={"w-[24px]"} height={"h-[24px]"} link={"https://www.linkedin.com/in/pitchayaporn-hadsametto/"} />
                        <Contacts text={"Email"} icon={"./email.png"} width={"w-[40px]"} height={"h-[22.5px]"} link={"pitchayapornpei35@gmail.com"} />
                    </div>
                </article>
                <article className="w-full md:w-2/5">
                    <img className="w-[493px] mx-auto mb-[20px] relative z-10" src="./image-peipei3.png" />
                </article>
            </section>
        </>
    )
}

export default Home
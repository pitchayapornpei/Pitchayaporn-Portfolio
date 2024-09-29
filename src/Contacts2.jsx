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

const Contacts2 = () => {

    return (
        <>
            <article className="flex mt-5 md:mt-0 md:w-full justify-center" id="contacts">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-2 top-[100%] left-[50%] translate-x-[80%] translate-y-[6650%]
                            blur-[100px]">
                </div>
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-2 top-[1010%] left-[50%] translate-x-[-500%] translate-y-[7000%]
                            blur-[100px]">
                </div>
                {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">Contacts</h1> */}
                <Title text={"Contacts"} />
            </article>
            <article className="flex mt-5 md:mt-0 md:w-full justify-center">
                <p className="text-xl font-normal text-[#696464] text-center m-[40px]">
                    I'm currently specializing in Front-end Development.<br></br>
                    Feel free to get in touch and talk more about your projects.
                </p>
            </article>
            <article className="flex mt-5 mb-[200px] md:mt-0 md:w-full justify-center gap-[8px]">
                <Contacts text={"Github"} icon={"./github.png"} width={"w-[24px]"} height={"h-[24px]"} link={"https://github.com/pitchayapornpei"} />
                <Contacts text={"LinkedIn"} icon={"./linkedin.png"} width={"w-[24px]"} height={"h-[24px]"} link={"https://www.linkedin.com/in/pitchayaporn-hadsametto/"} />
                <Contacts text={"Email"} icon={"./email.png"} width={"w-[40px]"} height={"h-[22.5px]"} link={"pitchayapornpei35@gmail.com"} />
                <Contacts text={"Behance"} icon={"./behance.png"} width={"w-[40px]"} height={"h-[22.5px]"} link={"https://www.behance.net/pitchayapornpei"} />
                <div className="hidden md:block">
                    <Contacts text={"099-593-5451"} icon={"./phone.png"} width={"w-[24px]"} height={"h-[24px]"} />
                </div>
            </article>
        </>
    )
}

export default Contacts2
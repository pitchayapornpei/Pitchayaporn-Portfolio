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

const MySkills = () => {

    return (
        <>
            <article className="flex mt-20 md:mt-[200px] md:w-full justify-center">
                {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">My Skills</h1> */}
                <Title text={"My Skills"} />
            </article>
            <section className="md:mx-24 md:mt-24 md:mb-24 flex md:flex-row">

                <article className="flex flex-row flex-wrap justify-around gap-[0px] md:gap-[20px] mt-12 md:mt-0">
                    {MockData.map((MockData) => (
                        <div className="flex flex-col w-40 items-center mb-24">
                            <img className="w-[36px]" src={MockData.image} />
                            <p className="text-lg font-normal text-[#696464] mt-5">{MockData.name}</p>
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}

export default MySkills
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

const Projects = () => {

    return (
        <>
            <article className="flex mb-24 mt-5 md:mt-[200px] md:w-full justify-center pt-20" id="projects">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-2 top-[1000%] left-[50%] translate-x-[-150%] translate-y-[4200%]
                            blur-[80px]">
                </div>
                {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">Projects</h1> */}
                <Title text={"Projects"} />
            </article>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row p-3 md:p-0">
                <article className="flex flex-row flex-wrap justify-around gap-[20px]">
                    <Card
                        image={"./GreenSculpt.png"}
                        titlecolor={"text-[#8BCA00]"}
                        title={"Green Sculpt"}
                        icon={"./github.png"}
                        icon2={"./link.png"}
                        description={"Web application for exercise."}
                        date={"November, 2023 - February, 2024"}
                        location={"| Generation Thailand"} />

                    <Card2
                        image={"./lineman.png"}
                        titlecolor={"text-[#44D47F]"}
                        title={"LINE MAN Coupon Book"}
                        icon={"./link.png"}
                        link={"https://www.behance.net/gallery/169429715/Project-Coupon-Book"}
                        description={"A feature ‘Coupon Book’ where users can simply find and use their coupons."}
                        date={"May, 2023"}
                        location={"| LINE MAN"}
                        tagbgcolor={"bg-[#E3F9EC]"}
                        tagtextcolor={"text-[#44D47F]"} />

                    <Card2
                        image={"./mute-maid-service.png"}
                        titlecolor={"text-[#8384F0]"}
                        title={"Mute Maid Service"}
                        icon={"./link.png"}
                        link={"https://www.behance.net/gallery/167601305/Project-Mute-Maid-Service"}
                        description={"A mobile application for maid service by housekeeper with hearing impaired."}
                        date={"August, 2022 - May, 2023"}
                        location={"| KMUTT"}
                        tagbgcolor={"bg-[#EDEDFD]"}
                        tagtextcolor={"text-[#8384F0]"} />

                    <Card2
                        image={"./cfood.png"}
                        titlecolor={"text-[#64BF4D]"}
                        title={"CFood"}
                        icon={"./link.png"}
                        link={"https://www.behance.net/gallery/167601819/Project-CFood"}
                        description={"Design an application for healthy food lovers."}
                        date={"March, 2022 - May, 2022"}
                        location={"| KMUTT"}
                        tagbgcolor={"bg-[#E6F4E3]"}
                        tagtextcolor={"text-[#64BF4D]"} />

                    <Card2
                        image={"./chitchat.png"}
                        titlecolor={"text-[#6FCBAC]"}
                        title={"CHIT CHAT"}
                        icon={"./link.png"}
                        link={"https://www.behance.net/gallery/167602021/Project-CHIT-CHAT"}
                        description={"Web application for chatting online."}
                        date={"September, 2021 - December, 2021"}
                        location={"| KMUTT"}
                        tagbgcolor={"bg-[#E8F6F1]"}
                        tagtextcolor={"text-[#6FCBAC]"} />

                    <Card2
                        image={"./delluna.png"}
                        titlecolor={"text-[#B897F3]"}
                        title={"Hotel Del Luna"}
                        icon={"./link.png"}
                        link={"https://www.behance.net/gallery/167602259/Project-Hotel-Del-Luna"}
                        description={"Web application for hotel management."}
                        date={"February, 2021 - June, 2021"}
                        location={"| KMUTT"}
                        tagbgcolor={"bg-[#F4EFFD]"}
                        tagtextcolor={"text-[#B897F3]"} />
                </article>
            </section>
        </>
    )
}

export default Projects
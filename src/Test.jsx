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

const Test = () => {

    return (
        <>
            <article className="flex mb-24 mt-5 md:mt-[200px] md:w-full justify-center pt-20" id="projects">
                <div className="circleposition w-[100px] h-[100px] bg-[#FF5B4F] 
                            rounded-[100%] absolute z-2 top-[100%] left-[50%] translate-x-[-150%] translate-y-[4200%]
                            blur-[80px]">
                </div>
                {/* <h1 className="bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] inline-block text-transparent bg-clip-text text-5xl font-bold drop-shadow">Projects</h1> */}
                <Title text={"Projects"} />
            </article>

            <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row p-3 md:p-0">
                <article className="flex flex-row flex-wrap justify-around gap-[20px]">
                    <Card
                        image={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
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



                    {/* {MockDataCard.map((MockDataCard) => (
                                <div className="card w-[500px] bg-base-100 shadow-xl mb-24">
                                    <figure><img src={MockDataCard.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex justify-between items-center">
                                            <h2 className={`card-title  ${MockDataCard.titlecolor} text-2xl font-semibold`}>
                                                {MockDataCard.title}
                                            </h2>
                                            <img className="w-[24px]" src={MockDataCard.icon} />
                                        </div>

                                        <p className="text-lg font-normal text-[#696464]">{MockDataCard.description}</p>
                                        <p className="text-lg font-normal text-[#696464]">{MockDataCard.date}</p>
                                        <p className="text-lg font-normal text-[#696464]">{MockDataCard.location}</p>


                                        <div className="card-actions justify-start"> */}

                    {/* <div class="flex bg-[#FEF9D9] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                                <img className="w-[24px] h-[24px]" src="./javaScript.png" />
                                                <p className="text-base font-normal text-[#FFDF00]">JavaScript</p>
                                            </div> */}
                    {/* <div class="flex bg-[#E7F9FE] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[20.83px]" src="./ReactJS.png" />
                                            <p className="text-base font-normal text-[#61DAFB]">ReactJS</p>
                                        </div>
                                        <div class="flex bg-[#DDF3F5] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[14.72px]" src="./TailwindCSS.png" />
                                            <p className="text-base font-normal text-[#1BB0BA]">TailwindCSS</p>
                                        </div>
                                        <div class="flex bg-[#E5F0E3] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[27.07px]" src="./NodeJS.png" />
                                            <p className="text-base font-normal text-[#539E43]">NodeJS</p>
                                        </div>
                                        <div class="flex bg-[#E2F0E1] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./MongoDB.png" />
                                            <p className="text-base font-normal text-[#50AA42]">MongoDB</p>
                                        </div> */}
                    {/* </div>
                                    </div>
                                </div>
                            ))} */}
                </article>
                {/* <article className="md:w-3/5">
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <figure><img src="./lineman.png" alt="LINE MAN" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-[#44D47F] text-2xl font-semibold">
                                            LINE MAN Coupon Book
                                        </h2>
                                        <img className="w-[24px]" src="./link.png" />
                                    </div>

                                    <p className="text-lg font-normal text-[#696464]">A feature ‘Coupon Book’ where users can simply find and use their coupons.</p>
                                    <p className="text-lg font-normal text-[#696464]">May, 2023</p>
                                    <p className="text-lg font-normal text-[#696464]">| LINE MAN</p>
                                    <div className="card-actions justify-start">
                                        <div class="flex bg-[#E3F9EC] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./figma.png" />
                                            <p className="text-base font-normal text-[#44D47F]">UX/UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article> */}
            </section>
            {/* <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                        <article className="md:w-3/5">
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <figure><img src="./mute-maid-service.png" alt="Mute Maid Service" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-[#8384F0] text-2xl font-semibold">
                                            Mute Maid Service
                                        </h2>
                                        <img className="w-[24px]" src="./link.png" />
                                    </div>

                                    <p className="text-lg font-normal text-[#696464]">A mobile application for maid service by housekeeper with hearing impaired.</p>
                                    <p className="text-lg font-normal text-[#696464]">August, 2022 - May, 2023</p>
                                    <p className="text-lg font-normal text-[#696464]">| KMUTT</p>
                                    <div className="card-actions justify-start">
                                        <div class="flex bg-[#EDEDFD] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./figma.png" />
                                            <p className="text-base font-normal text-[#8384F0]">UX/UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="md:w-3/5">
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <figure><img src="./cfood.png" alt="CFood" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-[#64BF4D] text-2xl font-semibold">
                                            CFood
                                        </h2>
                                        <img className="w-[24px]" src="./link.png" />
                                    </div>

                                    <p className="text-lg font-normal text-[#696464]">Design an application for healthy food lovers.</p>
                                    <p className="text-lg font-normal text-[#696464]">March, 2022 - May, 2022</p>
                                    <p className="text-lg font-normal text-[#696464]">| KMUTT</p>
                                    <div className="card-actions justify-start">
                                        <div class="flex bg-[#E6F4E3] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./figma.png" />
                                            <p className="text-base font-normal text-[#64BF4D]">UX/UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="md:mx-24 md:mt-24 md:mb-24 flex flex-col md:flex-row">
                        <article className="md:w-3/5">
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <figure><img src="./chitchat.png" alt="CHIT CHAT" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-[#6FCBAC] text-2xl font-semibold">
                                            CHIT CHAT
                                        </h2>
                                        <img className="w-[24px]" src="./link.png" />
                                    </div>

                                    <p className="text-lg font-normal text-[#696464]">Web application for chatting online.</p>
                                    <p className="text-lg font-normal text-[#696464]">September, 2021 - December, 2021</p>
                                    <p className="text-lg font-normal text-[#696464]">| KMUTT</p>
                                    <div className="card-actions justify-start">
                                        <div class="flex bg-[#E8F6F1] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./figma.png" />
                                            <p className="text-base font-normal text-[#6FCBAC]">UX/UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="md:w-3/5">
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <figure><img src="./delluna.png" alt="Hotel Del Luna" /></figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-[#B897F3] text-2xl font-semibold">
                                            Hotel Del Luna
                                        </h2>
                                        <img className="w-[24px]" src="./link.png" />
                                    </div>

                                    <p className="text-lg font-normal text-[#696464]">Web application for hotel management.</p>
                                    <p className="text-lg font-normal text-[#696464]">February, 2021 - June, 2021</p>
                                    <p className="text-lg font-normal text-[#696464]">| KMUTT</p>
                                    <div className="card-actions justify-start">
                                        <div class="flex bg-[#F4EFFD] rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center">
                                            <img className="w-[24px] h-[24px]" src="./figma.png" />
                                            <p className="text-base font-normal text-[#B897F3]">UX/UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section> */}
        </>
    )
}

export default Test
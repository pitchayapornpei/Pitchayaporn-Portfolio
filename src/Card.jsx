import Tag from "./Tag";

const Card = ({ image, titlecolor, title, icon, icon2, description, date, location }) => {

    return (
        <>
            <div className="card w-[500px] bg-base-100 shadow-xl mb-24">
                <figure><img src={`${image}`} alt="LINE MAN" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className={`card-title ${titlecolor} text-2xl font-semibold`}>
                            {title}
                        </h2>
                        <div className="flex gap-2">
                            <a href="https://github.com/Marakarn/Corgi-Milkshake-Final-Project.git" target="_blank" ><img className="w-[24px]" src={`${icon}`} /> </a>
                            <a href="https://www.google.com/" target="_blank" ><img className="w-[24px]" src={`${icon2}`} /> </a>
                        </div>
                    </div>

                    <p className="text-lg font-normal text-[#696464]">{description}</p>
                    <p className="text-lg font-normal text-[#696464]">{date}</p>
                    <p className="text-lg font-normal text-[#696464]">{location}</p>
                    <div className="card-actions justify-start">
                        <Tag bgcolor={"bg-[#EBF1DD]"} textcolor={"text-[#8BCA00]"} text={"UX/UI Design"} icon={"./figma.png"} width={"w-[24px]"} height={"h-[24px]"} />
                        <Tag bgcolor={"bg-[#FEF9D9]"} textcolor={"text-[#FFDF00]"} text={"JavaScript"} icon={"./javaScript.png"} width={"w-[24px]"} height={"h-[24px]"} />
                        <Tag bgcolor={"bg-[#E7F9FE]"} textcolor={"text-[#61DAFB]"} text={"ReactJS"} icon={"./ReactJS.png"} width={"w-[24px]"} height={"h-[20.83px]"} />
                        <Tag bgcolor={"bg-[#DDF3F5]"} textcolor={"text-[#1BB0BA]"} text={"TailwindCSS"} icon={"./TailwindCSS.png"} width={"w-[24px]"} height={"h-[14.72px]"} />
                        <Tag bgcolor={"bg-[#E5F0E3]"} textcolor={"text-[#539E43]"} text={"NodeJS"} icon={"./NodeJS.png"} width={"w-[24px]"} height={"h-[27.07px]"} />
                        <Tag bgcolor={"bg-[#E2F0E1]"} textcolor={"text-[#50AA42]"} text={"MongoDB"} icon={"./MongoDB.png"} width={"w-[24px]"} height={"h-[24px]"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

import Tag from "./Tag";

const Card2 = ({ image, titlecolor, title, link, icon, description, date, location, tagbgcolor, tagtextcolor }) => {

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
                            <a href={`${link}`} target="_blank">
                                <img className="w-[24px]" src={`${icon}`} /> </a>

                        </div>
                    </div>

                    <p className="text-lg font-normal text-[#696464]">{description}</p>
                    <p className="text-lg font-normal text-[#696464]">{date}</p>
                    <p className="text-lg font-normal text-[#696464]">{location}</p>
                    <div className="card-actions justify-start">
                        <Tag bgcolor={`${tagbgcolor}`} textcolor={`${tagtextcolor}`} text={"UX/UI Design"} icon={"./figma.png"} width={"w-[24px]"} height={"h-[24px]"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2

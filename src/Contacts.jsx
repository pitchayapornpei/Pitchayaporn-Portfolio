const Contacts = ({ icon, text, width, height, link }) => {

    return (
        <>
            <a href={`${link}`} target="_blank">
                <button className="btn bg-gradient-to-r from-[#FC8178] via-[#FA9E97] to-[#F8C7C3] text-base font-medium text-[#FFFFFF] rounded-full hover:border-[#FC8178] hover:border-4 ">
                    <img className={`${width} ${height}`} src={`${icon}`} />
                    <p className="hidden md:block">{text}</p>
                </button>
            </a>
        </>
    )
}

export default Contacts

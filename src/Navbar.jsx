const Navbar = () => {

    return (
        <>
            <nav className="p-[50px] hidden md:block font-poppins">
                <div className="flex justify-between items-center">
                    <h1 className="pl-[130px] text-2xl md:text-2xl font-semibold text-[#000000]">Pitchayaporn H.</h1>
                    <ul className="flex justify-end pr-[130px] gap-6 text-lg text-[#000000]">
                        <li><a className="hover:font-semibold transition-all" href="#aboutme">About me</a></li>
                        <li><a className="hover:font-semibold transition-all" href="#experiences">Experiences</a></li>
                        <li><a className="hover:font-semibold transition-all" href="#projects">Projects</a></li>
                        <li><a className="hover:font-semibold transition-all" href="#contacts">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
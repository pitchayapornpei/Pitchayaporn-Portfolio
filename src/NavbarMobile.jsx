const NavbarMobile = () => {

    return (
        <>
            <nav className="p-[16px] font-poppins md:hidden block">
                <div className="flex justify-between items-center">
                    <h1 className="text-start text-[16px] md:text-2xl font-semibold text-[#000000]">Pitchayaporn H.</h1>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <div className="flex justify-start">
                            <div className="relative">
                                <ul tabIndex={0} className="absolute right-[0px] flex justify-start menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href="#aboutme">About me</a></li>
                                    <li><a href="#experiences">Experiences</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contacts">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarMobile
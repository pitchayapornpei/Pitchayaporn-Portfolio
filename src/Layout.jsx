import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
// import Footer from "./Footer"
const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <NavbarMobile />
            <div className="container mx-auto font-poppins">
                {children}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
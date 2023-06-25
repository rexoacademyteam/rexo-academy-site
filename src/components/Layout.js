import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <div className="bg-gray-100 h-screen">
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}
 
export default Layout;
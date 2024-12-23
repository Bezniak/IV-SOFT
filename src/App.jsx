import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Websites from "./components/WebSites/Websites.jsx";
import Careers from "./components/Careers/Careers.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Price from "./components/Price/Price.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.SITES,
                    element: <Websites/>
                },
                {
                    path: ROUTES.CAREERS,
                    element: <Careers/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <AboutUs/>
                },
                {
                    path: ROUTES.PORTFOLIO,
                    element: <Portfolio/>
                },
                {
                    path: ROUTES.FAQ,
                    element: <Faq/>
                },
                {
                    path: ROUTES.PRIVACY_POLICY,
                    element: <PrivacyPolicy/>
                },
                {
                    path: ROUTES.PRICES,
                    element: <Price/>
                },
                {
                    path: ROUTES.CONTACTS,
                    element: <Contacts/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
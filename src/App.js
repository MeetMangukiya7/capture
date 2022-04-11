import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import ContactUs from "./pages/ContactUs";

import Nav from "./components/Nav";
import GlobalStyle from "./utils/GlobalStyle";

export default function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />

            <Nav />

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>

                    <Route path="/work" exact>
                        <OurWork />
                    </Route>

                    <Route path="/work/:id" exact>
                        <MovieDetail />
                    </Route>

                    <Route path="/contact" exact>
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

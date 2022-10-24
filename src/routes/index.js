import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../views/Home";
import FourOFour from "../views/404";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function RoutesCollection() {
    return(
      <Router>
        <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Home />}/>
          
        <Route path="*" element={<FourOFour />}/>

        <Route path="/pokemon/:id" element={<PokeDetail />}/>

        </Routes>
      </Router>
    );
}
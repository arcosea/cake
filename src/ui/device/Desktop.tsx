import { Routes, Route } from "react-router-dom";
import Navbar from "../../NavBar";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import { Sprints } from "../../pages/Sprints";


export function Desktop(){
    return (
        <>
        <Navbar />
        <div className="App">
        <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/sprints" element={<Sprints />} />
            

        </Routes>
        </div>
        </>
    )
}
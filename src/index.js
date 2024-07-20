import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Core/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "./Core/pages/Job Vacancy/Job";
import Masterprogram from "./Core/pages/Master Program/Masterprogram";
import Hostel from "./Core/pages/Hostel/Hostel";
import Certification from "./Core/pages/Certification/Certification";
import Courses from "./Core/pages/Courses/Courses";
import Online from "./Core/pages/Online Courses/Onlinecourses";
import Contact from "./Core/pages/Contact us/Contact";



function Routeroutlet(){


  return <div>
    
    <BrowserRouter>
    <Routes>
    <Route index element={<Header />} />
    <Route path="home" element={<Header/>}/>
    <Route path="certification" element={<Certification />} />
    <Route path="job" element={<Job />} />
    <Route path="course" element={<Courses/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="online" element={<Online/>}/>
    <Route path="hostel" element={<Hostel />} />
    <Route path="master" element={<Masterprogram />} />

    </Routes>
    </BrowserRouter>

  </div>
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routeroutlet/>
  </React.StrictMode>
);

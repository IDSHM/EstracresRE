//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route, Routes } from "react-router-dom";

import Home from "./pages/home"; 
import About from "./pages/about";
import Contact from "./pages/contact";
import Pagent from "./pages/p_agent";
import Plist from "./pages/p_list";

import Login from "./login";
import Register from "./register";


import Userhome from "./userpages/userhome";
import Userabout from "./userpages/userabout";
import Usercontact from "./userpages/usercontact";
import Userpagent from "./userpages/userp_agent";
import Userplist from "./userpages/userp_list";
import AppointmentPage from "./userpages/appointmentPage";



import Agenthome from "./agentpages/agenthome";
import Agentabout from "./agentpages/agentabout";
import Agentcontact from "./agentpages/agentcontact";
import Agentpagent from "./agentpages/agentp_agent";
import Agentplist from "./agentpages/agentp_list";
import Checkappoint from "./agentpages/checkappoint";



// import Userlist from "./userpages/singlerealestate/userlist";



function App() {
return (
<>

<BrowserRouter>
<Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/p_agent" element={ <Pagent/>}/>
    <Route path="/p_list" element={<Plist/>}/>



    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

{/* USER PANEL */}

    <Route path="/userhome" element={<Userhome/>}/>
    <Route path="/userabout" element={<Userabout/>}/>
    <Route path="/usercontact" element={<Usercontact/>}/>
    <Route path="/userp_agent" element={<Userpagent/>}/>
    <Route path="/userp_list" element={<Userplist/>}/>
    <Route path="/getAppointment" element={<AppointmentPage/>}/>


{/* AGENT PANEL */}

    <Route path="/agenthome" element={<Agenthome/>}/>
    <Route path="/agentabout" element={<Agentabout/>}/>
    <Route path="/agentcontact" element={<Agentcontact/>}/>
    <Route path="/agentp_agent" element={<Agentpagent/>}/>
    <Route path="/agentp_list" element={<Agentplist/>}/>
    <Route path="/check" element={<Checkappoint/>}/>


    {/* <Route path="/userlist" element={<Userlist/>}/> */}

</Routes>
</BrowserRouter>



{/* <Login/> */}
{/* <Register/> */}
{/* <Home/> */}
{/* <About/> */}
{/* <Contact/> */}
{/* <Plist/> */}
{/* <Pagent/> */}

</>
);
}

export default App;

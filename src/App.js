import "./index.css";
import "./App.css";
import Employees from "./components/Employees";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Dashbord from "./components/Dashbord"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictionary from "./components/Dictionary";
import Definitions from "./components/Definitions";
import Registration from "./components/Registration";
import Province from "./components/Province";
//import Employee from './components/Employee'
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      <Main>
      <Routes>
            <Route path="/" element={<Dashbord/>}></Route>
            <Route path="/employees" element={<Employees/>}></Route>
            <Route path="/Dictionary" element={<Dictionary/>}></Route>
            <Route path="/Registration" element={<Registration/>}></Route>
            <Route path="/Difinitions/:searchTerm" element={<Definitions/>}></Route>
            <Route path="/Province/" element={<Province/>}></Route>
      </Routes>
      </Main>
      </BrowserRouter>
    </div>
    // <Employee/>
  );
// import './index.css';
// import './App.css';
// import Employees from './components/Employees'

// function App(){
//       return(
//            <Employees></Employees>
           
//       )
 }

export default App;

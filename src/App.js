import Nav from "./component/Nav";
// import Navnew from "./component/Newnav";
import { useState } from "react";
import Ttaxt from "./component/Ttaxt";
import Alert from "./component/Alert";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 
const[mode,setdarkmode]=useState("dark")

const togglemode=()=>{
  if (mode === "light") {
    setdarkmode("dark")
    document.body.style.backgroundColor="grey"
    showtext(" hiiii ","success")
    document.title=('home- darkmode')

  } else {
    setdarkmode("light")
    document.body.style.backgroundColor="white"
    showtext(" hiiii3 ","success")
    document.title=('home- lightmode')

  }
}

const [alert,setalert]=useState(null)


const showtext=(message,type)=>{

     setalert({
msg:message,
type:type,
     })
     setTimeout(() => {
      showtext(null)
     }, 1520);
}

 return (
<>
<Nav title="hii this "mode={mode}  togglemode={togglemode}about="dn"/>
<Ttaxt hading='hii iam comung'   mode={mode} />
<Alert alert={alert}/>
{/* <Nav /> */}
{/* <Router>
<Routes>
        <Route exact path="/about" element={<Navnew/>}/>
        <Route path="/" element={<Ttaxt hading='hii iam comung'   mode={mode} />}/>
        <Route path="/alert" element={<Alert alert={alert}/>}/> 
        <Route path="/nav" element={<Nav title="hii this "mode={mode}  togglemode={togglemode}about="dn"/>}/>
{/* <Newnav/> */}
{/* </Routes> */}
{/* // </Router> */} 

</>
  );
}

export default App;

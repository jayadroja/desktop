import React,{useState} from 'react'

export default function Ttaxt(Props) {
    //   setstate('hii taxt');
    
    const handklechange=(event)=>{
        setstate(event.target.value)
    }
const handleclick=()=>{
    const is= text.toUpperCase()
    setstate(is)
    Props.showtext(" hiiii3 ","success")

}
const handleclicka=()=>{
    const isx= text.toLowerCase()
    setstate(isx)
    Props.showtext(" hiiii3 ","success")

}
const handleclear=()=>{
    setstate(" ")
    Props.showtext(" hiiii3 ","success")

}
const handlecopy=()=>{
    let text=document.getElementById('myBox')
    text.select()
    text.setSelectionRange(0,999999)
    navigator.clipboard.writeText(text.value)
    Props.showtext(" copy ","success")

}
const handleExtraSpaces = ()=> {
  let newText = text.split(/[ ]+/)
  setstate(newText.join(" "))
}
const [text, setstate] = useState("hiii text");
    return (
    <>
    <div className='container' style={{color:Props.mode === "dark"? "white":"black"}}>
        <h2>{Props.hading}</h2>
        <div className='container mt-5' style={{backgroundColor:Props.mode === "dark"? "gray":"white",color:Props.mode === "dark"? "white":"black"}}>
<div className="mb-3">
  <textarea className="form-control" id="myBox"  value={text} onChange={handklechange} rows="5" style={{backgroundColor:Props.mode === "dark"? "gray":"white",color:Props.mode === "dark"? "white":"black"}}/>
</div>
<button className='btn btn-primary  mx-2 ' onClick={handleclick} >convert uppercase</button>
<button className='btn btn-primary  mx-2' onClick={handleclicka} >convert lowerpercase</button>
<button className='btn btn-primary  mx-2' onClick={handleclear} >convert lowerpercase</button>
<button className='btn btn-primary  mx-2' onClick={handleExtraSpaces} >convert ldsssssssssssowerpercase</button>
    </div>
    <div className="mb-3">
<h2>{text}</h2>
<p>word is {text.split(" ").length}now is{text.length}</p>
    </div>
    <div className="mb-3">
    <button className='btn btn-primary  mx-2' onClick={handlecopy} >copy</button>
        </div>
    </div>
    </>
  )
}

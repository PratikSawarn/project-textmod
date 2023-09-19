import React,{useState} from 'react'


export default function TextForm(props) {

    const handleonchange = (event) =>{
        setMsg(event.target.value);
    }

    const handleupClick = () =>{
        let newText = msg.toUpperCase();
        setupTxt(newText);
    }
    const handleloClick = () =>{
        let newText = msg.toLowerCase();
        setupTxt(newText);
    }
    const clear = () =>{
        let newText = ('');
        setMsg(newText);
        setupTxt(newText);
    }
    const extraSpaces=()=>{
        let text=msg.trim().split(/ +/).join(' ');
        setMsg(text);
    }

    const [msg,setMsg] = useState('');
    const [upTxt,setupTxt] = useState('');
    
    return (
        <>
            <div className="mb-3 my-5" style={{color:props.mode==='dark'?'white':'black'}}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.text}</label>
                <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="6" value={msg}></textarea>
                <button className="btn btn-primary my-2 mx-2" onClick={handleupClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleloClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={extraSpaces}>Remove extra spaces</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clear}>Clear</button>
                
            </div>
            <div className="container">
                <h2>Your text Summary</h2>
                <p>Total Words : {msg.trim().split(/\S+/).length-1} AND Total letters : {msg.length}</p>
                <h2>Preview</h2>
                <p>{upTxt}</p>
            </div>
        </>
    )
}

// 

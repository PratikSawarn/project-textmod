import React,{useState} from 'react'

export default function About() {
    
    const [mystyle, setmystyle] = useState({
        backgroundColor:'black',
        color:'white',    
    })
    const [btnText,setbtnText]=useState('Dark mode')

    const toggleStyle=()=>{
        if(mystyle.color==='black'){
            setmystyle(
                {
                    backgroundColor:'black',
                    color:'white', 
                }
            )
            setbtnText('light Mode')
        }
        else{
            setmystyle(
                {
                    color:'black',
                    backgroundColor:'white'
                }
            )
            setbtnText('dark Mode')
        }
    }

    return (
            <div className="container my-3" style={mystyle}>
                <h1>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed " style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                about #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">This is totally used for utilize your text accouding to you . <code>.text editor</code> class. </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                features
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">You can use thi app to make your sentence error free,remove extra spaces ,<code>count words/letters.</code> class. </div>
                        </div>
                    </div>
                    
                </div>
                <div><button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button></div>
                
            </div>
        
    )
}

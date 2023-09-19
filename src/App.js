import {useState } from 'react';
import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import About from './components/About';



function App() {
  const [alert,setAlert]=useState(null)
  const [mode,setmode]=useState('light')
  const [color,setcolor]=useState(mode);

  // dark mode code--------
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled..","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled..","success")
    }
  }

  // color picker code------
  const colorSelecter=(event)=>{
    let colorCode=(event.target.value);
    setcolor(colorCode);
    document.body.style.backgroundColor=color;
  }

  // this is for alert raise
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
        },1500
      )
  };

  

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root title="TextUtils" mode={mode} toggleMode={toggleMode} customMode={colorSelecter} color={color}/>,
      children: [
        {
          path: "/",
          element: <TextForm text="TextMods" mode={mode}/>,
        },
        {
          path: "About",
          element: <About/>,
        },
        {
          path: "TextForm",
          element: <TextForm text="TextMods" mode={mode}/>,
        },
        {
          path: "Alert",
          element: <Alert alert={alert}/>,
        },
      ]
    },
    
  ]);


  return (
    <>

      <RouterProvider router={router}/>
    </> 
  );
}

export default App;

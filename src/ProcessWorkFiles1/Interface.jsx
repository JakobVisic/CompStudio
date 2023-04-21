// import { useKeyboardControls } from '@react-three/drei'
// import useGame from './stores/useGame.jsx'
import { useEffect, useRef, useState, useContext  } from 'react'
import { addEffect } from '@react-three/fiber'
import MyContext from '../MyContext'
import { NewSetup2Model } from '../New-Setup2';

export default function Interface()
{
    
   const myContext = useContext(MyContext);
//    const bookModeOn = useContext(MyContext);

   let string = ""
   if(myContext.deskModeOn == true) 
   {
    //    string = "Click an Object to interacti with it"
       console.log("is on " + myContext.deskModeOn);
   }
   else 
   {
        string = ""
   }
  
   console.log("is on " + myContext.deskModeOn);

    return  <div className="interface">
       

        
            {/* <div className="infoText"> { myContext.deskModeOn ? "on" : "off"  }  </div> */}

   
        </div>

    
}
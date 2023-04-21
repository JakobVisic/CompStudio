import { useState, React, useContext } from "react";
import  MyContext  from "../MyContext.jsx";
import Interface from "./Interface.jsx";


function App() {
    // const [bookModeOn, setBookModeOn] = useState(false);
    // const [paperModeOn, setPaperModeOn] = useState(false);
    // const [deskModeOn, setDeskModeOn] = useState();
    // const [mugModeOn, setMugModeOn] = useState(false);
    // const [phoneModeOn, setPhoneModeOn] = useState(false);
    // const [monitorModeOn, setMonitorModeOn] = useState(false);

    // const MyContext = useContext(MyContext)

    // const deskModeOn = MyContext.deskModeOn

    const deskModeOn = true;

  return (
    <div>
        <MyContext.Provider
            value={{
                // bookModeOn,
                // paperModeOn,
                deskModeOn,
                // mugModeOn,
                // phoneModeOn,
                // monitorModeOn,
                // setBookModeOn,
                // setPaperModeOn,
                // setDeskModeOn,
                // setMugModeOn,
                // setPhoneModeOn,
                // setMonitorModeOn
             }}
        >
            <Interface/>
        </MyContext.Provider>
    </div>
  );
}

export default App;
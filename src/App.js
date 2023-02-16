import axios from "axios";
import {useEffect} from "react";

function App() {
  const sendReq = async() => {
    const res = await axios.get('http://localhost:3001');
    console.log(res.data);
  };

  useEffect(()=>{
    sendReq();    
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
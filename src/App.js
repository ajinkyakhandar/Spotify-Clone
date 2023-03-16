import Login from "./Login";
import { useEffect, useState } from "react";
import Home from "./spotifyHome/Home";
import { useDispatch } from "react-redux";
import { userToken } from "./slicers/userDataSlice";
import {getAuthToken} from "./services/UserData"

function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState("")

  useEffect(() => {
    // Get authtoken from spotify and store in redux 
   let token = getAuthToken();
   setToken(token)
   dispatch(userToken(token))
  }, []);

  return <div>{token ? <Home/> : <Login />}</div>;
}

export default App;

import { useState } from "react";
import SpotifyLogo from "./images/spotify-logo-black.png";
import { accessUrl } from "./spotify";

const Login = () => {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const login = () => (window.location.href = accessUrl);

  return (
    <>
      {/* login header */}

      <div className="border-b-[1px] p-4 flex justify-center">
        <img className="h-12" src={SpotifyLogo} alt="spotify-logo" />
      </div>

      {/* login */}

      <div className="flex justify-center mt-24">
        <button
          className="bg-green-400 pr-10 pl-10 pt-3 pb-3 w-3/12 rounded-full"
          onClick={() => login()}
        >
          LOG IN
        </button>
      </div>
    </>
  );
};

export default Login;

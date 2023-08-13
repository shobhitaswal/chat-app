import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie/cjs/Cookies";
import { useRef, useState } from "react";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="App">
        <h1>
          <Auth setIsAuth={setIsAuth} />
        </h1>
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  );
}

export default App;

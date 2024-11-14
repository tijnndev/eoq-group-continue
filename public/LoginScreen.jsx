import { useEffect, useState } from "react";

function LoginScreen({ setLoggedIn }) {
  const handleLogin = () => {
    const sound = new Audio("start_sound.mp3")
    sound.play()
    setLoggedIn(true);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="login-screen">
      <div className="window">
        <div className="logo">
          <p className="top">Microsoft</p>
          <p className="mid">
            Windows<span>XP</span>
          </p>
          <p className="bottom">Professional</p>
        </div>
        {loading ? (
          <div className="container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        ) : (
          <button className="old-btn" onClick={handleLogin}>Start game</button>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

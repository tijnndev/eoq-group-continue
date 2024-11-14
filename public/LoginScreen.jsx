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
      <div class="window">
        <div class="logo">
          <p class="top">Microsoft</p>
          <p class="mid">
            Windows<span>XP</span>
          </p>
          <p class="bottom">Professional</p>
        </div>
        {loading ? (
          <div class="container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        ) : (
          <button className="old-btn" onClick={handleLogin}>Start game</button>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

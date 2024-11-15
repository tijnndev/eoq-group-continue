import React, { useEffect, useRef } from "react";

const ContextMenu = ({ setShowUpdateScreen, setIsMalwareRemoved, setShowingContextMenu }) => {
  const contextMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setShowingContextMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowingContextMenu]);

  function UpdateScreen() {
    setShowingContextMenu(false);
    setShowUpdateScreen(true);
    setTimeout(() => {
      setShowUpdateScreen(false);
      setIsMalwareRemoved(true);
    }, 15000);
  }

  return (
    <div
      ref={contextMenuRef}
      style={{
        width: "300px",
        backgroundColor: "#f0f0f0",
        border: "2px solid #b6b6b6",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        borderRadius: "2px",
        fontFamily: "'Tahoma', sans-serif",
        fontSize: "14px",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: 0, 
        bottom: "50px",
        zIndex: 9999999999999999,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#0a53a2",
          color: "#fff",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Windows_XP_logo.svg/64px-Windows_XP_logo.svg.png"
          alt="Windows XP Logo"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        <span style={{ fontWeight: "bold" }}>Windows XP</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div
          style={{
            width: "100px",
            backgroundColor: "#c8d8e8",
            borderRight: "1px solid #b6b6b6",
            padding: "10px 5px",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Programs Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Programs</span>
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Documents Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Documents</span>
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Settings Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Settings</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Help Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Help</span>
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Search Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Search</span>
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Run Icon"
              style={{ marginRight: "8px" }}
            />
            <span>Run</span>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderTop: "1px solid #b6b6b6",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <span>
            <button
              style={{
                display: "flex",
                textAlign: "center",
                backgroundColor: "transparent",
                color: "#000",
                border: "1px solid #000",
                padding: "5px",
              }}
              onClick={UpdateScreen}
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Shutdown Icon"
                style={{ marginRight: "8px" }}
              />
              Update (to remove malware)
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;

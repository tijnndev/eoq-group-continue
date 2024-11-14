import React, { useState } from 'react';

function CommandLine({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return; // Avoid sending empty input

    // Add the user's message to the messages array
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      // Assuming the response contains the response string
      if (data.response) {
        const assistantMessage = {
          role: 'assistant', // Mark the message as coming from the assistant
          content: data.response,
        };
        setMessages([...newMessages, assistantMessage]);
      }
    } catch (error) {
      console.error('Error fetching from API:', error);
    } finally {
      setLoading(false);
      setInput(''); // Clear the input after submission
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="command-line-window">
      <div className="command-line-header">
        <span>Command Line</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="command-line-content" id="cmdOutput">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === 'user' ? 'user-message' : 'assistant-message'}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div className="loading">Loading...</div>}
      </div>  
      <form className="command-line-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter command..."
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default CommandLine;

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend is Running</h1>
      <p>Message from backend:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;

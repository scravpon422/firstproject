import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [message, setMessage] = React.useState("Loading...")

  React.useEffect(() => {
    fetch("https://firstproject-6m2d.onrender.com/api/data")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend connection failed"))
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Frontend Running</h1>
      <p>{message}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

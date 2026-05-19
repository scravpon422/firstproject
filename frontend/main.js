
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [message, setMessage] = React.useState("Loading...")

  React.useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div style={{padding:'40px',fontFamily:'Arial'}}>
      <h1>Frontend Running</h1>
      <p>{message}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

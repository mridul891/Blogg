import './App.css'
import authService from './appwrite/auth'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1>A blog With Appwrite </h1>
    </>
  )
}

export default App

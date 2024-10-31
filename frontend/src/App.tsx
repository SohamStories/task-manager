import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Task } from './pages/Task'
import { Tasks } from './pages/Tasks'
import { Addtask } from './pages/Addtask'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/addtask" element={<Addtask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
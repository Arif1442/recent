import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css";
import AdminRegistrationForm from './pages/AdminRegistrationForm/AdminRegistrationForm'
import TrainerRegistrationForm from './pages/Trainer/TrainerRegistrationForm'
import TraineeRegistrationForm from './pages/Trainee/TraineeRegistrationForm'
import LoginForm from './pages/Login/LoginForm'
import { Route, Routes } from 'react-router-dom'
import Header from './compoments/Header'
import CreateBatch from './pages/Batch/CreateBatch'
import CreateTask from './pages/Task/CreateTask'
import FinalMarks from './pages/FinalMark/FinalMarks'
// import FinalTask from "./pages/FinalMark/FinalMarks"
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/admin' element={<AdminRegistrationForm />}></Route>
        <Route path='/trainer' element={<TrainerRegistrationForm />}></Route>
        <Route path='/trainee' element={<TraineeRegistrationForm />}></Route>
        <Route path='/createbatch' element={<CreateBatch />}></Route>
        <Route path='/createtask' element={<CreateTask />} />
        <Route path='/finalmark' element={<FinalMarks />} />
      </Routes>
    </>
  )
}

export default App

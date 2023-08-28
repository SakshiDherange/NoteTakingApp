
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';



function App() {
  return (
  
   <div className="App">
     {/* <NotesForm/>
     <AllNotes/> */}

     
     <Routes>
      <Route path = '/' element={<NotesForm/>}/>
      <Route path = '/allNotes' element={<AllNotes/>}/>
     </Routes>
    </div>
  
   
  );
}

export default App;

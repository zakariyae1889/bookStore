import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Create from './pages/book/Create.jsx'
import Details from './pages/book/Details.jsx';
import Edit from './pages/book/Edit.jsx';
import Delete from './pages/book/Delete.jsx'
import  { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/details/:slug' element={<Details/>}/>
      <Route path='update/:slug' element={<Edit/>}/>
      <Route path='delete/:slug' element={<Delete/>}/>
    
    </Routes>
    <Toaster />
    </>
     
  )
}

export default App

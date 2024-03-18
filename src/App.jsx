import Rotas from "./Rotas/Rotas"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer 
        autoClose={2000}/>
      <Rotas/>

    </>
  )
}

export default App

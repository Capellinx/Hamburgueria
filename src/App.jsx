import { HomePage } from "./pages/HomePage"
import { ToastContainer, toast } from 'react-toastify';

import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition:Bounce />
      <HomePage toast={toast} />
    </>
  )
}

export default App

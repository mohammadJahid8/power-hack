import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import BillTable from './Layout/BillTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Layout/Register';

function App() {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Header />
      <BillTable />

      <Register />
      <ToastContainer />
    </div>
  );
}

export default App;

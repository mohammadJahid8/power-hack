import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import BillTable from './Layout/BillTable';

function App() {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Header />
      <BillTable />
    </div>
  );
}

export default App;

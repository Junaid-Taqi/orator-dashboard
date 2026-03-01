import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container-fluid mt-4 flex-grow-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;

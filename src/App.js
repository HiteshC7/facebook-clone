import './App.css';
import Header from './header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useStateValue } from './Stateprovider';
function App() {
  const [{user},dispatch]=useStateValue()
  return (

    <div className="app">
      {!user ? (
        <h1><Login /></h1>) : (
        <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}

    </div>
  );
}

export default App;

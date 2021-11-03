import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import routes from './routes';


function App() {
  const routing = useRoutes(routes);
  return (
    <div>
      {routing}
    </div>
    
  );
}

export default App;

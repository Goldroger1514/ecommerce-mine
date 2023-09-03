import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Authentication from './routes/Authentication/authentication.component';
import Home from './routes/Home/home.component';
function App() {
  return (
    <Routes  >
      <Route path='/' element={<Authentication />} />
    </Routes>
  );
}
export default App;

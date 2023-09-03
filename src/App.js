import logo from './logo.svg';
import Test from './routes/test-component/test.component';
import Navigation from './components/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom'
im
function App() {
  return (
    <Routes  >
      <Route path='/' element={<Navigation />}>
      </Route>
    </Routes>
  );
}
export default App;

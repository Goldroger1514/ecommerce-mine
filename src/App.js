import logo from './logo.svg';
import Test from './components/test-component/test-component';
import Home from './routes/home/home-component'
import Navigation from './routes/navigation/navigation-component';
import Authentication from './routes/authentication/authentication.component'
import { Fragment, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Routes>
        {/**
         * <Routes> is a container component that is used to define the routing configuration for your application.
         * You cannot use <Route> without nesting it inside of <Routes> because
         * <Routes> is the container for all of the routes in your application. If you try to use <Route> without nesting it,
         * React Router will not know how to render it.
         */}
        {/* <Route path='/Test' element={<Test />} /> */}
        {
          /**
           * Route:
           * The Route component is used to define mappings between URL paths and the components that should be rendered when those paths match.
           *  Each Route component has two key props: path and component.
           * The path prop specifies the URL pattern to match, and the component prop specifies the React component to render when
           *  the URL matches the pattern.
           */
        }
        <Route path='/' element={<Authentication />} />
        <Route path='/Home' element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path='/Home/Test' element={<Test />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
export default App;

import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
//components
import Login from './components/login';
import FormCreateUser from './components/FormCreateUser';
import HomeUser from '../HomeUser/HomeUser';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/create',
    element: <FormCreateUser/>
  },{
    path: '/home',
    element: <HomeUser/>
  }
]);


function App() {
  return (<>
    <div id='navBar'></div>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

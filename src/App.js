
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './component/Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    
    <div className='max-w-screen-xl mx-auto'>
      <Toaster/>
    <RouterProvider router={router}></RouterProvider>
    
  </div>
  );
}

export default App;

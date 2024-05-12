import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
import Mainlayout from './components/Mainlayout';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import Edit, {postLoader}from './pages/Edit';
import AddPost from './pages/AddPost';
import NotExist from './pages/NotExist';
import Post from './pages/Post';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/posts" element={<Posts/>}/>
        
        <Route path="/addPost" element={<AddPost/>}/>
        <Route path="/editPage/:id" element={<Edit/>} loader={postLoader}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="/404" element={<NotExist/>}/>
      </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App

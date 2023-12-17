import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import './App.css'
import MainLayout from "./layouts/MainLayout";
import NewPost, { newpostAction } from "./pages/NewPost";
import PostList, { postLoader } from "./pages/PostList";
import PostErrorPage from "./pages/PostErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/" element={<PostList />} loader={postLoader} errorElement={<div>Oops! Something bad happened</div>} > */}
        <Route path="/" element={<PostList />} loader={postLoader} errorElement={<PostErrorPage />} >
    <Route path="/create-post" element={<NewPost />} action={newpostAction} />
        </Route>
      </Route>
    )
  );

  // json-server --watch db.json --port 8000 running json server

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>This is the way</div>
  },
  {
    path:'/test',
    element: <div>Testing</div>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

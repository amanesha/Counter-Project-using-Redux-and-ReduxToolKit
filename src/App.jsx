import Counter from "./components/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />,errorElement:<Error/> },
    {
      path: "/redux",
      errorElement: <Error />,
      element: <Card />,
      children: [{ path: "/redux", element: <Counter /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

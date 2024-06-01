import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Error from "./components/error/Error.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                // loader: menuLoader,
                element: <Home />,
                errorElement: <Error />,
            },
        ],
    },
]);


function App() {
    return <RouterProvider router={router} />;
}

export default App;

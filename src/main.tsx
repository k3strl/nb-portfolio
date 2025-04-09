import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Home from "./pages/Home.tsx"
import ErrorPage from "./pages/ErrorPage.tsx";
import Projects from "./pages/Projects.tsx";
import Resume from "./pages/Resume.tsx";
// import Testimonials from "./pages/Testimonials.tsx";
// import Contact from "./pages/Contact.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      // {
      //   path: "/testimonials",
      //   element: <Testimonials />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
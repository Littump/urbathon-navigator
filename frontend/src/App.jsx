import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./UI/Layout";
import Home from "./pages/home";
import Error from "./UI/Error";
import Messages from "./pages/Messages";
import Responses from "./pages/Responses";
import ResponsesChat from "./pages/ResponsesChat";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Map from "./pages/MapPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Complain from "./pages/Complain";
import WritePost from "./pages/WritePost";
import MessagesOpened from "./pages/MessagesOpened";
import { getMeHook } from "./hooks/getMeHook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AddEvent from "./pages/addEvent";

const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/messages",
        element: <Messages />,
        errorElement: <Error />,
      },
      {
        path: "/messages/:chatId",
        element: <MessagesOpened />,
        errorElement: <Error />,
      },
      {
        path: "/responses",
        element: <Responses />,
        errorElement: <Error />,
      },
      {
        path: "/responses/:companyId",
        element: <ResponsesChat />,
        errorElement: <Error />,
      },
      {
        path: "/events",
        element: <Events />,
        errorElement: <Error />,
      },
      {
        path: "/events/:eventId",
        element: <Event />,
        errorElement: <Error />,
      },
      {
        path: "/map",
        element: <Map />,
        errorElement: <Error />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <Error />,
      },
      {
        path: "/complain",
        element: <Complain />,
        errorElement: <Error />,
      },
      {
        path: "/writePost",
        element: <WritePost />,
        errorElement: <Error />,
      },
      {
        path: "/addEvent",
        element: <AddEvent />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);

function App() {
  const { data } = getMeHook();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "profile/setProfile", profile: { ...data?.data } });
  }, [data]);
  return <RouterProvider router={router} />;
}

export default App;

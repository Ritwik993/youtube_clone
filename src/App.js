import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVideo from "./components/SearchedVideo";

const AppLayout = () => {
  return (
    <>
      <Head />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchedVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

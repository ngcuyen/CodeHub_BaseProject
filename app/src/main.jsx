// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { unstable_HistoryRouter as HistoryBrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import { createBrowserHistory } from 'history';
// import './index.css';
// import { persistor, store } from './redux/config.jsx';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const history = createBrowserHistory();

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<Provider store={store}>
// 		<PersistGate persistor={persistor} loading={null}>
// 			<HistoryBrowserRouter history={history}>
// 				<App />
// 				<ToastContainer />
// 			</HistoryBrowserRouter>
// 		</PersistGate>
// 	</Provider>,
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import Problem from "./components/Problem";
import "./index.css";
import ProblemsPage from "./container/Home/pages/MainHome/ProblemsPage";
import MainHome from "./container/Home/pages/MainHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProblemsPage />,
      },
      {
        path: "/records/edit/:id",
        element: <Record />,
      },
      {
        path: "/records/create",
        element: <Record />,
      },
      {
        path: "/problems",
        element: <ProblemsPage />,
      },
      {
        path: "/problems/edit/:id",
        element: <Problem />,
      },
      {
        path: "/problems/create",
        element: <Problem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


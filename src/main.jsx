import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Katalog } from './components/katalog/Katalog';
import { Product } from './components/Product/Product';
import { ErrorPage404 } from "./routes/ErrorPage404/ErrorPage404"
import { Provider } from 'react-redux';
import store from './app/store';
import { Bucket } from './components/Bucket/Bucket';
import { Root } from './routes/Root/Root';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: '/',
				element: <MainPage />,
				errorElement: <ErrorPage404 />
			},
			{
				path: "Katalog",
				element: <Katalog />,
				errorElement: <ErrorPage404 />
			},
			{
				path: "Katalog/:id",
				element: <Product />,

			},
			{
				path: "Bucket",
				element: <Bucket />
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
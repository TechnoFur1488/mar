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

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: "Katalog",
		element: <Katalog />
	},
	{
		path: "Katalog/:id",
		element: <Product />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
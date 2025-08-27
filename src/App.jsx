import './App.css';
import { Header } from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Account from './pages/Account.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
	const [products, setProducts] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	
	const getProducts = async () => {
		const response = await fetch('http://localhost:3500/products');
		const data = await response.json();
		
		setProducts(data);
	}
	
	const getCategories = async () => {
		const response = await fetch('http://localhost:3500/categories');
		const data = await response.json();
		
		setCategories(data);
	}

	React.useEffect(() => {
    	getProducts()
    	getCategories()
	}, []);
	
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products products={products} categories={categories}/>} />
					<Route path="/solutions" element={<Products products={products} categories={categories}/>} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

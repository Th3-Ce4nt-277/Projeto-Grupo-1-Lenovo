import './App.css';
import { Header } from './components/Header.jsx';
import NavMobile from './components/NavMobile.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductsFiltered from './pages/ProductsFiltered.jsx';
import Details from './pages/Details.jsx';
import Cart from './pages/Cart.jsx';
import Account from './pages/Account.jsx';
import User from './pages/User.jsx';
import Footer from './components/Footer.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
	const [products, setProducts] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const [userCart, setUserCart] = React.useState([]);
	const [loggedUser, setLoggedUser] = React.useState([]);
	
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
	const getUserCart = async () => {
		const response = await fetch('http://localhost:3500/carts');
		const data = await response.json();
		
		console.log('uploaded');
		
		setUserCart(data);
	}
	const getLoggedUser = async () => {
		const response = await fetch('http://localhost:3500/clientLogged');
		const data = await response.json();

		setLoggedUser(data);
	}

	React.useEffect(() => {
    	getProducts()
    	getCategories()
		getUserCart()
		getLoggedUser()
	}, []);

	const [navPos, setNavPos] = React.useState('-100vw')

	const openNavMobile = () => {
		setNavPos('0px')		
	}

	const closeNavMobile = () => {
		setNavPos('-100vw')		
	}
	

	return (
		<BrowserRouter>
			<div className='App'>
					<NavMobile pos={navPos} onCloseNav={closeNavMobile}/>
					<Header onOpenNav={openNavMobile}/>
					<Routes>
						<Route path="/" element={<Home categories={categories}/>} />
						<Route path="/products" element={<Products products={products} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={getUserCart}/>} />
						<Route path="/products/*" element={<ProductsFiltered categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={getUserCart}/>} />
						<Route path="/products/Details/*" element={<Details products={products} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={getUserCart}/>}  />
						<Route path="/solutions" element={<Products products={products} categories={categories}/>} />
						<Route path="/cart" element={<Cart products={products} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={getUserCart}/>} />
						<Route path="/user/login" element={<Account />} />
						<Route path="/user/profile" element={<User />} />
					</Routes>
					<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;

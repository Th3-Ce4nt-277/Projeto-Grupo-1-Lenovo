import './App.css';
import { Header } from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
	const [products, setProducts] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	
	const getProducts = async () => {
		const response = await fetch(`https://backend-toti.onrender.com/produtos`);
		const data = await response.json();
		
		setProducts(data);
	}
	
	const getCategories = async () => {
		const response = await fetch(`https://backend-toti.onrender.com/categorias`);
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
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

function App() {
	return (
		<>
			<Cart />
			<Header />;
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;


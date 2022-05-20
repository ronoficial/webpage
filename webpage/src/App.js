import './App.css';
import Home from './pages/Home/Home';
import Working from './pages/Working/Working';
import {Route, Routes } from 'react-router-dom';

export const hideOnMobile = (window.screen.width >= 768);

function App() {
	return (
		<Routes>
			<Route path='/' element={<Working titulo='Se vienen cositas'/>}/> 
			<Route path='/home' element={<Home/>} />
			<Route exact path='/Working' element={<Working titulo='Working...'/>} />
			<Route path='*' element={<Working titulo='404' subtitulo='Página no encontrada '/>} />
		</Routes>
	);
}

export default App;

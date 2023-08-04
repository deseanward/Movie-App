import './App.css';
import MovieDisplay from './components/movie-display/movie-display.component';
import MovieForm from './components/movie-form/movie-form.component';

function App() {
	return (
		<div className='App'>
			<MovieForm />
			<MovieDisplay />
		</div>
	);
}

export default App;

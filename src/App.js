import './App.css';
import MovieAppBG from './components/movie-app-bg/movie-app-bg.component';
import MovieDisplay from './components/movie-display/movie-display.component';
import MovieForm from './components/movie-form/movie-form.component';

function App() {
	return (
		<div className='App bg-slate-950'>
			<MovieForm />
			<MovieDisplay />
			<MovieAppBG />
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddRecipe/>
      <SearchRecipe/>
      <ViewAll/>
    </div>
  );
}

export default App;

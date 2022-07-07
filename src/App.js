import './App.css';
import SearchBar from "./Components/SearchBar";
import BookData from "./mockup/data.json";

function App() {
  return (
    <div className="App">
        <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;

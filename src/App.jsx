import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header/>
        <SearchBar/>
      </div>
    </>
  );
}

export default App;

import './App.css';
import NewComp from "./Components/NewComp"
function App() {
  const styles = {
    fontStyle: "bold",
    color: "teal"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={styles}>welcome</h1>
        <NewComp />
      </header>
    </div>
  );
}

export default App;

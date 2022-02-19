import Article from "./components/Article";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Back Bone</h1>
      </nav>
      <div className="content">
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;

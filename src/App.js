import Article from "./components/Article";
import User from "./components/User";
import brand from "./image/bone.png"

function App() {
  return (
    <div className="App">
      <nav>
        <img src={brand} alt="Brand-logo" />
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

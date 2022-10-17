import "./App.css";
import Header from "./Components/Header";
import TextEditer from "./Components/TextEditer";

function App() {
  return (
    <>
    <div>
      <Header/>
      </div>
      <div className="container">
        <h1>This is text editer project</h1>
        </div>
        <div>
      <TextEditer/>
      </div>
    </>
  );
}

export default App;

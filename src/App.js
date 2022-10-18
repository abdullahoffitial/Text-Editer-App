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
        <h3>Text Editer...</h3>
        </div>
        <div>
      <TextEditer/>
      </div>
    </>
  );
}

export default App;

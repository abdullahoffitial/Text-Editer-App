import "./App.css";
import Header from "./Components/Header";
import TextEditer from "./Components/TextEditer";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
    <div>
      <Header/>
      <Alert/>
      </div>
      <div className="container">
        </div>
        <div>
      <TextEditer  Heading="Text Editer..."/>
      </div>
    </>
  );
}

export default App;

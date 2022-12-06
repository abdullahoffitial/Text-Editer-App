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
          {/* props concept */}
      <TextEditer  Heading="Text Editor..."/>
      </div>
    </>
  );
}

export default App;

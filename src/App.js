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
        </div>
        <div>
      <TextEditer Heading="Text Editer..."/>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header";
// import SimpleForm from "./Components/SimpleForm";
import TextEditer from "./Components/TextEditer";
import TodoApp from "./Components/TodoApp";


function App() {
  return (
    <>
    <div>
      <Header/>
      </div>
      <div className="container">
        </div>
        <div>
          {/* props concept */}
      <TextEditer  Heading="Text Editor..."/>
      </div>
      <div className="container">
        <TodoApp/>
      </div>

      {/* <div className="container">
        <SimpleForm/>
      </div> */}

    </>
  );
}

export default App;

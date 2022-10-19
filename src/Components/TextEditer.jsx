import { useState } from "react";

export default function TextEditer(props) {
  const uperCase = () => {
    //console.log("UperCase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
      
  };

  const lowerCase = () => {
    //console.log("UperCase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    
  };

  
  const clearText = () => {
    //console.log("UperCase was clicked" + Text);
    let newText = ("");
    setText(newText);
    
  };

  const copy = async () => {
    await navigator.clipboard.writeText(Text);
    
  }
  
  
  const respaces = () => {
    //console.log("UperCase was clicked" + Text); rejux concept
    let newText = Text.split(/[ ]+/);
    setText(newText.join(' '))
    
    
  };
  
  const handleOnChange = (event) => {
    //console.log("Handle on change");
    setText(event.target.value);
  };

  const [Text, setText] = useState("Enter text here...");

  return (
    <>
      <h3 className="container my-3">{props.Heading}</h3>
      <div className="container">
        <div className="mb-3">
          <textarea 
            class="form-control"
            value={Text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary mx-2" onClick={uperCase}>
          Convert to Upercase
        </button>
        
        <button type="button" class="btn btn-primary mx-2" onClick={lowerCase}>
          Convert to lowercase
        </button>
        <button type="button" class="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>

        <button type="button" class="btn btn-primary mx-2" onClick={copy}>
          Copy Text
        </button>
        
        <button type="button" class="btn btn-primary mx-2" onClick={respaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">

            <h2>Your Text Summary</h2>
            <p><b>{Text.split(" ").length}</b> Words and <b>{Text.length}</b> Characters</p>
            <p><b>{0.01 * Text.split(" ").length}</b> Minutes to read</p>
            <h3>Preview</h3>
            <p>{Text}</p>
      </div>
    </>
  );
}

import { useState } from "react";

export default function TextEditer(props) {
  const uperCase = () => {
    console.log("UperCase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    console.log("UperCase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Handle on change");
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
        <button type="button" class="btn btn-primary mx-2">
          Copy
        </button>
        <button type="button" class="btn btn-primary mx-2">
          Paste
        </button>
      </div>
    </>
  );
}

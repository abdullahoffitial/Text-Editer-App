import React from "react";

export default function TextEditer() {
  return (
    <>
      <div className="container">
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary mx-2">
          Convert to Upercase
        </button>
        <button type="button" class="btn btn-primary mx-2">
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

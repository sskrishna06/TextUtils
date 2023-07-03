import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLowClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Copied to Clipboard!", "success")
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
    
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={Text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color: props.Mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {Text.split(" ").length} Words {Text.length} Characters{" "}
        </p>
        <h2>PREVIEW</h2>
        <p>{Text.length>0?Text:"Enter Your Text to Preview"}</p>
      </div>
    </>
  );
}

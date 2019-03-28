import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
var FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <tr className="file-list-item" key={file.id}>
          <td className="file-name">{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

FileList.PropTypes = {
  files: PropTypes.array
};

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updatedAt: "2/27/19",
    latestCommit: { message: "Initial Commit" }
  },

  {
    id: 2,
    name: "tests",
    type: "folder",
    updatedAt: "2/27/19",
    latestCommit: { message: "Initial Commit" }
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updatedAt: "2/28/19",
    latestCommit: { message: "Added a readme" }
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<FileList files={testFiles} />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";
import FileListItem from "./file-list-item";

var FileList = ({ file }) => (
  <table className="fileList">
    <tbody>
      {file.map(fileObj => (
        <FileListItem fileObj={fileObj} key={fileObj.name} />
      ))}
    </tbody>
  </table>
);

const testFiles = [
  {
    id: 1,
    name: "public",
    type: "folder",
    updatedAt: "1/21/19",
    latestCommit: { message: "Initial Commit" }
  },

  {
    id: 2,
    name: "src",
    type: "folder",
    updatedAt: "1/27/19",
    latestCommit: { message: "Initial Commit" }
  },
  {
    id: 3,
    name: "package.json",
    type: "file",
    updatedAt: "1/28/19",
    latestCommit: { message: "Added a readme" }
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<FileList file={testFiles} />, rootElement);

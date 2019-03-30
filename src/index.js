import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";

var FileList = ({ files }) => (
  <table className="fileList">
    <tbody>
      {files.map(file => (
        <FileListItem file={file} key={file.name} />
      ))}
    </tbody>
  </table>
);

var FileListItem = ({ file }) => (
  <tr className="fileListItem">
    <td className="fileName">
      <FileName file={file} />
    </td>
  </tr>
);

FileList.propTypes = {
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

var FileIcon = ({ file }) => {
  let icon = "fa-file-text-o";
  if (file.type == "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

var FileName = ({ file }) => {
  return (
    <React.Fragment>
      <FileIcon file={file} />
      <td className="fileName">{file.name}</td>
    </React.Fragment>
  );
};

FileName.propTypes = {
  file: PropTypes.object.isRequired
};
const rootElement = document.getElementById("root");
ReactDOM.render(<FileList files={testFiles} />, rootElement);

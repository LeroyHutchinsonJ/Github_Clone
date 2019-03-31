import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";

var FileList = ({ file }) => (
  <table className="fileList">
    <tbody>
      {file.map(fileObj => (
        <FileListItem fileObj={fileObj} key={fileObj.name} />
      ))}
    </tbody>
  </table>
);

var FileListItem = ({ fileObj }) => (
  <tr className="fileListItem">
    <td className="fileName">
      <FileName fileObj={fileObj} />
      <CommitMessageComponent commit={fileObj.latestCommit} />
    </td>
  </tr>
);

FileList.propTypes = {
  files: PropTypes.array
};

const testFiles = [
  {
    id: 1,
    name: "public",
    type: "folder",
    updatedAt: "2/27/19",
    latestCommit: { message: "Initial Commit" }
  },

  {
    id: 2,
    name: "src",
    type: "folder",
    updatedAt: "2/27/19",
    latestCommit: { message: "Initial Commit" }
  },
  {
    id: 3,
    name: "package.json",
    type: "file",
    updatedAt: "2/28/19",
    latestCommit: { message: "Added a readme" }
  }
];

var FileIcon = ({ fileObj }) => {
  let icon = "fas fa-file";
  if (fileObj.type == "folder") {
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

var FileName = ({ fileObj }) => {
  return (
    <React.Fragment>
      <FileIcon fileObj={fileObj} />
      <td className="fileName">{fileObj.name}</td>
    </React.Fragment>
  );
};

FileName.propTypes = {
  file: PropTypes.array.isRequired
};

var CommitMessageComponent = ({ commit }) => {
  return <td className="commitMessage">{commit.message}</td>;
};

CommitMessageComponent.propTypes = {
  commit: PropTypes.object.isRequired
};
const rootElement = document.getElementById("root");
ReactDOM.render(<FileList file={testFiles} />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PropTypes from "prop-types";
import Time from "./time";

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
    <td>
      <FileName fileObj={fileObj} />{" "}
    </td>
    <td>
      {" "}
      <CommitMessageComponent commit={fileObj.latestCommit} />
    </td>
    <td className="age">
      {" "}
      <Time time={fileObj.updatedAt} />
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

var FileIcon = ({ fileObj }) => {
  let icon = "fas fa-file";
  if (fileObj.type == "folder") {
    icon = "fa-folder";
  }
  return (
    <>
      <i className={`fa ${icon}`} />
    </>
  );
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

var FileName = ({ fileObj }) => {
  return (
    <React.Fragment>
      <span className="fileIcon">
        <FileIcon fileObj={fileObj} />
      </span>
      <span className="fileName">{fileObj.name}</span>
    </React.Fragment>
  );
};

FileName.propTypes = {
  file: PropTypes.array.isRequired
};

var CommitMessageComponent = ({ commit }) => {
  return <span className="commitMessage">{commit.message}</span>;
};

CommitMessageComponent.propTypes = {
  commit: PropTypes.object.isRequired
};
const rootElement = document.getElementById("root");
ReactDOM.render(<FileList file={testFiles} />, rootElement);

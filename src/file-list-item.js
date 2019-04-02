import React from "react";
import PropTypes from "prop-types";
import Time from "./time";
import CommitMessageComponent from "./commit-message";
import FileName from "./file-name";

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

export default FileListItem;

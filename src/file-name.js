import React from "react";
import PropTypes from "prop-types";
import FileIcon from "./file-icon";

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

export default FileName;

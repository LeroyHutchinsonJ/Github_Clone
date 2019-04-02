import React from "react";
import PropTypes from "prop-types";

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

export default FileIcon;

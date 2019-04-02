import React from "react";
import PropTypes from "prop-types";

var CommitMessageComponent = ({ commit }) => {
  return <span className="commitMessage">{commit.message}</span>;
};

CommitMessageComponent.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessageComponent;

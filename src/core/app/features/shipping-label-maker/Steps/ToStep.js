import React from "react";
import PropTypes from "prop-types";

const ToStep = () => {
  return (
    <div>
      In To step..
    </div>
  )
}

ToStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ToStep;
import React from "react";
import PropTypes from "prop-types";

const FromStep = () => {
  return (
    <div>
      In from step..
    </div>
  )
}

FromStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default FromStep;

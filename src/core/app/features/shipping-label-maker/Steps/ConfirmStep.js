import React from "react";
import PropTypes from "prop-types";

const ConfirmStep = () => {
  return (
    <div>
      In ConfirmStep step..
    </div>
  )
}

ConfirmStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ConfirmStep;
import React from "react";
import PropTypes from "prop-types";

const WeightStep = () => {
  return (
    <div>
      In Weight step..
    </div>
  )
}

WeightStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default WeightStep;
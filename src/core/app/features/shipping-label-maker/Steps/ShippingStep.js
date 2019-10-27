import React from "react";
import PropTypes from "prop-types";

const ShippingStep = () => {
  return (
    <div>
      In Shipping step..
    </div>
  )
}

ShippingStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ShippingStep;
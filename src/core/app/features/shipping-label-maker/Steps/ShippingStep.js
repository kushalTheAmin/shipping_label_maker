import React from "react";
import PropTypes from "prop-types";
import { stepMapping, shippingOptionObj } from "../../../../constants/comman";

const ShippingStep = (props) => {

    const { onAction, wizardContext: { shippingOption } } = props;
    return (
        <div>
        <h6>Enter shipping option</h6>
        <div className="row">
          <div className="six columns">
            <label>Shipping</label>
            <select
              onChange={onAction}
              value={shippingOption}
              data-id="shippingOption"
              data-step={stepMapping.shipping}
            >
              <option value={shippingOptionObj.ground}>
                Ground
              </option>
              <option value={shippingOptionObj.priority}>Express</option>
            </select>
          </div>
        </div>
      </div>
    );
}

ShippingStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ShippingStep;
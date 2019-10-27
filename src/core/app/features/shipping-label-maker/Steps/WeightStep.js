import React from "react";
import PropTypes from "prop-types";
import { stepMapping } from "../../../../constants/comman";

const WeightStep = (props) => {

    const { onAction, wizardContext: {weight} } = props;

    return (
        <div>
        <h6>Enter Weight</h6>
        <div className="row">
          <div className="six columns">
            <label>Weight</label>
            <input
              className="u-full-width"
              placeholder="Weight"
              data-id="weight"
              data-step={stepMapping.weight}
              type="number"
              onChange={onAction}
              value={weight}
              autoFocus
            />
          </div>
        </div>
      </div>
    )
}

WeightStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default WeightStep;
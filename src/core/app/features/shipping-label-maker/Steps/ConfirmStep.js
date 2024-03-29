import React from "react";
import PropTypes from "prop-types";
import { stepMapping } from "../../../../constants/comman";
import { getshippingOption, getShippingRate } from '../../../../utils/calculation';

const ConfirmStep = (props) => {

    const { wizardContext, onAction } = props;

    const gettoFrom = (keye) => {
        return Object.keys(wizardContext[keye]).map((val, i) => {
          return (
            <li key={i}>
              {' '}
              {val} : {wizardContext[keye][val]}{' '}
            </li>
          );
        });
    }

    const getShippingCost = () => {
        return (
          <span>
            {' '}
            {getShippingRate(wizardContext.weight, wizardContext.shippingOption)}{' '}
          </span>
        );
    }
    
    const getshippingOptions= () => {
        return getshippingOption(wizardContext.shippingOption);
    }

    return (
        <div>
            <h6> Confirm your information </h6>
            <p> From Information </p>
            <ul className="confirm-list">{gettoFrom(stepMapping.from)}</ul>
            <p> To Information </p>
            <ul className="confirm-list">{gettoFrom(stepMapping.to)}</ul>
            <p> Shipping Weight: {wizardContext.weight} </p>
            <p> Shipping Method: {getshippingOptions()} </p>
            <p> Shipping Cost: {getShippingCost()} </p>
            <p> To update information click previous below </p>
            <button
                type='button'
                data-step={stepMapping.confirm}
                onClick={onAction}
            >
                Confirm
            </button>
        </div>
    )
}

ConfirmStep.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default ConfirmStep;
import React from 'react';
import { getshippingOption, getShippingRate } from '../../../../utils/calculation'

const ShippingLabel = (props) => { 

    const { success, displayData} = props;
    return (
        success && 
        <section className="shippinglabel">
            <h6>Final Label</h6>
            <div className="info">
            <span className="block">
                {getshippingOption(displayData.shippingOption)} Shipping
            </span>
            <span className="block">
                {' '}
                ${getShippingRate(
                displayData.weight,
                displayData.shippingOption
                )}{' '}
                Shipping Cost{' '}
            </span>
            </div>
            <div className="from">
            <span className="block">{displayData.from.name}</span>
            <span className="block">{displayData.from.street}</span>
            <span className="block">
                {displayData.from.city}, {displayData.from.state}{' '}
                {displayData.from.zip}{' '}
            </span>
            </div>
            <div className="to">
            <span className="block">{displayData.to.name}</span>
            <span className="block">{displayData.to.street}</span>
            <span className="block">
                {displayData.to.city}, {displayData.to.state} {displayData.to.zip}
            </span>
            </div>
            <div> </div>
      </section>
    );
}

export default ShippingLabel;
import React from 'react';

const ShippingLabel = (props) => { 

    const { success } = props;
    console.log(success);
    return (
        <div> In Shipping Lable {success}...</div>
    );
}

export default ShippingLabel;
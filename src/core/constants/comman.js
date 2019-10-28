export const shippingOptions = Object.freeze({
    ground: 1,
    priority: 2
});

export const steps = [
    {
        name: 'From-Step',
        index: 0,
        api: 'from'
    },
    {
        name: 'To-Step',
        index: 1,
        api: 'to'
    },
    {
        name: 'Weight-Step',
        index: 2,
        api: 'weight'
    },
    {
        name: 'Shipping-Step',
        index: 3,
        api: 'shipping'
    },
    {
        name: 'Confirm-Step',
        index: 4,
        api: 'confirm'
    }
]

export const wizardActions = {
    prev: -1,
    curr: 0,
    next: 1
}

export const shippingObj = {
    from: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    },
    to: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    },
    weight: '',
    shippingOption: 1
};

export const stepMapping = Object.freeze({
    from: "from",
    to: "to",
    confirm: "confirm",
    weight: "weight",
    shipping: "shipping"
});
  
export const shippingOptionObj = Object.freeze({
    ground: 1,
    priority: 2
});
export const shippingOptions = Object.freeze({
    ground: 1,
    priority: 2
});

export const steps = [
    {
        name: 'From-Step',
        index: 0,
        api: 'FromStep'
    },
    {
        name: 'To-Step',
        index: 1,
        api: 'ToStep'
    },
    {
        name: 'Weight-Step',
        index: 2,
        api: 'WeightStep'
    },
    {
        name: 'Shipping-Step',
        index: 3,
        api: 'ShippingStep'
    },
    {
        name: 'Confirm-Step',
        index: 4,
        api: 'ConfirmStep'
    }
]

export const wizardActions = {
    prev: 0,
    curr: 1,
    next: 2
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

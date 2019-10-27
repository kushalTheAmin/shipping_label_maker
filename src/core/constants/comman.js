export const shippingOptions = Object.freeze({
    ground: 1,
    priority: 2
});

export const steps = [
    {
        name: 'From-Step',
        index: '1',
        api: 'FromStep'
    },
    {
        name: 'To-Step',
        index: '2',
        api: 'ToStep'
    },
    {
        name: 'Weight-Step',
        index: '3',
        api: 'WeightStep'
    },
    {
        name: 'Shipping-Step',
        index: '4',
        api: 'ShippingStep'
    },
    {
        name: 'Confirm-Step',
        index: '5',
        api: 'ConfirmStep'
    }
]

export const wizardActions = {
    prev: 0,
    curr: 1,
    next: 2
}

export const INIT_FIRST_FORM = {
    name: '',
    email: '',
    phone: '',
}

export const BUTTONS_TEXT = {
    NEXT_STEP: 'Next Step',
    GO_BACK: 'Go Back',
    CONFIRM: 'Confirm',
}

export const BILLING_PLANS = {
    MONTHLY: 'mo',
    YEARLY: 'yr',
}

export const SUBSCRIPTION_TIERS = {
    ARCADE: 'Arcade',
    ADVANCED: 'Advanced',
    PRO: 'Pro',
}
export const ADDONS_OPTIONS = {
    ONLINE: {
        VALUE: 'online',
        TITLE: 'Online service',
        DESCRIPTION: 'Access to multiplayer games',
        PRICE: {
            MONTHLY: 1,
            YEARLY: 10,
        }   
    },
    STORAGE: {
        VALUE: 'storage',
        TITLE: 'Larger storage',
        DESCRIPTION: 'Extra 1TB of cloud save',
        PRICE: {
            MONTHLY: 2,
            YEARLY: 20,
        }   
    },
    CUSTOM: {
        VALUE: 'custom',
        TITLE: 'Customizable profile',
        DESCRIPTION: 'Custom theme on your profile',
        PRICE: {
            MONTHLY: 2,
            YEARLY: 20,
        }   
    },
}

export const STEPS = {
    FIRST: {
        NUMBER: 1,
        TEXT: 'YOUR INFO'
    },
    SECOND: {
        NUMBER: 2,
        TEXT: 'SELECT PLAN'
    },
    THIRD: {
        NUMBER: 3,
        TEXT: 'ADD-ONS'
    },
    FOURTH: {
        NUMBER: 4,
        TEXT: 'SUMMARY'
    },

}

export const FORMS = {
    INFO: {
        NUMBER: 1,
        TITLE: 'Personal info',
        DESCRIPTION:'Please provide your name, email address, and phone number.',
    },
    PLAN: {
        NUMBER: 2,
        TITLE: 'Select your plan',
        DESCRIPTION:'You have the option of monthly or yearly billing.',
    },
    ADDONS: {
        NUMBER: 3,
        TITLE: 'Pick add-ons',
        DESCRIPTION:'Add-ons help enhance your gaming experience.',
    },
    SUMMARY: {
        NUMBER: 4,
        TITLE: 'Finishing up',
        DESCRIPTION:'Double-check everything looks OK before confirming.',
    },
}


const initialState = { 
    customerValues: {
        name: '',
        email: '',
        address: '',
        phoneNo: ''
    },
    sauceValues: {
        sauce: '',
        crust: ''
    },
    toppingsList: {}

};

let ToppingsList = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CUSTOMERVALUES':
            return {
                ...state,
                customerValues: action.payload
            }
        case "SET_SAUCEVALUES":
            return {
                ...state,
                sauceValues: action.payload
            }
        case 'SET_TOPPINGVALUES':
            let toppings = action.payload;
            ToppingsList = [];

            for (let [key, value] of Object.entries(toppings)) {
                if (value === true){
                    ToppingsList.push(key)
                }
            }

            return {
                ...state,
                toppingsList: ToppingsList
            }
        default:
            return state
    }

}

export default reducer;
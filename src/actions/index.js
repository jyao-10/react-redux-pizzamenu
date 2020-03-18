export default function SetCustomerValues(payload) {
    return {
        type: "SET_CUSTOMERVALUES",
        payload
    };
}

export function SetSauceValues(payload) {
    return {
        type: "SET_SAUCEVALUES",
        payload
    };
}

export function SetToppingValues(payload) {
    return {
        type: "SET_TOPPINGVALUES",
        payload
    };
}


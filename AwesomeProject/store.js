import { createStore } from 'redux'

const COUNT_INCREASE = 'COUNT_INCREASE'
const COUNT_DECREASE = 'COUNT_DECREASE'

const states = {
    count: 0
}

const reducers = (state = states, action) => {
    switch (action.type) {
        case COUNT_INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNT_DECREASE:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = createStore(reducers, states)

export const increase = () => {
    return {
        type: COUNT_INCREASE
    }
}
export const decrease = () => {
    return {
        type: COUNT_DECREASE
    }
}

export default store
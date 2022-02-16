export const brastlewarkReducer = (state = [], action) => {
    const { type } = action
    switch ( type ) {
        case '@brastlewark/init':
            return action.payload
        case '@brastlewark/filterAge':
            return state.filter(el=> el.age > Number(action.minAge) && el.age < Number(action.maxAge))
        case '@brastlewark/filterColor':
            return state.filter(el=> el.hair_color === action.color)
        case '@brastlewark/filterByName':
            return state.filter(el=> el.name.includes(action.name))
        default:
            return state
    }
}
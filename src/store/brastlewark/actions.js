export const brastlewarkInit = (brastlewarks) => {
    return {
        type: '@brastlewark/init',
        payload: brastlewarks
    }
}

export const brastlewarkFilterAge = (minAge, maxAge ) => {
    return {
        type: '@brastlewark/filterAge',
        minAge,
        maxAge
    }
}

export const brastlewarkFilterHairColor = ( color ) => {
    return {
        type: '@brastlewark/filterColor',
        color
    }
}

export const brastlewarkFilterByName = ( name ) => {
    return {
        type: '@brastlewark/filterByName',
        name
    }
}

let fieldArray = []

export const addPlant = (seedObject) => {
    fieldArray.push(seedObject)
    return fieldArray
}

export const usePlants = () => fieldArray.slice()
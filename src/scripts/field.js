let fieldArray = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const each of seedObject) {
            fieldArray.push(each)
        }
    } else {
        fieldArray.push(seedObject)
    }
}

export const usePlants = () =>  fieldArray.slice()

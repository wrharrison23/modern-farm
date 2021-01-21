export const harvestPlants = (plantArray) => {
    let harvestedPlants = []
    for (let plant of plantArray) {
        let n = 0
        if (plant.type === "Corn") {
            n = plant.output/2
        } else {
            n = plant.output
        }
        for (let i = 0; i < n; i++){
            harvestedPlants.push(plant)
        }
    }
    return harvestedPlants
}

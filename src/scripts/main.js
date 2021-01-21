import { addPlant, usePlants } from "./field.js"
import {createPlan} from "./plan.js"
let yearlyPlan = createPlan()
console.log(yearlyPlan)
import { createAsparagus } from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import {catalog} from "./catalog.js"


const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


const cornSeed = createCorn()
addPlant(asparagusSeed)
addPlant(cornSeed)

console.log(usePlants())




let plantArray = plantSeeds(yearlyPlan)

let harvestArray = harvestPlants(plantArray)

catalog(harvestArray)


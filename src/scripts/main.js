console.log("Welcome to the main module")
import { addPlant, usePlants } from "./field.js"
import {createPlan} from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)



addPlant(asparagusSeed)
let usedAsparagus = usePlants()
console.log(usedAsparagus)
import { harvestPlants } from "./harvester.js"

const container = document.querySelector("#plant-container")

export const catalog = (harvestArray) => {
    let harvestHTML = "";
    for (let plant of harvestArray) {
        harvestHTML += `<section class="plant">${plant.type}</section>`
    } 
    container.innerHTML = harvestHTML
}
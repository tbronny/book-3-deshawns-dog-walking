import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("pet")) {
        const [, petId] = itemClicked.id.split("--")

        // find method -- takes place of nesting loops..
        const clickedPet = pets.find((pet) => pet.id === parseInt(petId))
        const foundWalker = walkers.find(
            (walker) => walker.id === clickedPet.walkerId
        )
        // end find method..

        window.alert(
            `${clickedPet.name} is being walker by ${foundWalker.name}`
        )
    }
})

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id ="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

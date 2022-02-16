import medications from "../datasamp.js"
let inventory = []
let formulary = []

// Item class for creating inventory
export class Item {
    constructor(name, strength, packsize, total){
        this.name = name
        this.strength = strength;
        this.packsize = packsize;
        this.total = total;
    }
}

//function to add medication to the formulary
export function addMedication(medicine){
    medicine.map(med => {
        // if medication is not on meds list throw error
        if(!medications.includes(med)){
            throw new Error("Medicine you are trying to add is not on the medication list!")
        } else {
            // if med is on the med list but formulary already have the med listed throws error
            if(formulary.includes(med)){
                console.log(formulary)
                throw new Error("Medicine you are trying to add is already in the formulary!")
            } else {
                //if med is on med list and not in formula adds it to formula
                formulary.push(med)                
            }
        }
    })
    // logs formulary to console
    console.log(formulary)
    // returns the formulary to be able to proceed with the inventory
    return formulary
}

// Creating variables for steps describe in test - to run tests please comment out
const firstDose = ["Paracetamol", "Ibuprofen"]
const secondDoce = ["Amoxicillin"]
const thirdDose = ["Codeine", "Diclofenac", "Simvastatin", "Tramadol"]

// calling addMedication function to create the formulary  - to run tests please comment out
addMedication(firstDose)
addMedication(secondDoce)
addMedication(thirdDose)


// Function to create inventory
export function createInventory(item){
    // if medication is not on meds list throw error
    if(!medications.includes(item.name)) {
        throw new Error("Medicine you are trying to add is not on medications list!")
    } else {
        // Checks if the medication which we are trying to add is in the formulary or not
        if(!formulary.includes(item.name)){
            // med is not in the formulary throws error
            throw new Error ("Medication you are trying to add is not on formulary list!")
        } else {
            // med is included in the formulary than adds med and details to the inventory list
            inventory.push(item)
        }
    }

    // logs inventory to console
    console.log(inventory)
    // returns inventory 
    return inventory
}

// creating inventory by calling steps described in test  - to run tests please comment out
createInventory(new Item("Paracetamol", "500mg", 50, 100 ))
createInventory(new Item("Ibuprofen", "500mg", 50, 100 ))
createInventory(new Item("Amoxicillin", "250mg", 20, 200 ))
createInventory(new Item("Tramadol", "50mg", 100, 5 ))
createInventory(new Item("Codeine", "30mg", 10, 20 ))
createInventory(new Item("Simvastatin", "10mg", 10, 10 ))
createInventory(new Item("Warfarin", "3mg", 50, 5 ))


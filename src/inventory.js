import medications from "../datasamp.js"

let inventory = []

class Item {
    constructor(name, strength, packsize, total){
        this.name = name
        this.strength = strength;
        this.packsize = packsize;
        this.total = total;
    }
}

export function createInventory(item){
    if(!medications.includes(item.name)){
        throw new Error ("Medication you are trying to add is not on medications list!")
    } else {
        inventory.push(item)
    }

    console.log(inventory)
}

createInventory(new Item("Paracetamol", "500mg", 50, 100 ))
createInventory(new Item("Ibuprofen", "500mg", 50, 100 ))
createInventory(new Item("Amoxicillin", "250mg", 20, 200 ))
createInventory(new Item("Tramadol", "50mg", 100, 5 ))
createInventory(new Item("Codeine", "30mg", 10, 20 ))
createInventory(new Item("Simvastatin", "10mg", 10, 10 ))
createInventory(new Item("Warfarin", "3mg", 50, 5 ))




export default Item
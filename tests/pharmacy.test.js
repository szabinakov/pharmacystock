import {addMedication, createInventory, Item} from "../src/pharmacy";

describe('addMedication function', () => { 
    xit('Adds medication to the formulary, medication is on medications list, and it is not added to formulary yet', () => {
        const firstDose = ["Paracetamol", "Ibuprofen"]
        const secondDose = ["Amoxicillin"]
        const thirdDose = ["Codeine", "Diclofenac", "Simvastatin", "Tramadol"]

        expect(addMedication(firstDose)).toEqual(["Paracetamol", "Ibuprofen"])
        addMedication(secondDose)
        expect(addMedication(thirdDose)).toEqual(["Paracetamol", "Ibuprofen","Amoxicillin", "Codeine", "Diclofenac", "Simvastatin", "Tramadol" ])
    })
    xit('Throws error when medication is already in the formulary', () => {
        const secondDose = ["Paracetamol"]
        expect(()=>addMedication(secondDose)).toThrowError("Medicine you are trying to add is already in the formulary!")
    })

    xit('Throws error when medication is not included on medications list', () => {
        const firstDose = ["XZY"]
        
        expect(()=>addMedication(firstDose)).toThrow("Medicine you are trying to add is not on the medication list!")
    })
})

describe("createInventory function", ()=> {
    xit("creates an inventory usin Class", ()=> {
        const item = new Item("Paracetamol", "500mg", 50, 100 )
        createInventory(item)
        expect(item.name).toEqual("Paracetamol")
        expect(item.strength).toEqual("500mg")
        expect(item.packsize).toEqual(50)
        expect(item.total).toEqual(100)
    })
    xit("throws error when medicine is not on formulary list", ()=> {
        const item = new Item("XYZ", "500mg", 50, 100 )
        
        expect(()=>createInventory(item)).toThrow("Medication you are trying to add is not on formulary list!")

    })
})

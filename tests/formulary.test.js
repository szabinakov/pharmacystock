const {addMedication} = require("../src/formulary");

describe('addMedication function', () => { 
    it('Adds medication to the formulary, medication is on medications list, and it is not added to formulary yet', () => {
        const firstDose = ["Paracetamol", "Ibuprofen"]
        const secondDose = ["Amoxicillin"]
        const thirdDose = ["Codeine", "Diclofenac", "Simvastatin", "Tramadol"]

        addMedication(firstDose)
        expect(addMedication(firstDose)).toEqual(["Paracetamol", "Ibuprofen"])
        addMedication(secondDose)
        addMedication(thirdDose)
        expect(addMedication(thirdDose)).toEqual(["Paracetamol", "Ibuprofen","Amoxicillin", "Codeine", "Diclofenac", "Simvastatin", "Tramadol" ])
    })
})
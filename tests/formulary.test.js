import addMedication from "../src/formulary";

describe('addMedication function', () => { 
    it('Adds medication to the formulary, medication is on medications list, and it is not added to formulary yet', () => {
        const firstDose = ["Paracetamol", "Ibuprofen"]
        const secondDose = ["Amoxicillin"]
        const thirdDose = ["Codeine", "Diclofenac", "Simvastatin", "Tramadol"]

        expect(addMedication(firstDose)).toEqual(["Paracetamol", "Ibuprofen"])
        addMedication(secondDose)
        expect(addMedication(thirdDose)).toEqual(["Paracetamol", "Ibuprofen","Amoxicillin", "Codeine", "Diclofenac", "Simvastatin", "Tramadol" ])
    })
    it('Throws error when medication is already in the formulary', () => {
        const secondDose = ["Paracetamol"]
        expect(()=>addMedication(secondDose)).toThrowError("Medicine you are trying to add is already in the formulary!")
    })

    it('Throws error when medication is not included on medications list', () => {
        const firstDose = ["XZY"]
        
        expect(()=>addMedication(firstDose)).toThrow("Medicine you are trying to add is not on the medication list!")
    })
})
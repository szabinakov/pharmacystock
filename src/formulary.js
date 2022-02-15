import medications from "../datasamp.js"

let formulary = []

function addMedication(medicine){
    medicine.map(med => {
        if(!medications.includes(med)){
            throw new Error("Medicine you are trying to add is not on the medication list!")
        } else {
            if(formulary.includes(med)){
                throw new Error("Medicine you are trying to add is already in the formulary!")
            } else {
                formulary.push(med)                
            }
        }
    })
    return formulary
}

export default addMedication
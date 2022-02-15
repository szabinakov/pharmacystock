import {createInventory} from "../src/inventory";
import Item from "../src/inventory"

describe("createInventory function", ()=> {
    it("creates an inventory usin Class", ()=> {
        const item = new Item("Paracetamol", "500mg", 50, 100 )
        createInventory(item)
        expect(item.name).toEqual("Paracetamol")
        expect(item.strength).toEqual("500mg")
        expect(item.packsize).toEqual(50)
        expect(item.total).toEqual(100)
    })
    it("throws error when medicine is not on medications list", ()=> {
        const item = new Item("XYZ", "500mg", 50, 100 )
        
        expect(()=>createInventory(item)).toThrow("Medication you are trying to add is not on medications list!")

    })
})



import { render, screen } from "@testing-library/react"
import Counter from "../components/Counter"
import userEvent from "@testing-library/user-event"

describe("Testando Counter.js", ()=>{
    test("Incremento de 3 contador", async ()=>{
        const usuario = userEvent.setup()

        render(<Counter/>)

        const buttonInc = screen.getByText("+")
        await usuario.click(buttonInc)
        await usuario.click(buttonInc)
        await usuario.click(buttonInc)
        const value = screen.getByText("3")
	        
        expect(value).toBeInTheDocument()


    })
})
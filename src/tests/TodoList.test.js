import TodoList from "../components/TodoList"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Testando componente TodoList.js",  ()=>{

    // test("Inserindo a tarefa com enter", async ()=>{

    //     //Daniel: renderizar o componente
    //     render(<TodoList/>)

    //     //Daniel: renderizar o titulo
    //     // // screen.debug()
    //     // const title = screen.getByText(/todo list/i)
    //     // expect(title).toBeInTheDocument()

    //     //Daniel: selecionar os elementos que queremos interagir
    //     const input = screen.getByPlaceholderText("Enter a todo")

    //     //Daniel: interagir com os elementos
    //     const usuario = userEvent.setup()

    //     //Daniel:  criar asserções baseadas no comportamento esperado
    //     await usuario.type(input, "Almoçar{enter}")
    //     // screen.logTestingPlaygroundURL()

    //     const tarefa = screen.getByText("Almoçar")

    //     expect(input).toHaveInTheDocument()
    //     expect(tarefa).toBeInTheDocument()

    //     //Daniel: criar asserções baseadas nos comportamentos esperado
    //     // expect(input).toHaveValue("Almoçar")
    //     expect(input).toHaveValue("")
        
    // })

    test("Inserindo a tarefas com botão", async ()=>{

        //Daniel: renderizar o componente
        render(<TodoList/>)

        //Daniel: renderizar o titulo
        // // screen.debug()
        // const title = screen.getByText(/todo list/i)
        // expect(title).toBeInTheDocument()

        //Daniel: selecionar os elementos que queremos interagir
        const input = screen.getByPlaceholderText("Enter a todo")

        //Daniel: interagir com os elementos
        const usuario = userEvent.setup()

        //Daniel:  criar asserções baseadas no comportamento esperado
        await usuario.type(input, "Almoçar{enter}")
        // screen.logTestingPlaygroundURL()
        const tarefa = screen.getByText("Almoçar")
        const botaoToggle = screen.getByText("Toggle")
        await usuario.click(botaoToggle)
        screen.logTestingPlaygroundURL()
        

        expect(tarefa).toBeInTheDocument()
        expect(input).toHaveValue("")
        expect(tarefa).toHaveStyle("text-decoration: line-through")
        
        await usuario.click(botaoToggle)
        expect(tarefa).toHaveStyle("text-decoration: none")

        //Daniel: criar asserções baseadas nos comportamentos esperado
        // expect(input).toHaveValue("Almoçar")
           
    })
})
import React, { useState } from "react"

const Todo = () => {
    const [todo, setTodo] = useState([])
    const [entry, setEntry] = useState("")
    let list = { entry }
    let newList = [...todo, list]
    const makeEntry = () => {

        setTodo(newList)
        localStorage.todoList = JSON.stringify(newList)
    }
    const clearList = (i) => {
        todo.splice(i, 1)
        setTodo([...todo])
        localStorage.removeItem("todoList")
    }

    return (
        <>
            <main className="row d-flex flex-column justify-content-center align-items-center">
                <div className="card col-md-5 mt-5">
                    <h5 className="text-center">To-do List</h5>
                    <input type="text" className="form-control" onInput={(i) => setEntry(i.target.value)} />
                    <button className="btn btn-primary my-3 w-25" onClick={makeEntry}>Make entry</button>
                </div>
                {todo.map((item, i) =>
                    <div className="card col-md-5" key={i}>
                        <h5>Entry list</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Entry</th>
                                    <th scope="col">Clear entry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.entry}</td>
                                    <td><button className="btn btn-success" onClick={() => clearList(i)}>Clear</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )

                }

            </main>
        </>
    )
}
export default Todo
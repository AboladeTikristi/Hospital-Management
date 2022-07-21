import { useState } from "react"
import DrSideBar from "../components/DrSideBar"
const Todo = () => {
    const [todo, setTodo] = useState([])
    const [entry, setEntry] = useState("")
    const [task, setTask] = useState("")
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

    const completedTask = () => {

    }

    return (
        <>
            <main className="w-100 d-flex">
                <div>
                    <DrSideBar />
                </div>
                <div id="dahsbar" className="w-100">
                    <nav className="navbar navbar-expand navbar-light bg-light mx-2 shadow pb-2" id="genNav">
                        <div className="container-fluid">
                            <a className="navbar-brand">Welcome, Dr Who</a>
                            <form className="d-flex w-75">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
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
                                            {/* <th scope="col">Completed</th> */}
                                            <th scope="col">Delete entry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{item.entry}</td>
                                            {/* <td><button className="btn btn-success">Completed</button></td> */}
                                            <td><button className="btn btn-danger" onClick={() => clearList(i)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )

                        }

                    </main>
                </div>
            </main>

        </>
    )
}
export default Todo
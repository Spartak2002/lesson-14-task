import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IPersons } from "../request/Type"
import { getPersons, removePerson } from "../request/Api"
import '../App.css'

export const UserList = () => {
    const [users, setUsers] = useState<IPersons[]>([])

    useEffect(() => {
        const getPerson = async () => {
            const resp = await getPersons()
            setUsers(resp)
        }
        getPerson()
    }, [])

    const onDelete = async (id: number) => {
        await removePerson(id)
        setUsers([...users.filter(person => person.id != id)])
    }

    return <>
        {/* <h2>User List</h2>
        {
            users.map(user =>
            
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                    <p>{user.age}</p>
                    <p>{user.salary}</p>
                    <p>{user.city}</p>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                    <Link to={`/user/${user.id}`}>Edit</Link>
                    </div>
            )
        } */}

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>City</th>
                    <th>Actions</th>
                    <th>Details</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>

                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>{user.city}</td>
                            <td><button onClick={() => onDelete(user.id)}>Delete</button></td>
                            <td><Link to={`/user/${user.id}`}>Edit</Link></td>
                        </tr>

                    )
                }
            </tbody>
        </table>

    </>
}
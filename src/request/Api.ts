import axios from "axios"
import { IPersons } from "./Type"

export const getPersons = async (): Promise<IPersons[]> => {
    const resp = await axios.get('http://localhost:3004/persons')
    return resp.data
}

export const createPerson = async (person: IPersons): Promise<IPersons> => {
    const resp = await axios.post('http://localhost:3004/persons', person)
    return resp.data
}

export const updatePerson = async (id: number, person: IPersons): Promise<IPersons> => {
    const resp = await axios.put(`http://localhost:3004/persons/${id}`, person)
    return resp.data
}

export const removePerson = async (id: number): Promise<IPersons> => {
    const resp = await axios.delete('http://localhost:3004/persons/' + id)
    return resp.data
}

export const showUser = async (id: number): Promise<IPersons> => {
    const resp = await axios.get('http://localhost:3004/persons/' + id)
    return resp.data
}
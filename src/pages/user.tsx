import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IUser } from "../request/Type"
import { useForm } from "react-hook-form"
import { showUser, updatePerson } from "../request/Api"
import '../App.css'

export const User = () => {

    const { id } = useParams<{ id: string }>()
    const [info, setInfo] = useState<IUser | undefined>(undefined)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IUser>()
    const navigate = useNavigate()

    useEffect(() => {
        const getPerson = async () => {
            if (id) {
                const resp = await showUser(Number(id))
                setInfo(resp)
                reset(resp);
            }
        }

        getPerson()

    },[id,reset])

    const onUpdate = async (data:IUser) => {
        if (id) {
            await updatePerson(Number(id), {...data, id: Number(id)})
            navigate("/")
        }
    }

    return <div>
        <h2>User {id}</h2>

        <form onSubmit={handleSubmit(onUpdate)}>
            <input
                type="text"
                placeholder="Name"
                {...register('name', { required: "Name is required" })}
                defaultValue={info?.name}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

            <input
                type="text"
                placeholder="Surname"
                {...register('surname', { required: "Surname is required" })}
                defaultValue={info?.surname}
            />
            {errors.surname && <p style={{ color: 'red' }}>{errors.surname.message}</p>}

            <input
                type="number"
                placeholder="Age"
                {...register('age', { required: "Age is required" })}
                defaultValue={info?.age}
            />
            {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}

            <input
                type="number"
                placeholder="Salary"
                {...register('salary', { required: "Salary is required" })}
                defaultValue={info?.salary}
            />
            {errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}

            <input
                type="text"
                placeholder="City"
                {...register('city', { required: "City is required" })}
                defaultValue={info?.city}
            />
            {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}


            <button type="submit">Update</button>

        </form>

    </div>
}
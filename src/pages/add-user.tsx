import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { IPersons } from "../request/Type"
import { createPerson } from "../request/Api"
import '../App.css'

export const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IPersons>()
    const navigate = useNavigate()

    const onAdd = async (data: IPersons) => {
        await createPerson(data)
        navigate('/')
    }


    return <div>
        <form onSubmit={handleSubmit(onAdd)}>
            <input
                type="text"
                placeholder="Name"
                {...register('name', { required: "Name is required" })}

            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

            <input
                type="text"
                placeholder="Surname"
                {...register('surname', { required: "Surname is required" })}
            />
            {errors.surname && <p style={{ color: 'red' }}>{errors.surname.message}</p>}

            <input
                type="number"
                placeholder="Age"
                {...register('age', { required: "Age is required" })}
            />
            {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}

            <input
                type="number"
                placeholder="Salary"
                {...register('salary', { required: "Salary is required" })}
            />
            {errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}

            <input
                type="text"
                placeholder="City"
                {...register('city', { required: "City is required" })}
            />
            {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}
            <button>Add</button>
        </form>
    </div>
}
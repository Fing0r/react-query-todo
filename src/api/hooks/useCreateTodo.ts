import { useMutation, useQueryClient } from 'react-query'
import { createTodo } from '../request/todo'

interface Params {
    todo: string
    setTodo: (todo: string) => void
}

const useCreateTodo = (params: Params) => {
    const { todo, setTodo } = params

    const client = useQueryClient()

    return useMutation({
        mutationFn: () => createTodo(todo),
        onSuccess: () => {
            setTodo('')
            client.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}

export { useCreateTodo }

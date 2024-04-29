import { useMutation, useQueryClient } from 'react-query'

import { removeTodo } from '../request/todo'

interface Params {
    id: number
}

const useRemoveTodo = (params: Params) => {
    const { id } = params

    const client = useQueryClient()

    return useMutation({
        onSuccess: () => {
            client.setQueriesData<Todo[]>(['todos'], (oldData) =>
                (oldData ?? []).filter((todo) => id !== todo.id),
            )
        },
        mutationFn: () => removeTodo(id),
    })
}

export { useRemoveTodo }

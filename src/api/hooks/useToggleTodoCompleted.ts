import { useMutation, useQueryClient } from 'react-query'

import { toggleTodoCompleted } from '../services/todo'

interface Params {
    id: number
    completed: boolean
}

const useToggleTodoCompleted = (params: Params) => {
    const { id, completed } = params

    const client = useQueryClient()

    return useMutation({
        onSuccess: (data) => {
            client.setQueriesData<Todo[]>(['todos'], (oldData) =>
                (oldData ?? []).reduce<Todo[]>((acc, curr) => {
                    acc.push(curr.id === id ? data : curr)

                    return acc
                }, []),
            )
        },
        mutationFn: () => toggleTodoCompleted(id, completed),
    })
}

export { useToggleTodoCompleted }

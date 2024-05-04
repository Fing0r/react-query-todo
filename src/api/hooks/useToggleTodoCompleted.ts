import { useMutation, useQueryClient } from 'react-query'

import { toggleTodoCompleted } from '../services/todo'

import { useTodoFilters } from '@/store/todoFilters'
import { Todo } from '@/types/todo'

interface Params {
    id: number
    completed: boolean
}

const useToggleTodoCompleted = (params: Params) => {
    const { id, completed } = params

    const { state } = useTodoFilters()

    const client = useQueryClient()

    return useMutation({
        onSuccess: (data) => {
            client.setQueriesData<Todo[]>(['todos', state], (oldData) =>
                (oldData ?? []).reduce<Todo[]>((acc, curr) => {
                    if (
                        (state === 'completed' || state === 'process') &&
                        curr.id === id
                    ) {
                        return acc
                    }

                    acc.push(curr.id === id ? data : curr)

                    return acc
                }, []),
            )
        },
        mutationFn: () => toggleTodoCompleted(id, completed),
    })
}

export { useToggleTodoCompleted }

import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { createTodo } from '../services/todo'

import { useTodoFilters } from '@/store/todoFilters'
import { Todo } from '@/types/todo'

interface Params {
    todo: string
    onSuccess?: () => void
}

const useCreateTodo = (params: Params) => {
    const { todo, onSuccess } = params

    const toast = useToast()

    const { state } = useTodoFilters()

    const client = useQueryClient()

    return useMutation({
        mutationFn: () => createTodo(todo),
        onSuccess: (newTodo) => {
            onSuccess?.()

            if (state !== 'completed') {
                client.setQueriesData<Todo[]>(
                    ['todos', state],
                    (oldTodos = []) => [...oldTodos, newTodo],
                )
            }

            toast({
                title: 'Todo был создан',
                status: 'success',
                position: 'top-right',
            })
        },
        onError: () => {
            toast({
                title: 'Произошла ошибка при создание todo',
                status: 'error',
                position: 'top-right',
            })
        },
    })
}

export { useCreateTodo }

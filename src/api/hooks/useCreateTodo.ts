import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { createTodo } from '../request/todo'

interface Params {
    todo: string
    onSuccess?: () => void
}

const useCreateTodo = (params: Params) => {
    const { todo, onSuccess } = params

    const toast = useToast()

    const client = useQueryClient()

    return useMutation({
        mutationFn: () => createTodo(todo),
        onSuccess: (newTodo) => {
            onSuccess?.()
            client.setQueriesData<Todo[]>(['todos'], (oldTodos = []) => [
                ...oldTodos,
                newTodo,
            ])
            toast({
                title: 'Todo был создан',
                status: 'success',
            })
        },
        onError: () => {
            toast({
                title: 'Произошла ошибка при создание todo',
                status: 'error',
            })
        },
    })
}

export { useCreateTodo }

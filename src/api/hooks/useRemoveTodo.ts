import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'

import { removeTodo } from '../services/todo'

import { Todo } from '@/types/todo'

interface Params {
    id: number
}

const useRemoveTodo = (params: Params) => {
    const { id } = params
    const toast = useToast()

    const client = useQueryClient()

    return useMutation({
        onSuccess: () => {
            client.setQueriesData<Todo[]>(['todos'], (oldData) =>
                (oldData ?? []).filter((todo) => id !== todo.id),
            )
            toast({
                title: 'Todo был удален',
                status: 'warning',
                position: 'top-right',
            })
        },
        onError: () => {
            toast({
                title: 'Ошибка при удаление Todo',
                status: 'error',
                position: 'top-right',
            })
        },
        mutationFn: () => removeTodo(id),
    })
}

export { useRemoveTodo }

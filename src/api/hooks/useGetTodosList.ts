import { useQuery } from 'react-query'

import { getTodosList } from '../services/todo'

import { TodoState } from '@/types/todo'

const useGetTodosList = (state: TodoState) =>
    useQuery({
        queryKey: ['todos', state],
        queryFn: () => getTodosList(state),
    })

export { useGetTodosList }

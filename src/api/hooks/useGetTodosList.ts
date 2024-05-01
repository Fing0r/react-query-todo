import { useQuery } from 'react-query'

import { getTodosList, TodoState } from '../services/todo'

const useGetTodosList = (state: TodoState) =>
    useQuery({
        queryKey: ['todos', state],
        queryFn: () => getTodosList(state),
    })

export { useGetTodosList }

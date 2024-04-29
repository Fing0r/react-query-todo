import { useQuery } from 'react-query'

import { getTodosList } from '../request/todo'

const useGetTodosList = () => useQuery({
        queryKey: ['todos'],
        queryFn: getTodosList,
    })

export { useGetTodosList }

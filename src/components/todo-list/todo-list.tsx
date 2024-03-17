import React from 'react'
import { List, Spinner } from '@chakra-ui/react'
import { TodoItem } from '@/components/todo-item'
import { useGetTodosList } from '@/api/hooks/useGetTodosList'

interface Props {}

const TodoList = (props: Props) => {
    const { data, isLoading } = useGetTodosList()

    if (!data?.length && isLoading) {
        return <Spinner />
    }

    if (!data?.length) {
        return <div>Нет данных</div>
    }

    return (
        <List spacing={10} p={16} bgColor="white" color="black" width={500}>
            {data.map((item) => (
                <TodoItem {...item} key={item.id} />
            ))}
        </List>
    )
}

export { TodoList }

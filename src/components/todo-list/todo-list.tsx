import { List, Spinner } from '@chakra-ui/react'
import React from 'react'

import { useGetTodosList } from '@/api/hooks/useGetTodosList'
import { TodoItem } from '@/components/todo-item'
import { useTodoFilters } from '@/store/todoFilters'

const TodoList = () => {
    const { completeType } = useTodoFilters()

    const { data, isLoading } = useGetTodosList(completeType)

    if (!data?.length && isLoading) {
        return <Spinner />
    }

    if (!data?.length) {
        return <div>Нет данных</div>
    }

    return (
        <List
            height="100%"
            spacing={10}
            py={2}
            px={6}
            style={{
                overflow: 'auto',
            }}
            bgColor="white"
            color="black"
            width="100%"
        >
            {data.map((item) => (
                <TodoItem {...item} key={item.id} />
            ))}
        </List>
    )
}

export { TodoList }

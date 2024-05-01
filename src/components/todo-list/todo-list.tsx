import { List, Spinner } from '@chakra-ui/react'
import React from 'react'

import { useGetTodosList } from '@/api/hooks/useGetTodosList'
import { TodoState } from '@/api/request/todo'
import { TodoItem } from '@/components/todo-item'

interface Props {
    view: TodoState
}

const TodoList = (props: Props) => {
    const { view } = props

    const { data, isLoading } = useGetTodosList(view)

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

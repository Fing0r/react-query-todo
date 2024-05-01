import { HStack, ListItem, Checkbox, Spinner } from '@chakra-ui/react'
import React from 'react'

import { useToggleTodoCompleted } from '@/api/hooks/useToggleTodoCompleted'
import { RemoveTodo } from '@/components/remove-todo'
import { Todo } from '@/types/todo'

interface TodoItemProps extends Todo {}

const TodoItem = (props: TodoItemProps) => {
    const { title, completed, id } = props

    const { mutate: handleToggleComplete, isLoading } = useToggleTodoCompleted({
        id,
        completed: !completed,
    })

    return (
        <ListItem>
            <HStack justify="space-between">
                <Checkbox
                    onChange={() => handleToggleComplete()}
                    colorScheme="cyan"
                    size="lg"
                    disabled={isLoading}
                    isChecked={completed}
                >
                    {title}
                </Checkbox>
                <HStack
                    height="40px"
                    width="40px"
                    justifyContent="center"
                    alignItems="center"
                >
                    {isLoading ? <Spinner size="xs" /> : <RemoveTodo id={id} />}
                </HStack>
            </HStack>
        </ListItem>
    )
}

export { TodoItem }

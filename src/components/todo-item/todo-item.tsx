import React from 'react'
import { HStack, ListItem, Checkbox, Spinner } from '@chakra-ui/react'
import { useToggleTodoCompleted } from '@/api/hooks/useToggleTodoCompleted'

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
                    {isLoading && <Spinner size="xs" ml={4} />}
                </Checkbox>
            </HStack>
        </ListItem>
    )
}

export { TodoItem }

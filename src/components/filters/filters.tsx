import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

import { useTodoFilters } from '@/store/todoFilters'
import { TodoState } from '@/types/todo'

const TODO_STATE_FILTERS: TodoState[] = ['all', 'completed', 'process']

const Filters = () => {
    const { changeTodoFilterType, state } = useTodoFilters()

    return (
        <HStack width="100%" px={4}>
            {TODO_STATE_FILTERS.map((todoState) => (
                <Button
                    width="100%"
                    variant={state === todoState ? 'solid' : 'outline'}
                    onClick={() => changeTodoFilterType(todoState)}
                >
                    {todoState}
                </Button>
            ))}
        </HStack>
    )
}

export { Filters }

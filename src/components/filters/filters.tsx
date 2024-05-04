import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

import { useTodoFilters } from '@/store/todoFilters'

const Filters = () => {
    const { changeTodoFilterType, completeType } = useTodoFilters()

    return (
        <HStack width="100%" px={4}>
            <Button
                width="100%"
                variant={completeType === 'all' ? 'solid' : 'outline'}
                onClick={() => changeTodoFilterType('all')}
            >
                all
            </Button>
            <Button
                width="100%"
                variant={completeType === 'completed' ? 'solid' : 'outline'}
                onClick={() => changeTodoFilterType('completed')}
            >
                completed
            </Button>
            <Button
                width="100%"
                variant={completeType === 'process' ? 'solid' : 'outline'}
                onClick={() => changeTodoFilterType('process')}
            >
                process
            </Button>
        </HStack>
    )
}

export { Filters }

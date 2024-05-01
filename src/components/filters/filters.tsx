import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

import { TodoState } from '@/api/request/todo'

interface Props {
    onChangeFilters: (view: TodoState) => void
    view: TodoState
}

const Filters = (props: Props) => {
    const { onChangeFilters, view } = props

    return (
        <HStack width="100%" px={6}>
            <Button
                width="100%"
                variant={view === 'all' ? 'solid' : 'outline'}
                onClick={() => onChangeFilters('all')}
            >
                all
            </Button>
            <Button
                width="100%"
                variant={view === 'completed' ? 'solid' : 'outline'}
                onClick={() => onChangeFilters('completed')}
            >
                completed
            </Button>
            <Button
                width="100%"
                variant={view === 'process' ? 'solid' : 'outline'}
                onClick={() => onChangeFilters('process')}
            >
                process
            </Button>
        </HStack>
    )
}

export { Filters }

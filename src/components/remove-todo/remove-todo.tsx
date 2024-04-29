import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'

import { useRemoveTodo } from '@/api/hooks/useRemoveTodo'

interface RemoveTodoProps {
    id: number
}

const RemoveTodo = (props: RemoveTodoProps) => {
    const { id } = props

    const { mutate: handleRemove } = useRemoveTodo({
        id,
    })

    return (
        <IconButton
            variant="none"
            onClick={() => handleRemove()}
            aria-label="Remove Todo"
            icon={<DeleteIcon />}
        />
    )
}

export { RemoveTodo }

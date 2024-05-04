import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useCreateTodo } from '@/api/hooks/useCreateTodo'

const CreateTodo = () => {
    const [todo, setTodo] = useState('')

    const { mutate: handleCreateTodo } = useCreateTodo({
        todo,
        onSuccess: () => {
            setTodo('')
        },
    })

    return (
        <HStack width="100%" px={4}>
            <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button
                isDisabled={!todo}
                onClick={() => handleCreateTodo()}
                color="purple"
            >
                Создать
            </Button>
        </HStack>
    )
}

export { CreateTodo }

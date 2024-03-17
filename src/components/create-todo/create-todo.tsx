import React, { useState } from 'react'
import { Button, HStack, Input } from '@chakra-ui/react'
import { useCreateTodo } from '@/api/hooks/useCreateTodo'

interface CreateTodoProps {}

const CreateTodo = (props: CreateTodoProps) => {
    const {} = props

    const [todo, setTodo] = useState('')

    const { mutate: handleCreateTodo } = useCreateTodo({ todo, setTodo })

    return (
        <HStack>
            <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button
                isDisabled={!todo}
                onClick={() => handleCreateTodo()}
                color={'purple'}
            >
                Создать
            </Button>
        </HStack>
    )
}

export { CreateTodo }

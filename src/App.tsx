import './App.css'
import { VStack } from '@chakra-ui/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CreateTodo } from '@/components/create-todo'
import { Filters } from '@/components/filters'
import { TodoList } from '@/components/todo-list'
import { ChakraProvider } from '@/theme'

const queryClient = new QueryClient()

function App() {
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <VStack
                        gap={4}
                        p={4}
                        width={600}
                        height="100%"
                        marginX="auto"
                    >
                        <CreateTodo />
                        <Filters />
                        <TodoList />
                    </VStack>
                </ChakraProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App

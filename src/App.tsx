import './App.css'
import { VStack } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CreateTodo } from '@/components/create-todo'
import { TodoView } from '@/components/todo-view/todo-view'
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
                        <TodoView />
                    </VStack>
                </ChakraProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App

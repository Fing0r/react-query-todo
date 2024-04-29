import './App.css'
import { VStack } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CreateTodo } from '@/components/create-todo'
import { TodoList } from '@/components/todo-list'
import { ChakraProvider } from '@/theme'

const queryClient = new QueryClient()

console.log('test')
function App() {
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <VStack p={4} width={600} height="100%" marginX="auto">
                        <CreateTodo />
                        <TodoList />
                    </VStack>
                </ChakraProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App

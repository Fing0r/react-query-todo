import './App.css'
import { TodoList } from '@/components/todo-list'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { CreateTodo } from '@/components/create-todo'

const queryClient = new QueryClient()

function App() {
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <CreateTodo />
                    <TodoList />
                </ChakraProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App

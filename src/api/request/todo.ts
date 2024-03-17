const baseHeaders = {
    'Content-type': 'application/json; charset=UTF-8',
}

const baseApi = 'http://localhost:8000'

const ROUTES = {
    TODOS: 'todos',
}

export const toggleTodoCompleted = async (
    id: number,
    completed: boolean,
): Promise<Todo> => {
    const url = `${baseApi}/${ROUTES.TODOS}/${id}`

    const res = await fetch(url, {
        method: 'PATCH',
        headers: baseHeaders,
        body: JSON.stringify({ completed }),
    })

    if (!res.ok) {
        throw new Error('Error')
    }

    return res.json()
}

export const getTodosList = async (): Promise<Todo[]> => {
    const url = `${baseApi}/${ROUTES.TODOS}`

    const res = await fetch(url, {
        method: 'GET',
        headers: baseHeaders,
    })

    if (!res.ok) {
        throw new Error('Error')
    }

    return res.json()
}

export const createTodo = async (title: string): Promise<Todo> => {
    const url = `${baseApi}/${ROUTES.TODOS}`

    const res = await fetch(url, {
        method: 'POST',
        headers: baseHeaders,
        body: JSON.stringify({ title: title, completed: false }),
    })

    if (!res.ok) {
        throw new Error('Error')
    }

    return res.json()
}

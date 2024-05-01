import React, { useState } from 'react'

import { TodoState } from '@/api/request/todo'
import { Filters } from '@/components/filters'
import { TodoList } from '@/components/todo-list'

const TodoView = () => {
    const [view, setView] = useState<TodoState>('all')

    return (
        <>
            <Filters view={view} onChangeFilters={setView} />
            <TodoList view={view} />
        </>
    )
}

export { TodoView }

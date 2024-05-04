import { create } from 'zustand'

import { TodoState } from '@/types/todo'

interface Props {
    state: TodoState
    changeTodoFilterType: (type: TodoState) => void
}

const useTodoFilters = create<Props>((set) => ({
    state: 'all',
    changeTodoFilterType: (type) => set(() => ({ state: type })),
}))

export { useTodoFilters }

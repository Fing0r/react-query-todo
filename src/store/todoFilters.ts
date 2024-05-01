import { create } from 'zustand'

import { TodoState } from '@/types/todo'

interface Props {
    completeType: TodoState
    changeTodoFilterType: (type: TodoState) => void
}

const useTodoFilters = create<Props>((set) => ({
    completeType: 'all',
    changeTodoFilterType: (type) => set(() => ({ completeType: type })),
}))

export { useTodoFilters }

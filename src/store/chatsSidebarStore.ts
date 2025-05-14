import { create } from 'zustand'

type ChatsSidebarStore = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useChatsSidebarStore = create<ChatsSidebarStore>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}))

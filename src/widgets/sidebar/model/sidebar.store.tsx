import { create } from "zustand";

type SidebarStore = {
    status: boolean;
    setStatus: () => void;
};

export const useSidebar = create<SidebarStore>((set, get) => ({
    status: false,
    setStatus: () => {
        set({ status: !get().status });
        console.log("setStatus");
    },
}));

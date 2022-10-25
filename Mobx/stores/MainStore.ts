import { makeAutoObservable } from 'mobx';

export interface MainStoreI {
    sidebarOpen: boolean;
    sidebarHandler(): void;
}

class MainStore implements MainStoreI {
    sidebarOpen = false;
    constructor() {
        makeAutoObservable(this);
    }
    sidebarHandler() {
        this.sidebarOpen = !this.sidebarOpen;
    }
}

const rootStore = new MainStore();
export default rootStore;

import { makeAutoObservable } from 'mobx';

export interface MainStoreI {
    sidebarOpen: boolean;
    sidebarHandler(): void;
}

class MainStore implements MainStoreI {
    sidebarOpen: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
    sidebarHandler() {
        this.sidebarOpen = !this.sidebarOpen;
        console.log(this.sidebarOpen, 'click');
    }
}

const rootStore = new MainStore();
export default rootStore;

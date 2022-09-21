import MainStore, { MainStoreI } from './MainStore';

export interface RootStoreI {
    mainStore: MainStoreI;
}

class RootStore implements RootStoreI {
    mainStore: MainStoreI;
    constructor() {
        this.mainStore = MainStore;
    }
}

const rootStore = new RootStore();
export default rootStore;

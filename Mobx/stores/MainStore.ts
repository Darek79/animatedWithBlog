import { makeAutoObservable } from 'mobx';
import { ItemsEntity } from 'utils/Article_Preview';

export interface MainStoreI {
    sidebarOpen: boolean;
    searchOpen: boolean;
    sidebarHandler(): void;
    searchHandler(): void;
    setArticleArray: (arr: ItemsEntity[]) => void;
    articleArray: ItemsEntity[];
}

class MainStore implements MainStoreI {
    sidebarOpen = false;
    searchOpen = false;
    articleArray: ItemsEntity[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    sidebarHandler() {
        this.sidebarOpen = !this.sidebarOpen;
    }
    searchHandler() {
        this.searchOpen = !this.searchOpen;
    }
    setArticleArray(arr: ItemsEntity[]) {
        this.articleArray = arr;
    }
}

const rootStore = new MainStore();
export default rootStore;

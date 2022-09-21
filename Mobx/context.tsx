import { createContext, useContext, Context } from 'react';
import type { RootStoreI } from './stores/RootStore';
import rootStore from './stores/RootStore';

const storeContext: Context<RootStoreI> = createContext<RootStoreI>(rootStore);

export function useStore() {
    return useContext(storeContext);
}

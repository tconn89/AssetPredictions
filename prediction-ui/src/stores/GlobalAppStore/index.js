import React, { useReducer, createContext, useCallback } from 'react';
import { asyncDispatch } from '../../util';

// reducer to manage sidebar state globally
import sidebarReducer from './sidebar/reducer';
import newsReducer from './news/reducer';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
    sidebar: {
        show: false
    },
    news : {
        loading: false,
    }
};


function combinedReducer(currentState = initialState, action) {
    // we map the reducer call to each of the sub reducers
    return {
        sidebar: sidebarReducer(currentState.sidebar, action),
        news: newsReducer(currentState.sidebar, action),
    };
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(combinedReducer, initialState);
    const handler = useCallback(asyncDispatch(dispatch), []);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={handler}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
};

function useAppState() {
    const context = React.useContext(AppStateContext);
    if (context === undefined) {
        throw new Error('useAppState must be used within an AppProvider');
    }
    return context;
}

function useAppDispatch() {
    const context = React.useContext(AppDispatchContext);
    if (context === undefined) {
        throw new Error('useAppDispatch must be used within an AppProvider');
    }
    return context;
}

export { AppProvider, useAppState, useAppDispatch };

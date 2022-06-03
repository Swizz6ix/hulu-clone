import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const DataLayerContext = createContext();

// Wrap our app and provide the DataLayer
export const DataLayer = ({reducer, initialState, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </DataLayerContext.Provider>
);

// Pull Infomation from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
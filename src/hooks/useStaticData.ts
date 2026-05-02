import { createContext, useContext } from 'react';
import type { StaticData } from '../types/definitions';

export const StaticDataContext = createContext<StaticData | undefined>(undefined);

export const useStaticData = () => {
    const context = useContext(StaticDataContext);
    if (!context) throw new Error("useStaticData debe usarse dentro de StaticDataProvider");
    return context;
};

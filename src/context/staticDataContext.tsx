// src/context/StaticDataContext.tsx
import { useState, useEffect } from 'react';
import { getLatestVersionImages, getRunes, getSpells } from '../services/staticDataService';
import type { StaticData } from '../types/definitions';
import { StaticDataContext } from '../hooks/useStaticData';

export const StaticDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [staticData, setStaticData] = useState<StaticData>({
        version: '',
        runes: {},
        spells: {},
        loading: true,
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const version = await getLatestVersionImages(); // Obtiene la última versión
                const runes = await getRunes(version);
                const spells = await getSpells(version);
                setStaticData({
                    version: version,
                    runes: runes,
                    spells: spells,
                    loading: false,
                });
            } catch (error) {
                console.error("Error cargando constantes:", error);
                setStaticData(prev => ({ ...prev, loading: false }));
            }
        };

        loadData();
    }, []);

    return (
        <StaticDataContext.Provider value={staticData}>
            {children}
        </StaticDataContext.Provider>
    );
};


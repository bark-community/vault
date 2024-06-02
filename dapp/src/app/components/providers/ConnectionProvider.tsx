import React, { useMemo, createContext, useContext } from 'react';
import { Connection } from '@solana/web3.js';

// Create a context for the Solana connection
export const ConnectionContext = createContext<Connection | null>(null);

// Custom hook to use the Solana connection
export const useConnection = () => {
    const connection = useContext(ConnectionContext);
    if (!connection) {
        throw new Error('useConnection must be used within a ConnectionProvider');
    }
    return connection;
};

interface ConnectionProviderProps {
    endpoint: string;
    config?: any;
}

const ConnectionProvider: React.FC<ConnectionProviderProps> = ({ children, endpoint, config = { commitment: 'confirmed' } }) => {
    const connection = useMemo(() => new Connection(endpoint, config), [endpoint, config]);

    return (
        <ConnectionContext.Provider value={connection}>
            {children}
        </ConnectionContext.Provider>
    );
};

export default ConnectionProvider;

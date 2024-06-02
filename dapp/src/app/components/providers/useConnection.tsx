import { useContext } from 'react';
import { ConnectionContext } from './ConnectionProvider';

// Custom hook to use the Solana connection
export const useConnection = () => {
    const connection = useContext(ConnectionContext);
    if (!connection) {
        throw new Error('useConnection must be used within a ConnectionProvider');
    }
    return connection;
};

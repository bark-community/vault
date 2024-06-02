import React, { useMemo, createContext, useContext } from 'react';
import { Connection } from '@solana/web3.js';
import { useClient } from 'next/client';

// Create a context for the Solana connection
const ConnectionContext = createContext<Connection | null>(null);

// Hook to use the Solana connection context
export const useConnection = () => {
  const connection = useContext(ConnectionContext);
  if (!connection) {
    throw new Error('useConnection must be used within a ConnectionProvider');
  }
  return connection;
};

// ConnectionProvider component
const ConnectionProvider: React.FC<{ endpoint: string }> = ({ children, endpoint }) => {
  const client = useClient(); // Check if the component is being rendered on the client side

  const connection = useMemo(() => new Connection(endpoint), [endpoint]);

  // If the component is rendered on the server side, return null
  if (!client) {
    return null;
  }

  return <ConnectionContext.Provider value={connection}>{children}</ConnectionContext.Provider>;
};

export default ConnectionProvider;

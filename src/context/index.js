import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, useAccount, WagmiConfig, useContract, useProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useContext, createContext, useState, useEffect } from 'react';



const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
        alchemyProvider({ apiKey: "AJB63JaTY4foRVyjLL2s9G4FPLjj_sJt" }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { address } = useAccount();
    const provider = useProvider()

    return (


        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <stateContext.Provider
                    value={{
                       address 
                    }}
                >
                    {children}
                </stateContext.Provider>
            </RainbowKitProvider>
        </WagmiConfig>

    )
}

export const useStateContext = () => useContext(stateContext);



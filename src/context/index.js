import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
    Chain
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, useAccount, WagmiConfig} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { useContext, createContext, useState, useEffect } from 'react';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import abi from '../contractsData/meddata.json';
import contractAddress from '../contractsData/meddata-address.json'



const liberty2X = {
    id: 8082,
    name: 'Shardeum Sphinx 1.X',
    network: 'Shardeum Sphinx 1.X',
    iconUrl: 'https://shardeum.org/blog/wp-content/uploads/2022/05/Shardeum-Logo-Icon-Light-Square-1024x853.png',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        name: 'SHM testnet',
        symbol: 'SHM',
    },
    rpcUrls: {
        default: {
            http: ['https://sphinx.shardeum.org/'],
        },
    },
    blockExplorers: {
        default: { name: 'Shardeum Explorer', url: 'https://explorer-sphinx.shardeum.org/' },
        etherscan: { name: 'Shardeum Explorer', url: 'https://explorer-sphinx.shardeum.org/' },
    },
    testnet: true,
};



const { chains, provider } = configureChains(
    [liberty2X],
    [
        jsonRpcProvider({
            rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
        }),
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
    const contractABI = abi.abi;
    const { address } = useAccount();

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <stateContext.Provider
                    value={{
                        address,
                        contractAddress,
                        contractABI,
                    }}
                >
                    {children}
                </stateContext.Provider>
            </RainbowKitProvider>
        </WagmiConfig>

    )
}

export const useStateContext = () => useContext(stateContext);



import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
    Chain
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, useAccount, WagmiConfig, useContract, useProvider } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useContext, createContext, useState, useEffect } from 'react';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import abi from '../contractsData/meddata.json';
import contractAddress from '../contractsData/meddata-address.json'



const liberty2X = {
    id: 8081,
    name: 'Shardeum Liberty 2.X',
    network: 'Shardeum Liberty 2.X',
    iconUrl: 'https://shardeum.org/blog/wp-content/uploads/2022/05/Shardeum-Logo-Icon-Light-Square-1024x853.png',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'SHM testnet',
      symbol: 'SHM',
    },
    rpcUrls: {
      default: {
        http: ['https://liberty20.shardeum.org/'],
      },
    },
    blockExplorers: {
      default: { name: 'Shardeum Explorer', url: 'https://explorer-liberty20.shardeum.org/' },
      etherscan: { name: 'Shardeum Explorer', url: 'https://explorer-liberty20.shardeum.org/' },
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
    const provider = useProvider();
    const contract = useContract({
        address: contractAddress.address,
        abi: contractABI,
        signerOrProvider: provider,
      })


    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <stateContext.Provider
                    value={{
                       address,
                       contract
                    }}
                >
                    {children}
                </stateContext.Provider>
            </RainbowKitProvider>
        </WagmiConfig>

    )
}

export const useStateContext = () => useContext(stateContext);



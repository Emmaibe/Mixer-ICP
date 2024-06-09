import {createContext, useEffect, useState} from "react";
import {chains} from "../utils/chains.js";

export const ChainContext = createContext(undefined)

// eslint-disable-next-line react/prop-types
export const ChainContextProvider = ({ children }) => {
    const [chain, setChain] = useState(chains()[0])

    const [token, setToken] = useState(chains()[0].tokens[0])

    useEffect(() => {
        chain && setToken(chain.tokens[0])
    }, [chain]);

    const switchChain = (network) => {
        setChain(network)
    }

    return(
        <ChainContext.Provider value={{ chain, switchChain, token, setToken }}>
            { children }
        </ChainContext.Provider>
    )
}
import arrowHead from "../assets/images/arrow.png"
import {useContext, useEffect, useState} from "react";
// import { useWeb3Modal } from '@web3modal/wagmi/react'
import {ChainContext} from "../context/ChainContext.jsx";
import {amountFormatter} from "../utils/amountFormatter.js";
import {formatPriceWithCommas} from "../utils/priceformater.js";

export const DepositCard = () => {
    const { chain, token, setToken } = useContext(ChainContext)

    // const { open } = useWeb3Modal()

    const [coinToggle, setCoinToggle] = useState(false)

    const [tokenAmount, setTokenAmount] = useState('')

    const handleSetTokenAmount = (amount) => {
        setTokenAmount(amount)
    }

    const handleCoinToggle = () => {
        setCoinToggle(!coinToggle)
    }

    useEffect(() => {
        setTokenAmount('')
    }, [chain, token]);

    return(
        <div className="mt-6">

            <section>
                <p className="mb-2">{token?.currency} to deposit</p>
                <div className=" justify-between flex gap-2 mb-4 flex-wrap">

                    { token?.denominations.map(
                        (amount, index) => (
                            <div onClick={() => handleSetTokenAmount(amount)} key={index} className={`${tokenAmount === amount ? 'text-black bg-[#B5B6BB] border-white' : 'bg-[#46474E] border-[#B2B2B2]'} max-sm:text-[12px] p-2 bg-[#46474E] border border-[#B2B2B2] hover:text-black hover:bg-[#B5B6BB] hover:border-white cursor-pointer transition rounded grow text-center`}>
                                { amountFormatter(amount) } {token?.currency}
                            </div>
                        )
                    ) }

                </div>
            </section>

            <div>
                <div className="flex justify-between mb-2">
                    <p>Token amount</p>
                    <p>
                        <span className="max-sm:hidden">Wallet balance: 0</span>
                        <span className="text-[#E65749]"> Max</span>
                    </p>
                </div>
                <div className="flex bg-[#B5B6BB] text-black h-[3rem] rounded border-2 border-[#B5B6BB]">
                    <input
                        name="tokenAmount"
                        value={ formatPriceWithCommas(tokenAmount) }
                        className="grow w-[2rem] rounded bg-[#37383E] px-4 focus:bg-white text-white"
                        disabled
                    />

                    <span onClick={handleCoinToggle} className="flex items-center w-fit px-2 gap-1.5 cursor-pointer relative">
                        <img
                            src={token?.image}
                            alt={token?.alt}
                            className="w-[1.3rem] rounded-[50%]"
                        />

                        <p className="font-medium">{token?.name}</p>

                        <img
                            src={arrowHead}
                            alt={'arrow head toggle'}
                            className={`ml-1 w-[0.7rem] ${ coinToggle ? 'rotate-180' : ''}`}
                        />

                        { coinToggle &&
                            <div className={`absolute w-full bg-[#B5B6BB] max-h-[10rem] right-0 top-[3.2rem] rounded overflow-y-auto font-medium`}>

                                { chain.tokens?.map(
                                    (coin, index) => (
                                        <div key={index} onClick={() => setToken(coin)} className="flex items-center p-2 gap-1 hover:bg-white cursor-pointer">
                                            <img
                                                src={coin.image}
                                                alt={coin.alt}
                                                className="w-[1.3rem] rounded-[50%]"
                                            />
                                            <p>{coin.name}</p>
                                        </div>
                                    )
                                ) }

                            </div>
                        }
                    </span>
                </div>
            </div>

            <div>
                <p className="mb-2 mt-5">Recipient address</p>
                <input
                    className="rounded bg-[#37383E] border-2 border-[#B5B6BB] h-[3rem] w-full px-4 focus:bg-white text-black"
                    placeholder="Place recipient address here"
                />
            </div>

            <button className="rounded bg-[#B5B6BB] h-[3rem] text-black w-full text-center mt-[5rem] hover:bg-white hover:text-black transition">
                Connect wallet
            </button>
        </div>
    )
}
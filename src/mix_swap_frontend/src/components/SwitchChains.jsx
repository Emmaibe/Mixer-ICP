import {chains} from "../utils/chains.js";
import tick from "../assets/images/tick.png"
import close from "../assets/images/close.png"
import {useContext} from "react";
import {ChainContext} from "../context/ChainContext.jsx";

// eslint-disable-next-line react/prop-types
export const SwitchChains = ({ closeModal }) => {

    const { chain, switchChain } = useContext(ChainContext)

    const handleSwitchChain = (network) => {
        switchChain(network)
        closeModal()
    }

    return (
        <div className="max-sm:text-[12px]">
            <div className="mb-5 flex justify-between items-center text-gray-600 font-bold font-serif">
                <p>Change Network</p>
                <div>
                    <img
                        onClick={ closeModal }
                        src={ close }
                        alt="close modal"
                        className="max-sm:w-[0.8rem] w-[1rem] hover:scale-110 cursor-pointer transition"
                    />
                </div>
            </div>

            { chains().map(
                (chn, index) => (
                    <div key={index} onClick={ () => handleSwitchChain(chn) } className="py-1.5 flex justify-between gap-10 items-center cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div>
                                <img
                                    src={ chn.image }
                                    alt={ chn.alt }
                                    className="max-w-[1.4rem]"
                                />
                            </div>
                            <div>{ chn.name }</div>
                        </div>
                        <div className={`max-sm:w-[1rem] max-sm:h-[1rem] w-[1.3rem] h-[1.3rem] ${ chain.name === chn.name ? 'bg-gray-400' : '' } rounded-full border border-black`}>

                            { chain.name === chn.name ?
                                <img
                                    src={ tick }
                                    alt="checked"
                                    className="max-sm:w-[1.1rem] max-w-[1.4rem] ml-[0px] mt-[-3px]"
                                /> : ''
                            }

                        </div>
                    </div>
                    )
            ) }
        </div>
    )
}
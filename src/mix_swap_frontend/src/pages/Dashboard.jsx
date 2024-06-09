import {Header} from "../components/Header.jsx";
import {TransactionCard} from "../components/TransactionCard.jsx";
import {useContext, useState} from "react";
import {ChainContext} from "../context/ChainContext.jsx";
import {SwitchChains} from "../components/SwitchChains.jsx";
import Modal from "react-modal";
// import { useWeb3Modal } from '@web3modal/wagmi/react'

export const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const { chain } = useContext(ChainContext)

    return(
        <>
            <Header/>

            <button onClick={handleOpenModal} className="fixed top-[6rem] right-2 flex items-center gap-3 rounded-md pr-8 bg-black shadow-md font-bold text-white hover:bg-black hover:text-white transition md:hidden z-20">
                <div className="h-[2rem] rounded-md border-2 bg-white border-black p-1.5 flex">
                    <img
                        src={ chain.image }
                        alt={ chain.alt }
                        className="w-[0.8rem] rounded-[50%]"
                    />
                </div>
                <div className="text-[12px]">{ chain.short }</div>
            </button>

            <div className="min-h-screen bg-[white] flex items-center py-[23vh] px-2 text-sm">
                <TransactionCard/>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1000,
                    },
                    content: {
                        maxWidth: "fit-content",
                        maxHeight: "fit-content",
                        margin: "auto",
                        background: "white",
                        borderRadius: "6px",
                        padding: "1.5rem 0.8rem",
                    },
                }}
            >
                <SwitchChains closeModal={handleCloseModal} />
            </Modal>
        </>
    )
}
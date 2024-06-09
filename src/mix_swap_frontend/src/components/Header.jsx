import logo from "../assets/images/mixerlogo.png"
import hamburger from "../assets/images/menu.png"
import close from "../assets/images/close.png"
import {useContext, useState} from "react";
import {NavContext} from "../context/navContext.js";
import {ChainContext} from "../context/ChainContext.jsx";
import Modal from "react-modal"
import {SwitchChains} from "./SwitchChains.jsx";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const { chain } = useContext(ChainContext)

    const {isMenuOpen, handleIsMenuOpen} = useContext(NavContext)

    return(
        <div className="fixed z-30 shadow-xl">


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
                        padding: "1.5rem 2rem",
                    },
                }}
            >
                <SwitchChains closeModal={handleCloseModal} />
            </Modal>

            <header className="flex justify-between items-center p-4 w-[100vw] bg-white">
                <div>
                    <img
                        src={ logo }
                        alt="logo"
                        className="max-w-[8rem] cursor-pointer"
                    />
                </div>
                <nav className="flex gap-2 max-sm:hidden">
                    <div className="py-3 px-8 border-b-2 border-white hover:border-black font-bold transition cursor-pointer">About</div>
                    <div className="py-3 px-8 border-b-2 border-white hover:border-black font-bold transition cursor-pointer">Docs</div>
                </nav>

                <button onClick={ handleOpenModal } className="flex items-center gap-3 rounded-md pr-8 bg-[#B5B6BB] font-bold text-black hover:bg-black hover:text-white transition max-md:hidden">
                    <div className="h-[3.25rem] rounded-md border-2 bg-white border-black py-3 px-3 flex">
                        <img
                            src={ chain.image }
                            alt={ chain.alt }
                            className="w-[1.5rem] rounded-[50%]"
                        />
                    </div>
                    <div className="">{ chain.short }</div>
                </button>

                <button onClick={handleIsMenuOpen} className="transition sm:hidden">
                    <img
                        src={ !isMenuOpen ? hamburger : close }
                        alt="hamburger"
                        className={`${ !isMenuOpen ? 'max-w-[3rem]' : 'max-w-[2rem] mr-2' } `}
                    />
                </button>
            </header>

            <aside className={`${ isMenuOpen ? 'block' : 'hidden' } transition w-full bg-white z-10`}>
                <div className="p-3 text-center hover:bg-black hover:text-white cursor-pointer">About</div>
                <div className="p-3 text-center hover:bg-black hover:text-white cursor-pointer">Docs</div>
            </aside>
        </div>
    )
}
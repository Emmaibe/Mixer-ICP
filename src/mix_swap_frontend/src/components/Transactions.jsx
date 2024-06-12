import { useState } from "react";
import Modal from "react-modal";

export const Transactions = ({ transactions }) => {

    const [viewTransaction, setViewTransaction] = useState(transactions[0])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (trans) => {
        setIsModalOpen(true);
        setViewTransaction(trans);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="rounded bg-[#46474E] w-full mt-2 flex flex-col text-white h-[8rem] overflow-scroll">
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1000,
                    },
                    content: {
                        maxWidth: "592px",
                        maxHeight: "500px",
                        margin: "auto",
                        background: "white",
                        borderRadius: "8px",
                        padding: "0px",
                    },
                }}
            >
                <div className="p-10 flex flex-col justify-center items-center gap-3">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">Chain Network</p>
                        <p>{viewTransaction?.chain}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="font-bold text-xl">Token Name</p>
                        <p>{viewTransaction?.name}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="font-bold text-xl">Currency</p>
                        <p>{viewTransaction?.currency}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="font-bold text-xl">Amount</p>
                        <p>{viewTransaction?.amount}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="font-bold text-xl">Recipient Address</p>
                        <p>{viewTransaction?.address}</p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <p className="font-bold text-xl">Transaction Time</p>
                        <p>{viewTransaction?.time}</p>
                    </div>
                </div>
            </Modal>

            { transactions.map(
                (transaction, index) => (
                    <div onClick={() => handleOpenModal(transaction)} key={index} className="w-full px-4 py-2 hover:bg-[#37383E] transition flex justify-between items-center text-sm cursor-pointer">
                        <p>{transaction.chain}</p>
                        <p>{transaction.amount} {transaction.currency}</p>
                    </div>
                )
            ) }
        </section>
    );
};
import {DepositCard} from "./DepositCard.jsx";
import {TransferCard} from "./TransferCard.jsx";
import {useState} from "react";
import {WithdrawCard} from "./WithdrawCard.jsx";

export const TransactionCard = () => {
    const [page, setPage] = useState("deposit");

    const handlePage = (pageInput) => {
        setPage(pageInput)
    }

    return(
        <section className="bg-black text-[#B2B2B2] max-w-[24rem] grow shadow-xl rounded-lg mx-auto">
            <div className="pt-4 border-b-2 border-white">
                <nav className="flex w-full font-medium justify-between relative top-[2px]">
                    <div
                        onClick={() => handlePage("deposit")}
                        className={`text-center py-3 grow hover:text-white transition cursor-pointer
                    ${ page === "deposit" ? "border-b-2 border-[black] text-[white]" : "" }`}
                    >
                        Deposit
                    </div>

                    <div
                        onClick={() => handlePage("transfer")}
                        className={`text-center py-3 grow hover:text-white transition cursor-pointer
                    ${ page === "transfer" ? "border-b-2 border-[black] text-[white]" : "" }`}
                    >
                        Transfer
                    </div>

                    <div
                        onClick={() => handlePage("withdraw")}
                        className={`text-center py-3 grow hover:text-white transition cursor-pointer
                    ${ page === "withdraw" ? "border-b-2 border-[black] text-[white]" : "" }`}
                    >
                        Withdraw
                    </div>
                </nav>
            </div>

            <div className="p-4">

                { page === "deposit" ?
                    <DepositCard/> :
                    page === "transfer" ?
                        <TransferCard/> :
                        page === "withdraw" ?
                            <WithdrawCard/> :
                            ""
                }

            </div>
        </section>
    )
}
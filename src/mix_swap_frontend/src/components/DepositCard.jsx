import arrowHead from "../assets/images/arrow.png"
import {useContext, useEffect, useState} from "react";
import {ChainContext} from "../context/ChainContext.jsx";
import {amountFormatter} from "../utils/amountFormatter.js";
import {formatPriceWithCommas} from "../utils/priceformater.js";
import {Transactions} from "./Transactions.jsx";
import { mix_swap_backend } from 'declarations/mix_swap_backend';

export const DepositCard = () => {
    const { chain, token, setToken } = useContext(ChainContext)

    const now = new Date();

    const [coinToggle, setCoinToggle] = useState(false)

    const [tokenAmount, setTokenAmount] = useState('')

    const [transactions, setTransactions] = useState([])

    const [formData, setFormData] = useState({
        chain: `${chain?.name}`,
        name: `${token?.name}`,
        currency: `${token?.currency}`,
        address: '',
        amount: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData);
    }

    const handleSetTokenAmount = (amount) => {
        setTokenAmount(amount)
    }

    const handleCoinToggle = () => {
        setCoinToggle(!coinToggle)
    }

    useEffect(() => {
        setTokenAmount('')
    }, [chain, token]);


    async function fetchData(){
        const trans = await mix_swap_backend.readTransactions();
        setTransactions(trans);
    }

    useEffect(() => {
        fetchData();
    }, [transactions]);

    function createTransaction(e){
        e.preventDefault()

        const data = {
            chain: `${chain.name}`,
            name: `${token.name}`,
            currency: `${token.currency}`
        }

        console.log(data)

        if (
            !formData.name || !formData.amount ||
            !formData.chain || !formData.currency ||
            !formData.address
        ) return alert("Please fill all required transaction fields");

        let newTransaction = {
            chain: data.chain,
            name: data.name,
            currency: data.currency,
            address: formData.address,
            amount: `${formData.amount}`,
            time: now.toString()
        }

        console.log(newTransaction);

        setTransactions(prevTransactions => {
            mix_swap_backend.createTransaction(
                newTransaction.chain,
                newTransaction.name,
                newTransaction.currency,
                newTransaction.address,
                newTransaction.amount,
                newTransaction.time
            )

            return [newTransaction, ...prevTransactions];
        });
    }

    function deleteTransaction(id){
        mix_swap_backend.delete(id);
        setTransactions(prevNotes => {
            return prevNotes.filter((transactionItem, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div className="mt-6">
            <section>
                <p className="mb-2">{token?.currency} to deposit</p>
                <div className=" justify-between flex gap-2 mb-4 flex-wrap">

                    { token?.denominations.map(
                        (amount, index) => (
                            <div onClick={() => {
                                handleSetTokenAmount(amount)
                                setFormData({ ...formData, amount: amount })
                                }} key={index} className={`${tokenAmount === amount ? 'text-black bg-[#B5B6BB] border-white' : 'bg-[#46474E] border-[#B2B2B2]'} max-sm:text-[12px] p-2 bg-[#46474E] border border-[#B2B2B2] hover:text-black hover:bg-[#B5B6BB] hover:border-white cursor-pointer transition rounded grow text-center`}>
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
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="rounded bg-[#37383E] border-2 border-[#B5B6BB] h-[3rem] w-full px-4 focus:bg-white text-black"
                    placeholder="Place recipient address here"
                />
            </div>

            <div>
                <p className="mb-2 mt-10">Transaction History</p>
                <Transactions transactions={transactions} />
            </div>

            <button onClick={createTransaction} className="rounded bg-[#B5B6BB] h-[3rem] text-black w-full text-center mt-[5rem] hover:bg-white hover:text-black transition">
                Deposit
            </button>
        </div>
    )
}
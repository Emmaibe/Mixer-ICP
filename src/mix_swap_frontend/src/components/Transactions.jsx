import setting from "../assets/images/setting (1).png"

export const Transactions = ({ transactions }) => {

    // chain: formData.chain,
    // name: formData.name,
    // currency: formData.currency,
    // address: formData.address,
    // amount: formData.amount
    // time

    return (
        <section className="rounded bg-[#46474E] w-full p-4 mt-10 flex flex-col gap-2 text-white">

            { transactions.map(
                (transaction, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <p>Relayer fee</p>
                        <p>-</p>
                    </div>
                )
            ) }
        </section>
    );
};
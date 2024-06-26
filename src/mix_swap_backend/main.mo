import List "mo:base/List";
import Debug "mo:base/Debug";

actor MixKeeper {

    public type Transaction = {
        chain: Text;
        name: Text;
        currency: Text;
        address: Text;
        amount: Text;
        time: Text;
    };

    stable var transactions: List.List<Transaction> = List.nil<Transaction>();

    public func createTransaction(chainText: Text, nameText: Text, currencyText: Text, addressText: Text, amountText: Text, timeText: Text) {

        let newTransaction: Transaction = {
            chain = chainText;
            name = nameText;
            currency = currencyText;
            address = addressText;
            amount = amountText;
            time = timeText;
        };

        transactions := List.push(newTransaction, transactions);
        Debug.print(debug_show(transactions));
    };

    public query func readTransactions(): async [Transaction] {
        return List.toArray(transactions);
    };

    public func delete(id: Nat) {
        //take drop append
        let listFront = List.take(transactions, id);
        let listBack = List.drop(transactions, id + 1);
        transactions := List.append(listFront, listBack);
    }
}

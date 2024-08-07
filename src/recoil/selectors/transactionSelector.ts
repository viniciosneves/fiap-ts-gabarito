import { selector } from 'recoil';
import { transactionsState } from '../atoms/transactionAtom';
import { ITransaction } from '../../interfaces/ITransaction';

export const transactionSelector = selector<ITransaction[]>({
    key: 'transactionSelector',
    get: ({ get }) => {
        const transactions = get(transactionsState);
        return transactions.map(transaction => ({
            ...transaction,
            date: new Date(transaction.date)
        }));
    }
});
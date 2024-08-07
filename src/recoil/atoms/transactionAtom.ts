import { atom } from 'recoil';
import { IDbTransaction } from '../../interfaces/IDbTransaction';

export const transactionsState = atom<IDbTransaction[]>({
    key: 'transactionsState',
    default: [],
});
import { TradeType } from '../types/TradeType'

export const getOppositeTrade = (trade: TradeType) =>
  trade === 'buy' ? 'sell' : 'buy'

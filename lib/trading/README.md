# @lib/trading

A utility package for trading-related data types and functions. Currently provides basic price candle data structures for financial time series data.

## Usage

```typescript
import { PriceCandle } from '@lib/trading'

const candle: PriceCandle = {
  startTime: 1625097600000, // Milliseconds timestamp
  open: 100.5,
  high: 105.3,
  low: 98.7,
  close: 103.2
}
```

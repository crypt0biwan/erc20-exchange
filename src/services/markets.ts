import { BigNumber } from '@0x/utils';

const ETH_MARKET_PRICE_API_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/ethereum/tickers';

export const getMarketPriceEther = async (): Promise<BigNumber> => {
    const promisePriceEtherResolved = await fetch(ETH_MARKET_PRICE_API_ENDPOINT);

    if (promisePriceEtherResolved.status === 200) {
        const data = await promisePriceEtherResolved.json();

        if (data && data.tickers && data.tickers.length) {
            const item = data.tickers[0];
            const priceTokenUSD = new BigNumber(item.last);
            return priceTokenUSD;
        }
    }

    return Promise.reject('Could not get ETH price');
};

import eth from "../assets/images/ethereum.png"
import bnb from "../assets/images/binance.png"
import avalanche from "../assets/images/avalanche.png"
import poly from "../assets/images/polygon.png"
import arbitrum from "../assets/images/arbitrum.png"
import optimism from "../assets/images/optimism.png"
import gnosis from "../assets/images/gnosis.png"
import xdai from "../assets/images/xDai.png"
import cdai from "../assets/images/cDAI.png"
import dai from "../assets/images/dai.png"
import usdc from "../assets/images/usd-coin.png"
import usdt from "../assets/images/usdt.png"
import wbtc from "../assets/images/wbtc.png"

export const chains = () => {
    return [
         {
            name: 'Ethereum Mainnet',
            image: eth,
            alt: 'ethereum chain logo',
            short: 'Ethereum',
            tokens: [
                {
                    name: 'ETH (Native Token)',
                    image: eth,
                    alt: 'eth logo',
                    currency: 'ETH',
                    denominations: [0.1, 1, 10, 100]
                },
                {
                    name: 'DAI',
                    image: dai,
                    alt: 'dai logo',
                    currency: 'DAI',
                    denominations: [100, 1000, 10000, 100000]
                },
                {
                    name: 'cDAI',
                    image: cdai,
                    alt: 'cdai logo',
                    currency: 'cDAI',
                    denominations: [5000, 50000, 500000, 5000000]
                },
                {
                    name: 'USDC',
                    image: usdc,
                    alt: 'usdc logo',
                    currency: 'USDC',
                    denominations: [100, 1000]
                },
                {
                    name: 'USDT',
                    image: usdt,
                    alt: 'usdt logo',
                    currency: 'USDT',
                    denominations: [100, 1000]
                },
                {
                    name: 'WBTC',
                    image: wbtc,
                    alt: 'wbtc logo',
                    currency: 'WBTC',
                    denominations: [0.1, 1, 10]
                },
            ]
        },
        {
            name: 'Binance Smart Chain',
            image: bnb,
            alt: 'Binance Smart Chain logo',
            short: 'BSC Mainnet',
            tokens: [
                {
                    name: 'BNB (Native Token)',
                    image: bnb,
                    alt: 'bnb logo',
                    currency: 'BNB',
                    denominations: [0.1, 1, 10, 100]
                },
                {
                    name: 'USDT',
                    image: usdt,
                    alt: 'usdt logo',
                    currency: 'USDT',
                    denominations: [100, 1000]
                }
            ]
        },
        {
            name: 'Polygon (Matic) Network',
            image: poly,
            alt: 'polygon logo',
            short: 'Polygon Network',
            tokens: [
                {
                    name: 'MATIC (Native Token)',
                    image: poly,
                    alt: 'matic logo',
                    currency: 'MATIC',
                    denominations: [100, 1000, 10000, 100000]
                },
                {
                    name: 'USDT',
                    image: usdt,
                    alt: 'usdt logo',
                    currency: 'USDT',
                    denominations: [100, 1000]
                }
            ]
        },
        {
            name: 'Optimism',
            image: optimism,
            alt: 'optimism logo',
            short: 'Optimism',
            tokens: [
                {
                    name: 'ETH',
                    image: eth,
                    alt: 'eth logo',
                    currency: 'ETH',
                    denominations: [0.1, 1, 10, 100]
                }
            ]
        },
        {
            name: 'Arbitrum One',
            image: arbitrum,
            alt: 'arbitrum logo',
            short: 'Arbitrum',
            tokens: [
                {
                    name: 'ETH',
                    image: eth,
                    alt: 'eth logo',
                    currency: 'ETH',
                    denominations: [0.1, 1, 10, 100]
                }
            ]
        },
        {
            name: 'Gnosis Chain',
            image: gnosis,
            alt: 'Gnosis logo',
            short: 'Gnosis Chain',
            tokens: [
                {
                    name: 'xDAI',
                    image: xdai,
                    alt: 'xdai logo',
                    currency: 'xDAI',
                    denominations: [100, 1000, 10000, 100000]
                },
            ]
        },
        {
            name: 'Avalanche Mainnet',
            image: avalanche,
            alt: 'avalanche logo',
            short: 'Avalanche',
            tokens: [
                {
                    name: 'AVAX (Native Token)',
                    image: avalanche,
                    alt: 'avax logo',
                    currency: 'AVAX',
                    denominations: [10, 100, 500]
                }
            ]
        },
        {
            name: 'Sepolia Testnet',
            image: optimism,
            alt: 'Sepolia coin',
            short: 'Sepolia',
            tokens: [
                {
                    name: 'ETH (Native Token)',
                    image: eth,
                    alt: 'eth logo',
                    currency: 'ETH',
                    denominations: [0.1, 1, 10, 100]
                },
                {
                    name: 'DAI',
                    image: dai,
                    alt: 'dai logo',
                    currency: 'DAI',
                    denominations: [100, 1000, 10000, 100000]
                },
                {
                    name: 'cDAI',
                    image: cdai,
                    alt: 'cdai logo',
                    currency: 'cDAI',
                    denominations: [5000, 50000, 500000, 5000000]
                },
                {
                    name: 'USDC',
                    image: usdc,
                    alt: 'usdc logo',
                    currency: 'USDC',
                    denominations: [100, 1000]
                },
                {
                    name: 'USDT',
                    image: usdt,
                    alt: 'usdt logo',
                    currency: 'USDT',
                    denominations: [100, 1000]
                },
                {
                    name: 'WBTC',
                    image: wbtc,
                    alt: 'wbtc logo',
                    currency: 'WBTC',
                    denominations: [0.1, 1, 10]
                },
            ]
        }
    ]
}

const FizzBuzz = (num) => {
for (let i = 1; i <= num ; i++) {
    if ( i%3 === 0 && i%5 === 0 ) {
        console.log(`FizzBuzz`);
    }
    else if (i%3 === 0) {
        console.log(`Fizz `);
    }
    else if (i%5 === 0 ) {
        console.log(`Buzz`);
    }
    else{
        console.log(` ${i}`);
        
    }
}
}
FizzBuzz(10)

// +++++++++++ MAX PROFIT ++++++++++++++

const maxProfit= (prices) => {
    let minPrice = prices[0]
    let maxProfit=0;
for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]

    minPrice = Math.min(minPrice, currentPrice)

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit)

    console.log(maxProfit);
    
}
return maxProfit;
}

const prices= [7, 1, 5, 3, 6, 4]
const profit = maxProfit(prices)
console.log(profit);







export const formatPriceWithCommas = (price) => {
    // Check if price is a number
    if (typeof price !== 'number') {
      return price;
    }
  
    // Format price with commas
    return price.toLocaleString();
  };
  
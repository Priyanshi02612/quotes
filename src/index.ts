import motivationalQuotes from './quotes.js';

export const getQuotes = () => {
  const length = motivationalQuotes.length;
  const randomIndex = Math.floor(Math.random() * length);
  const getQuote = motivationalQuotes[randomIndex];
  return getQuote;
};

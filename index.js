import superagent from 'superagent';
import cheerio from 'cheerio';

const a = () => new Promise((r) => {
    setTimeout(() => r('333'),3000)
})

console.log('111');
(async () => {
  console.log(await a());
})
console.log('222');

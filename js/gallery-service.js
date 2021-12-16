'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['trump', 'politics'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['puppies', 'dogs','cute'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['puppy', 'baby','dog'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['cat', 'sleep','cute'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['baby', 'win','victory','cute'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['man', 'big'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['baby', 'eyes','cute'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['man', 'smile'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['baby', 'laugh','funny','cute'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['obama', 'politics','laugh'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['man', 'kiss','basketball'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['man', 'tv'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['de caprio', 'tv','movie'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['matrix', 'tv','movie'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['man', 'tv'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['man', 'tv','movie'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['potin', 'politics','man'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['toy', 'movie','tv'] },
];

function getImgs() {
    return gImgs
}
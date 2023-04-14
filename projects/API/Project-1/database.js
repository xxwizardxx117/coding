const books = [
    {   ISBN:'12345ONE',
        title:'The Alchemist',
        pubdate:'1988-04-01',
        language:'English',
        numPages:197,
        author:[1,2],
        publications:[1],
        category:['fiction','adventure']
    },
    {   ISBN:'12345TWO',
        title:'The Monk Who Sold His Ferrari',
        pubdate:'1998-04-01',
        language:'English',
        numPages:215,
        author:[2],
        publications:[2],
        category:['fiction','adventure']
    },
    {
        ISBN: '12345THREE',
        title: 'The Secret',
        pubdate: '2006-11-28',
        language: 'English',
        numPages: 199,
        author: [3],
        publications: [3,4],
        category: ['Self Help', 'Psychology', 'Spirituality', 'Nonfiction']

    }
]




const author = [
    {   id:1,
        name:'Paulo Coelho',
        books:['12345ONE','SEcondBook']
    },
    {   id:2,
        name:'Robin Sharma',
        books:['12345TWO']
    },
    {
        id: 3,
        name: 'Rhonda Byrne',
        books: ['12345THREE']
    }
]




const publication = [
    {   id:1,
        name:'Penguin',
        books:['12345ONE']
    },
    {   id: 2,
        name: 'Harper Collins',
        books: ['12345TWO']
    },
    {
        id: 3,
        name: 'Atria Books',
        books: ['12345THREE']
    },
    {
        id: 4,
        name: 'Beyond Words',
        books: ['12345THREE']

    }
] 

// we cant export the data set by on its own so 
//and we have to export it as an object
// module.exports = {books, author, publication};
module.exports = {books, author, publication};

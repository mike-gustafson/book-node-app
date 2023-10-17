const bookSeries_setOne = {
    book1: {
        name: "title one",
        author: "a author",
        coverImage: "url of image",
        pageCount: 321,
    },
    book2: {
        name: "title two",
        author: "b author",
        coverImage: "url of image",
        pageCount: 411,
    },
    book3: {
        name: "title three",
        author: "c author",
        coverImage: "url of image",
        pageCount: 621,
    },
};

const bookSeries_setTwo = {
    book1: {
        name: "title one",
        author: "a author",
        coverImage: "url of image",
        pageCount: 321,
    },
    book2: {
        name: "title two",
        author: "b author",
        coverImage: "url of image",
        pageCount: 411,
    },
    book3: {
        name: "title three",
        author: "c author",
        coverImage: "url of image",
        pageCount: 621,
    },
    book4: {
        name: "title four",
        author: "d author",
        coverImage: "url of image",
        pageCount: 502,
    },
    book5: {
        name: "title five",
        author: "e author",
        coverImage: "url of image",
        pageCount: 555,
    },
};


function findAuthorsByLetter(letter) {
    const bookSeriesArray = [bookSeries_setOne, bookSeries_setTwo];
    const matchingAuthors = [];

    for (const series of bookSeriesArray) {
        for (const bookKey in series) {
            const authorName = series[bookKey].author;

            if (authorName.charAt(0).toLowerCase() === letter.toLowerCase()) {
                matchingAuthors.push(authorName);
            }
        }
    }

    return matchingAuthors;
}

// function findAuthorsByLetter(letter) {
//     // Combine both book series into an array
//     const allBooks = [...Object.values(bookSeries_setOne), ...Object.values(bookSeries_setTwo)];
//     const matchingAuthors = [];

//     for (let i = 0; i < allBooks.length; i++) {
//         const authorName = allBooks[i].author;

//         if (authorName.charAt(0).toLowerCase() === letter.toLowerCase()) {
//             matchingAuthors.push(authorName);
//         }
//     }

//     return matchingAuthors;
// }

// Example usage:
const letter = "s"; // Replace with the desired letter
const authors = findAuthorsByLetter(letter);

if (authors.length > 0) {
    console.log(`Authors whose names start with the letter "${letter}":`);
    console.log(authors);
} else {
    console.log(`No authors found whose names start with the letter "${letter}".`);
}


function findAuthorsByLetter2(letter) {
    const bookSeriesArray = [bookSeries_setOne, bookSeries_setTwo];
    const matchingAuthors = [];

    for (const series of bookSeriesArray) {
        const authorName = series[bookKey].author;
    }
}

module.exports = {
    bookSeries_setOne,
    bookSeries_setTwo,
    findAuthorsByLetter
}
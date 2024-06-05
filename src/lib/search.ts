import FlexSearch from 'flexsearch';

export type Product = {
    Name: string;
    Publisher: string;
    Description: string;
    LoginRequired: boolean;
    Releases: {
        Version: string;
        DownloadUrl: string;
        ReleaseDate: string;
        ReleaseNotes: string;
        Size: string;
        Checksums: {
            Algorithm: string;
            Checksum: string;
        }[];
        ChecksumSource: string;
    }[];
}

let productIndex: FlexSearch.Index
let products: Product[]

export function createProductIndex(data: Product[]) {
    // create the posts index
    productIndex = new FlexSearch.Index({ tokenize: 'full' })

    data.forEach((post, i) => {
        // index the title and content together
        const item = `${post.Name} ${post.Publisher}`
        // add the item to the index 👍️
        productIndex.add(i, item)
    })

    products = data
}

export function searchProductIndex(searchTerm: string) {
    // escape special regex characters
    const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // return matching post indexes 💪
    const results = productIndex.search(match)

    return results
        // filter the posts based on the matched index
        .map((index) => products[index as number])
        // you can do whatever you want at this point 👌  
}

function getMatches(text: string, searchTerm: string, limit = 1) {
    // create dynamic regex 😎
    const regex = new RegExp(searchTerm, 'gi')
    // word indexes
    const indexes = []
    // matches count
    let matches = 0
    // current match in loop
    let match

    while ((match = regex.exec(text)) !== null && matches < limit) {
        // push that shit
        indexes.push(match.index)
        // increment matches
        matches++
    }

    // take the word index...
    return indexes.map((index) => {
        // go back 20 characters
        const start = index - 20
        // go forward 80 characters
        const end = index + 80
        // yoink the text
        const excerpt = text.substring(start, end).trim()
        // return excerpt 🤝
        return `...${replaceTextWithMarker(excerpt, searchTerm)}...`
    })
}

function replaceTextWithMarker(text: string, match: string) {
    // create dynamic regex 😎
    const regex = new RegExp(match, 'gi')
    // preserves the text casing 🤙
    return text.replaceAll(regex, (match) => `<mark>${match}</mark>`)
}

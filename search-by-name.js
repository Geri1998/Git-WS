// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    console.log('keyword:', keyword)
    // Tip: string.prototype.includes()
    const result = catNames.filter((catName) => {
        return catName.includes(keyword)
    }).join('\n')
    console.log(result)

}

main(process.argv[2])


const capatilise = str => {
    return str.toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ")
}
console.log(capatilise("my nAME is asUR"));

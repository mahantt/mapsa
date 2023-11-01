function mapstrtosymbol(str) {
    let mapsymbol= new Map([
        ["U","▲"],
        ["L","◄"],
        ["R","►"],
        ["D","▼"],
    ]);
    let result=""
    for (let char of str){
        char = char.toUpperCase()
        result+= mapsymbol.get(char);
    }
    return result
}

console.log(mapstrtosymbol("LLDDRRD"));
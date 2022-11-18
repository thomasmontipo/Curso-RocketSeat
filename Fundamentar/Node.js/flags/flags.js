function pegarFlags(flag) {
    const index = process.argv.indexOf(flag) + 1 //Pega a posição da flag + 1
    return process.argv[index]
}

module.export = pegarFlags;
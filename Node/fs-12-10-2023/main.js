const fs = require("fs").promises; //utilizando .promises para sempre esperar que o comando desejado ser executado
const path = require("path");

/*
fs = file sistem
*fs.readDir = le o diretorio escolhido, ou seja, me diz quais arquivos e/ou diretorios tem naquele diretorio 
*passado como argumento da função, retornando um array
*/

//path.resolve(__dirname) retorna qual o diretorio ATUAL, ou seja, o diretorio onde o arquivo que executa a função está
//path.resolve(__filename) retorna qual o arquivo ATUAL, ou seja, onde está sendo executada a função

async function readDir(rootDir) {
  rootDir ? rootDir : (rootDir = path.resolve(__dirname));
  let files = await fs.readdir(rootDir);
  // console.log(`\n*** Diretório lido -> ${rootDir} *** \n`)
  walk(files, rootDir);
}

async function walk(files, filesDir) {
  //   console.log(`\n${filesDir} Files/Directories Length-> ${files.length}\n`);
  for (let x in files) {
    let filesPathDir = path.resolve(filesDir, files[x]);
    let stats = await fs.stat(filesPathDir);
    let isDirectory = stats.isDirectory();

    if (/\.git/g.test(filesPathDir)) {
      continue;
    }

    if (!isDirectory) {
        console.log(`File -> ${files[x]} ${stats.isDirectory()}\n`);
    }
    if (isDirectory) {
      console.log(`Directory -> ${files[x]} ${stats.isDirectory()}\n`);
      readDir(filesPathDir, files[x]);
    }
  }
}

readDir("D:");

const fs = require("fs").promises;
const path = require("path");
const filePath = path.resolve(__dirname, "teste.txt");

/*
 * flag : w -> reescreve o arquivo
 * flag : a -> faz um "append" no conteúdo do arquivo
*/

fs.writeFile(filePath, "Test", { flag: "w" });


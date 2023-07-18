const questions = [
    "Qual a atividade de hoje?",
    "Qual o horario da atividade?",
    "Foi uma boa atividade?"
]

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n")
}

ask()
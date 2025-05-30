const questions = [
    // 🔷 CONJUNTOS
    {question: "O conjunto dos números naturais menores que 5 é:", answers: ["{0,1,2,3,4}", "{1,2,3,4,5}", "{2,3,4,5}", "{1,3,5}"], correct: 0},
    {question: "O conjunto A = {x | x é número par menor que 10} é:", answers: ["{2,4,6,8}", "{1,3,5,7,9}", "{0,2,4,6}", "{2,4,6,8,10}"], correct: 0},
    {question: "A união dos conjuntos A={1,2} e B={2,3} é:", answers: ["{1,2,3}", "{2}", "{1,3}", "{1,2}"], correct: 0},
    {question: "A interseção dos conjuntos A={1,2,3} e B={3,4,5} é:", answers: ["{3}", "{1,2}", "{4,5}", "{1,2,3,4,5}"], correct: 0},
    {question: "O conjunto vazio é representado por:", answers: ["∅", "{0}", "{1}", "{}"], correct: 0},
    {question: "O conjunto dos números pares é:", answers: ["Infinito", "Finito", "Vazio", "Unitário"], correct: 0},
    {question: "Se A={1,2,3} então o número de subconjuntos é:", answers: ["8", "3", "6", "9"], correct: 0},
    {question: "O conjunto dos divisores de 6 é:", answers: ["{1,2,3,6}", "{2,3,5}", "{6,7,8}", "{0,1,2}"], correct: 0},
    {question: "A diferença A-B, com A={1,2,3} e B={2,3,4} é:", answers: ["{1}", "{2,3}", "{4}", "{1,2,3,4}"], correct: 0},
    {question: "O conjunto universo contém:", answers: ["Todos os elementos em estudo", "O conjunto vazio", "Só os pares", "Só os ímpares"], correct: 0},
    // ... +15 questões de conjuntos (continua abaixo)

    // 🔷 RELAÇÕES
    {question: "Se R={(x,y)|x>y} em N, então (3,2) pertence?", answers: ["Sim", "Não", "Depende", "Nenhuma"], correct: 0},
    {question: "Na relação R={(x,y)|x é múltiplo de y}, (6,3) pertence?", answers: ["Sim", "Não", "Depende", "Nenhuma"], correct: 0},
    {question: "Uma relação é simétrica quando:", answers: ["Se (a,b) está, (b,a) também está", "Se (a,b) não está", "Quando A=B", "Se é vazio"], correct: 0},
    {question: "A relação “é irmão de” é:", answers: ["Simétrica", "Antissimétrica", "Reflexiva", "Transitiva"], correct: 0},
    {question: "A relação “é maior que” é:", answers: ["Antissimétrica", "Reflexiva", "Simétrica", "Total"], correct: 0},
    {question: "A relação “é igual a” é:", answers: ["Reflexiva, simétrica e transitiva", "Apenas simétrica", "Apenas reflexiva", "Nenhuma"], correct: 0},
    {question: "Na relação R={(x,y)|x+y=10}, (3,7) pertence?", answers: ["Sim", "Não", "Depende", "Não se aplica"], correct: 0},
    {question: "A relação “ser pai de” é:", answers: ["Antissimétrica", "Simétrica", "Reflexiva", "Transitiva"], correct: 0},
    {question: "Reflexiva significa:", answers: ["(x,x) pertence para todo x", "Nunca tem (x,x)", "(x,y) está, então (y,x) também", "É sobrejetiva"], correct: 0},
    {question: "A relação “é igual a” é:", answers: ["De equivalência", "De ordem", "Total", "Parcial"], correct: 0},
    // ... +15 questões de relações (continua abaixo)

    // 🔷 FUNÇÕES
    {question: "A função f(x)=2x+3 é uma função:", answers: ["Afim", "Quadrática", "Constante", "Exponencial"], correct: 0},
    {question: "Se f(x)=x², então f(3) é:", answers: ["9", "6", "3", "12"], correct: 0},
    {question: "Uma função constante é:", answers: ["Quando f(x)=k", "f(x)=x", "f(x)=x²", "Não tem domínio"], correct: 0},
    {question: "Se f(x)=-3x+6, então f(2) é:", answers: ["0", "6", "-6", "3"], correct: 0},
    {question: "A função f(x)=x² é classificada como:", answers: ["Quadrática", "Afim", "Constante", "Linear"], correct: 0},
    {question: "A função f(x)=5 é uma função:", answers: ["Constante", "Afim", "Quadrática", "Exponencial"], correct: 0},
    {question: "Se f(x)=x+5, então f(10) é:", answers: ["15", "10", "5", "20"], correct: 0},
    {question: "A função y=2x representa:", answers: ["Uma reta passando pela origem", "Uma parábola", "Uma curva exponencial", "Uma hipérbole"], correct: 0},
    {question: "Se f(x)=3x-2, então f(4) é:", answers: ["10", "12", "9", "5"], correct: 0},
    {question: "Uma função é bijetora se ela for:", answers: ["Injetora e sobrejetora", "Só injetora", "Só sobrejetora", "Nem uma nem outra"], correct: 0},
    // ... +15 questões de funções

    // 🔷 SEQUÊNCIAS NUMÉRICAS
    {question: "A sequência 2,4,6,8,... é uma progressão:", answers: ["Aritmética", "Geométrica", "Harmônica", "Fibonacci"], correct: 0},
    {question: "Na sequência 1,3,5,7,... a razão é:", answers: ["2", "1", "3", "4"], correct: 0},
    {question: "A sequência 3,6,12,24,... é uma progressão:", answers: ["Geométrica", "Aritmética", "Fibonacci", "Logarítmica"], correct: 0},
    {question: "O 5º termo da sequência 2,4,6,8,... é:", answers: ["10", "12", "8", "6"], correct: 0},
    {question: "A sequência de Fibonacci começa com:", answers: ["0,1,1,2,3", "1,2,3,4", "2,4,6,8", "1,3,5,7"], correct: 0},
    {question: "Em uma P.A de razão 3, o 4º termo é:", answers: ["12", "9", "6", "15"], correct: 0},
    {question: "O termo geral de uma P.A é dado por:", answers: ["an = a1 + (n-1)r", "an = a1*r", "an = a1^n", "an = n + r"], correct: 0},
    {question: "O termo geral de uma P.G é dado por:", answers: ["an = a1*r^(n-1)", "an = a1 + (n-1)r", "an = r^n", "an = n*r"], correct: 0},
    {question: "O 3º termo da P.G 2,4,8,... é:", answers: ["8", "6", "4", "2"], correct: 0},
    {question: "Em uma sequência 5,10,20,40,... a razão é:", answers: ["2", "5", "10", "20"], correct: 0},
    // ... +15 questões de sequências
];

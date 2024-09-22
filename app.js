let charada = ['e', 'i', 'g', 'D', ' ', 's', 'u', 'o', 'a', 's', 'n', 'm', ' ', 'a', 'v', 'i'];

let segredoResolvido = '';

let posicoes = [3, 8, 14, 15, 4, 5, 0, 6, 4, 8, 11, 15, 2,13,7];

for (let i of posicoes) {
    segredoResolvido += charada[i];
}

console.log(segredoResolvido);

// Operação ternária
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const ptsUsuario = 1000;
const nivelUsuario = ptsUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const padrao = corUsuario || 'Preta';


console.log(nivelUsuario)
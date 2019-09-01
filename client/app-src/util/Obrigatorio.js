export function Obrigatorio(parametro) {
  throw new Error(`${parametro} é um parametro obrigatorio`);
}

export function Debounce(fn, milisegundos) {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), milisegundos);
  };
}

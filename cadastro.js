function toggleEndereco(valor) {
  const container = document.getElementById('endereco-container');
  if (valor === 'gerador') {
    container.classList.remove('endereco-hidden');
  } else {
    container.classList.add('endereco-hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const selectTipo = document.getElementById('tipo');
  toggleEndereco(selectTipo.value);
});

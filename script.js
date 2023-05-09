const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio padrão do formulário
  const novoItem = document.querySelector('#novoItem').value;
  adicionarItem(novoItem);
  document.querySelector('form').reset(); // limpa o campo de texto do formulário
});

function adicionarItem(texto) {
    const lista = document.querySelector('#lista');
    const novoItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'concluido');
    checkbox.setAttribute('value', texto);
    const span = document.createElement('span');
    span.textContent = texto;
    novoItem.appendChild(checkbox);
    novoItem.appendChild(span);
    lista.appendChild(novoItem);
  }
  

function removerConcluidos() {
    const itens = document.querySelectorAll('li');
    for (let i = 0; i < itens.length; i++) {
      const item = itens[i];
      if (item.querySelector('input[type="checkbox"]').checked) {
        item.remove();
      }
    }
  }

const botaoRemover = document.querySelector('#removerConcluidos');
botaoRemover.addEventListener('click', function(event) {
  event.preventDefault();
  removerConcluidos();
});

  
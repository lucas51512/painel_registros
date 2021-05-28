const controller = new RegistroController();
let adicionar = document
    .getElementById('adicionar')
    .addEventListener('submit', controller.adiciona.bind(controller));

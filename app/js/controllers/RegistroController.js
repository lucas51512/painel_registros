class RegistroController {
    constructor() {
        this._filiais = new Filiais();
        this._inputNumero = document.querySelector('#numero-filial');
        this._inputCidade = document.querySelector('#cidade-filial');
        this._inputEstado = document.querySelector('#estado-filial');
        this._inputStatus = document.querySelector('#status-filial');
    }
    adiciona(event) {
        event.preventDefault();
        const filial = new Filial(parseInt(this._inputNumero.value), this._inputCidade.value, this._inputEstado.options[this._inputEstado.selectedIndex].text, this._inputStatus.options[this._inputStatus.selectedIndex].text);
        this._filiais.adiciona(filial);
        this._filiais.paraArray().forEach(filial => {
            console.log(filial.numero);
            console.log(filial.cidade);
            console.log(filial.estado);
            console.log(filial.status);
        });
    }
}

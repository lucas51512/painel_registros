class RegistroController {
    constructor() {
        this._filiais = new Filiais();
        this._filiaisView = new FiliaisView('#tabela-filiais-principal');
        this._inputNumero = document.querySelector('#numero-filial');
        this._inputCidade = document.querySelector('#cidade-filial');
        this._inputEstado = document.querySelector('#estado-filial');
        this._inputStatus = document.querySelector('#status-filial');
        this._filiaisView.update(this._filiais);
    }
    adiciona(event) {
        event.preventDefault();
        const filial = new Filial(parseInt(this._inputNumero.value), this._inputCidade.value, this._inputEstado.options[this._inputEstado.selectedIndex].text, this._inputStatus.options[this._inputStatus.selectedIndex].text);
        this._filiais.adiciona(filial);
        this._filiaisView.update(this._filiais);
    }
}

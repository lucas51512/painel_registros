
class RegistroController{
    private _inputNumero: HTMLInputElement;
    private _inputCidade: HTMLInputElement;
    private _inputEstado: HTMLFormElement;
    private _inputStatus: HTMLFormElement;
    private _filiais = new Filiais();
    private _filiaisView = new FiliaisView('#tabela-filiais-principal');

    constructor(){

        this._inputNumero = <HTMLInputElement>document.querySelector('#numero-filial'); 
        this._inputCidade = <HTMLInputElement>document.querySelector('#cidade-filial');
        this._inputEstado = <HTMLFormElement>document.querySelector('#estado-filial');
        this._inputStatus = <HTMLFormElement>document.querySelector('#status-filial');
        this._filiaisView.update(this._filiais);
    }

    adiciona(event: Event) {

        event.preventDefault();


        const filial = new Filial(
            parseInt(this._inputNumero.value),
            this._inputCidade.value,
            this._inputEstado.options[this._inputEstado.selectedIndex].text,
            this._inputStatus.options[this._inputStatus.selectedIndex].text
        );
        
        this._filiais.adiciona(filial);

        this._filiaisView.update(this._filiais);
        
    }


}
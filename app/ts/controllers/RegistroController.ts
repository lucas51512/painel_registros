
class RegistroController{
    private _inputNumero: HTMLInputElement;
    private _inputCidade: HTMLInputElement;
    private _inputEstado: HTMLFormElement;
    private _inputStatus: HTMLFormElement;
    private _filiais = new Filiais();

    constructor(){

        this._inputNumero = <HTMLInputElement>document.querySelector('#numero-filial'); 
        this._inputCidade = <HTMLInputElement>document.querySelector('#cidade-filial');
        this._inputEstado = <HTMLFormElement>document.querySelector('#estado-filial');
        this._inputStatus = <HTMLFormElement>document.querySelector('#status-filial');
        
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

        this._filiais.paraArray().forEach(filial => {
            console.log(filial.numero);
            console.log(filial.cidade);
            console.log(filial.estado);
            console.log(filial.status);
            
            
            
            
        })
        
    }


}
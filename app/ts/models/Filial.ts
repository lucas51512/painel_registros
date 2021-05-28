class Filial {

    constructor(private _numero: number, private _cidade: string, private _estado: string, private _status: string){}

    get numero(){
        return this._numero;
    }

    get cidade(){
        return this._cidade;
    }

    get estado(){
        return this._estado;
    }

    get status(){
        return this._status;
    }

}
class Filial {
    constructor(_numero, _cidade, _estado, _status) {
        this._numero = _numero;
        this._cidade = _cidade;
        this._estado = _estado;
        this._status = _status;
    }
    get numero() {
        return this._numero;
    }
    get cidade() {
        return this._cidade;
    }
    get estado() {
        return this._estado;
    }
    get status() {
        return this._status;
    }
}

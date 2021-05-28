class Filiais {
    constructor() {
        this._filiais = [];
    }
    adiciona(filial) {
        this._filiais.push(filial);
    }
    paraArray() {
        return this._filiais;
    }
}

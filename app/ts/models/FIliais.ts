class Filiais {
    
    private _filiais: Filial[] = [];

    adiciona(filial: Filial): void {
        this._filiais.push(filial);
    }

    paraArray(): Filial[] {
        return this._filiais;
    }
}
class FiliaisView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
        
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">N. Filiais</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Status</th>
                    <th scope="col">Mais Informações</th>
                    <th scope="col">Excluir</th>
                </tr>
            </thead>
            <tbody>
                ${model.paraArray().map(filial => {
            return `
                    <tr>
                        <td>${filial.numero}</td>
                        <td>${filial.cidade}</td>
                        <td>${filial.estado}</td>
                        <td>${filial.status}</td>
                        <td><button class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">Ver
                            Mais</button></td>
                        <td><button class="btn btn-outline-danger">Excluir</button></td>

                    </tr>
                    `;
        }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>


        `;
    }
}

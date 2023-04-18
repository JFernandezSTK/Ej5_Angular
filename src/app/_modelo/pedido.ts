export class pedido{
    private _IdPedido: number
    private _IdCliente: number
    private _NombreCliente: string
    private _TotalProductos: number
    private _Importe: number


    constructor(idPedido:number,idCliente:number,NombreCliente:string,TotalProductos:number,Importe:number){
        this._IdPedido=idPedido
        this._IdCliente=idCliente
        this._NombreCliente=NombreCliente
        this._TotalProductos=TotalProductos
        this._Importe=Importe

    }

    public get IdPedido(): number {
        return this._IdPedido
    }
    public set IdPedido(value: number) {
        this._IdPedido = value
    }

    public get IdCliente(): number {
        return this._IdCliente
    }
    public set IdCliente(value: number) {
        this._IdCliente = value
    }

    public get NombreCliente(): string {
        return this._NombreCliente
    }
    public set NombreCliente(value: string) {
        this._NombreCliente = value
    }

    public get TotalProductos(): number {
        return this._TotalProductos
    }
    public set TotalProductos(value: number) {
        this._TotalProductos = value
    }

    public get Importe(): number {
        return this._Importe
    }
    public set Importe(value: number) {
        this._Importe = value
    }
}
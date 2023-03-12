import './ListaSuspensa.css'

interface ListaSuspensaProps{
    itens: string[]
    aoAlterado: (valor: string) => void
    label:string
    valor:string
    obrigatorio?: boolean
}

const ListaSuspensa = ({itens, label, aoAlterado, valor, obrigatorio}:ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa
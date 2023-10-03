
interface CajaProps {
    nombre: string;
}

const Caja:React.FC<CajaProps> = ({nombre}) => {
    return (
        <div className="bg-slate-600 p-4">
            <h1>CAJA</h1>
            <h1> {nombre}</h1>
        </div>
    )
}

export default Caja;
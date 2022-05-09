import { Producto } from "../models/interfaces";

const ItemProducto = ({id, nombre, descripcion, precio}: Producto): JSX.Element => {

    return <tr>
        <td>
            <h5>{id}</h5>
        </td>
        <td>
            <h5>{nombre ? nombre : 'nombre no definido'}</h5>
        </td>
        <td>
            <h5>{descripcion}</h5>
        </td>
        <td>
            <h5>{precio ? "$" + precio: 'no definido'}</h5>
        </td>
    </tr>
}

export default ItemProducto;
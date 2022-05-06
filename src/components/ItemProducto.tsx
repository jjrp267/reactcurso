import Producto from "../models/interfaces";

const ItemProducto = ({id, nombre, descripcion, precio}: Producto) => {

    return <tr>
        <td>
            <h5>{id}</h5>
        </td>
        <td>
            <h5>{nombre}</h5>
        </td>
        <td>
            <h5>{descripcion}</h5>
        </td>
        <td>
            <h5>{"$" + precio}</h5>
        </td>
    </tr>
}

export default ItemProducto;
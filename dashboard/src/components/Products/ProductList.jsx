export default function ProductList(props){
    return(
        <>
            <tr>
                <td>{props.products.brand}</td>
                <td>{props.products.price}</td>
                <td>{props.products.description}</td>
            </tr>
        </>
    )
}

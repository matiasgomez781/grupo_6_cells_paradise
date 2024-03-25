export default function ProductList(props){
    return(
        <>
            <tr>
                <td>{props.products.name}</td>
                <td>{props.products.brand.name}</td>
                <td>{props.products.price}</td>
                <td>{props.products.description}</td>
            </tr>
        </>
    )
}

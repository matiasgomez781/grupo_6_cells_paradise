export default function UserList(props){
    return(
        <>
            <tr>
                <td>{props.users.first_name}</td>
                <td>{props.users.last_name}</td>
                <td>{props.users.email}</td>
            </tr>
        </>
    )
}

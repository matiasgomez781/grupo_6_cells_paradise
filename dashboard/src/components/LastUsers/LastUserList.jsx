export default function LastUserList(props) {
    return (
      <>
        <tr>
          <td>{props.user.first_name}</td>
          <td>{props.user.last_name}</td>
          <td>{props.user.email}</td>
        </tr>
      </>
    );
  }
  
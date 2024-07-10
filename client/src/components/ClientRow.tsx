import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT, GET_CLIENTS } from "../queries/clients";

export interface clientInformation {
  name: string;
  phone: string;
  email: string;
  id: string;
}

export default function ClientRow({
  name,
  phone,
  email,
  id,
}: clientInformation) {
  const [deleteClient] = useMutation(DELETE_CLIENT);

  const handleClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await deleteClient({
      variables: { id: id },
      refetchQueries: [{ query: GET_CLIENTS }],
      // update(cache, { data: { deleteClient } }) {
      //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
      //   cache.writeQuery({
      //     query: GET_CLIENTS,
      //     data: {
      //       clients: clients.filter((client) => client.id !== deleteClient.id),
      //     },
      //   });
      // },
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <button className=" btn btn-danger" onClick={handleClick}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

import { useQuery } from "@apollo/client";
import ClientRow, { clientInformation } from "./ClientRow";
import { Key } from "react";
import { GET_CLIENTS } from "../queries/clients";
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, data, error } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <p> WE HAVE SOME ERROR AT THIS TIME ...</p>;
  return (
    <>
      {!loading && !error && (
        <table className=" table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone </th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client: clientInformation, index: Key) => (
              <ClientRow
                key={index}
                name={client.name}
                phone={client.phone}
                email={client.email}
                id={client.id}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

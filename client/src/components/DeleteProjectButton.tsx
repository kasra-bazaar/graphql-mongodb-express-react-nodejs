import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../queries/projects";
import { GET_PROJECTS } from "../queries/projects";
import { useMutation } from "@apollo/client";

export default function DeleteProjectButton({
  projectId,
}: {
  projectId: string;
}) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const deleteHandler = async () => {
    await deleteProject({
      variables: { id: projectId },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_PROJECTS }],
    });
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteHandler}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}

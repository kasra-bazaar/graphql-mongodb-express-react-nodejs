import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projects";
import { UPDATE_PROJECT } from "../queries/projects";

type ProjectTypes = {
  Projectname: string;
  Projectstatus: string;
  Projectdescription: string;
  Porjectid: string;
};

export default function EditProjectForm({
  Projectname,
  Projectstatus,
  Projectdescription,
  Porjectid,
}: ProjectTypes) {
  const [name, setName] = useState(Projectname);
  const [description, setDescription] = useState(Projectdescription);
  const [status, setStatus] = useState(() => {
    switch (Projectstatus) {
      case "Not Started":
        return "new";
      case "In Progress":
        return "progress";
      case "Completed":
        return "completed";
      default:
        throw new Error(`Unknown status: ${Projectstatus}`);
    }
  });

  const [updateProject] = useMutation(UPDATE_PROJECT);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill out all fields");
    }

    updateProject({
      variables: { id: Porjectid, name, description, status },
      refetchQueries: [{ query: GET_PROJECT, variables: { id: Porjectid } }],
    });
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

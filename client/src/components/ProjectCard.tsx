export type projectTypes = {
  name: string;
  id: string;
  status: string;
};

export default function ProjectCard({ name, id, status }: projectTypes) {
  return (
    <div className=" col-md-4">
      <div className=" card mb-3">
        <div className=" card-body">
          {" "}
          <div className="d-flex justify-content-between align-items-center">
            <h5 className=" card-title">{name}</h5>
            <a className=" btn btn-light" href={`/projects/${id}`}>View</a>
          </div>
          <p className="small">
            Status : <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

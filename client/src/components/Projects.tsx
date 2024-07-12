import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projects";
import Spinner from "./Spinner";
import ProjectCard, { projectTypes } from "./ProjectCard";

export default function Projects() {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>SOMTHING WENT WRONG !</p>;
  return (
    <>
      {data.projects.length === 0 ? (
        <p> THERE IS NO PROJECTS</p>
      ) : (
        <div className=" row mt-5">
          {data.projects.map((project: projectTypes) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              status={project.status}
            />
          ))}
        </div>
      )}
    </>
  );
}

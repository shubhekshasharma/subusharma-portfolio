import ProjectTile from "./ProjectTile"
import { PROJECTS_TILES_DETAILS } from "../data/projects"

export function Projects() {
    return (
          <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

             {PROJECTS_TILES_DETAILS.map((project) =>
                project ? (
                    <div key={project.id}>
                        <ProjectTile
                            id={project.id}
                            name={project.name} 
                            detail={project.detail} 
                            href={project.href}
                            thumbnail={project.thumbnail}
                        />
                    </div>
                ) : null
            )}
            </div>
        </section>
    )
}
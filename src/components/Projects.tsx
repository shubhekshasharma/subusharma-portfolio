import ProjectTile from "./ProjectTile"


const PROJECTS_TILES_DETAILS = [
    {
        id: "selective-design-system", 
        name: "Selective Design System", 
        detail: "The Design System for Selective Insurance", 
        href: "/projects/selective-design-system",
        thumbnail: "/project-thumbs/selective.png", 

    }, 
     {
        id: "selective-design-system", 
        name: "Selective Design System", 
        detail: "The Design System for Selective Insurance", 
        href: "/projects/selective-design-system",
        thumbnail: "/project-thumbs/selective.png", 

    }, 
     {
        id: "selective-design-system", 
        name: "Selective Design System", 
        detail: "The Design System for Selective Insurance", 
        href: "/projects/selective-design-system",
        thumbnail: "/project-thumbs/selective.png", 

    }
]

export function Projects() {
    return (
          <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

             {PROJECTS_TILES_DETAILS.map((project) =>
                project ? (
                    <ProjectTile
                        id={project.id}
                        name={project.name} 
                        detail={project.detail} 
                        href={project.href}
                        thumbnail={project.thumbnail}
                    />
                ) : null
            )}
            </div>
        </section>
    )
}
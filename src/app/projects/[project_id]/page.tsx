import React from "react";
import BeautyocracyMainPage from "@/components/projects/beautyocracy/MainPage"
import { ProjectNotFound } from "@/components/ProjectNotFound"; 

const PROJECT_TO_COMPONENT_MAP: { [key: string]: React.FC } = {
    beautyocracy: BeautyocracyMainPage,
};

interface ProjectPageProps {
    params: {
        project_id: string;
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await params
    const ProjectComponent = PROJECT_TO_COMPONENT_MAP[project.project_id];

    console.log("Rendering project page for:", project.project_id);

    if (!ProjectComponent) {
        return (
        <div>
            <ProjectNotFound/>
        </div>
        )
    }

    return <ProjectComponent />;
}

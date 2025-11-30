import React from "react";

export const ProjectNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-zinc-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Project Not Found! </h2>
      <p className="text-zinc-600 mb-6">
        The project you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-zinc-300 text-zinc-800 px-5 py-2 rounded-lg shadow hover:bg-zinc-400 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
};

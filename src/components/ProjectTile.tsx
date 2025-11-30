interface ProjectTileProps {
    id: string;
    name: string;
    detail: string;
    href: string;
    thumbnail: string;
}

export default function ProjectTile({ id, name, detail, href, thumbnail }: ProjectTileProps) {

    return (
        <a
            href={href}
            className="group border-zinc-200 bg-zinc-50 overflow-hidden hover:bg-zinc-100 transition"
        >
            <img
                src={thumbnail}
                alt={name}
                className="w-full object-cover border-b border-zinc-200"
            />
            <div className="p-4 space-y-1">
                <h3 className="font-semibold text-zinc-900 group-hover:underline">
                {name}
                </h3>
                <p className="text-sm text-zinc-600 leading-snug">
                {detail}
                </p>
            </div>
        </a>
    )

}
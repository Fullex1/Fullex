import Image from "next/image";
import Link from "next/link";
import styles from "../portfolio.module.css";
import AnimateIn from "@/app/AnimateIn";

// Client component for animation and interactivity
function ProjectDetailsClient({ project }: { project: any }) {
  if (!project) {
    return <div className="text-center mt-10">Project not found.</div>;
  }

  return (
    <AnimateIn className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#0a192f]">
      <div className="w-full max-w-3xl bg-[#021122] rounded-xl shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          {project.title}
        </h1>
        <p className="text-lg text-gray-300 mb-6 text-center">{project.description}</p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {project.images && project.images.length > 0 ? (
            project.images.map((img: string, idx: number) => (
              <div key={idx} className="relative w-64 h-40 md:w-80 md:h-52 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                <Image
                  src={img}
                  alt={`Project image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
            ))
          ) : (
            <div className="text-gray-400">No images available.</div>
          )}
        </div>
        <Link href="/">
          <span className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 cursor-pointer">Back to Portfolio</span>
        </Link>
      </div>
    </AnimateIn>
  );
}

// Server component for data fetching
export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  let project = null;
  try {
    const res = await fetch(`http://localhost:3000/portfolio/${params.id}`, { cache: 'no-store' });
    if (res.ok) {
      project = await res.json();
    }
  } catch (e) {
    // ignore
  }
  return <ProjectDetailsClient project={project} />;
} 
import { Project } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  projects: Project[];
}
export default function Projects({ projects }: ProjectProps) {
  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-4xl">Cool projects</h2>
      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ slug, name, images, description }, index) => (
          <Link
            href={slug}
            key={name + index}
            target="_blank"
            className="rounded-lg border-white border-2 p-2 w-full"
          >
            <li>
              <div className="text-2xl text-center">{name}</div>
              <div className="md:text-left mb-6 mt-1 text-center">
                <span>{description}</span>
              </div>
              <div
                className={`xl:flex gap-10 md:justify-center ${
                  images.length > 1
                    ? "sm:grid sm:grid-cols-2"
                    : "flex justify-center"
                }`}
              >
                {images.map((image, index) => (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={250}
                    height={300}
                    key={index}
                  />
                ))}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

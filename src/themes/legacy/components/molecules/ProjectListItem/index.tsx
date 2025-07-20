import { ProjectList, Media } from "@/payload-types";
import NextLink from "next/link";
import Link from "@/themes/legacy/components/atoms/Link";
import styles from "./ProjectListItem.module.css";
import clsx from "clsx";
import Image from "next/image";
import { TABLET_WIDTH } from "@/utils/consts";

const ProjectListItem = (field: Omit<ProjectList, 'projectsList'>) => {

  const media = field.media as Media;
  
  if (!media || typeof media === 'string') {
    return null;
  }

  const resourceType = media.mimeType?.includes('video') ? 'video' : 'image';
  const originalFilename = media.filename || '';

  const {
    mediaUrl,
    button,
  } = field;

  return (
    <article
      className={clsx(
        styles["m-project-list-item"],
        "text-center px-2 w-full"
      )}
    >
      <figure>
        <NextLink target="_blank" href={mediaUrl || "#"}>
          {resourceType === "video" ? (
            <div className="overflow-hidden">
              <video
                poster={media.thumbnailURL || ''}
                className="lazy aspect-2/1 object-contain mx-auto hover:scale-150 transition-transform"
                autoPlay
                muted
                loop
                playsInline
                src={media.url || ''}
              />
            </div>
          ) : (
            <div className="aspect-2/1 relative overflow-hidden">
              <Image
                fill
                src={media.filename || ''}
                sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                className="object-contain mx-auto hover:scale-150 transition-transform"
                alt={originalFilename}
              />
            </div>
          )}
        </NextLink>
      </figure>

      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap justify-between">
          <Link aria-label={button.text} href={button.url} target="_blank" className="w-full flex justify-center">
              {button.text}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectListItem; 
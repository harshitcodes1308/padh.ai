"use client";

import Image from "next/image";
import VerticalMarquee from "./VerticalMarquee";

type CreatorPhoto = {
  src: string;
  alt: string;
  ratio: string;
};

const creatorPhotos: CreatorPhoto[] = [
  {
    src: "/landing/creators/creator-01.jpg",
    alt: "Gaurav Suthar with a popular creator at an education event",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/creator-02.jpg",
    alt: "Gaurav Suthar with a leading education creator",
    ratio: "3 / 4",
  },
  {
    src: "/landing/creators/creator-03.jpg",
    alt: "Gaurav Suthar with a creator in a conference venue",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/creator-04.jpg",
    alt: "Gaurav Suthar seated with a creator at a cafe",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/creator-05.jpg",
    alt: "Gaurav Suthar with a creator in a studio space",
    ratio: "9 / 14",
  },
  {
    src: "/landing/creators/creator-06.jpg",
    alt: "Gaurav Suthar with a creator in a bright event lobby",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/creator-07.jpg",
    alt: "Gaurav Suthar taking a selfie with creators",
    ratio: "16 / 11",
  },
  {
    src: "/landing/creators/creator-08.jpg",
    alt: "Gaurav Suthar seated with a creator in a lounge",
    ratio: "16 / 10",
  },
  {
    src: "/landing/creators/creator-09.jpg",
    alt: "Gaurav Suthar with a creator on a red carpet",
    ratio: "4 / 5",
  },
  {
    src: "/landing/creators/creator-10.jpg",
    alt: "Gaurav Suthar with a creator at a live event",
    ratio: "16 / 10",
  },
  {
    src: "/landing/creators/creator-11.jpg",
    alt: "Gaurav Suthar with a creator in an office studio",
    ratio: "4 / 5",
  },
];

const getPhoto = (index: number) => creatorPhotos[index] as CreatorPhoto;

const columns = [
  {
    photos: [getPhoto(0), getPhoto(5), getPhoto(8), getPhoto(3)],
    duration: 38,
    reverse: false,
  },
  {
    photos: [getPhoto(6), getPhoto(1), getPhoto(9), getPhoto(4)],
    duration: 44,
    reverse: true,
  },
  {
    photos: [getPhoto(2), getPhoto(7), getPhoto(10), getPhoto(5)],
    duration: 41,
    reverse: false,
  },
];

function PhotoCard({ photo }: { photo: CreatorPhoto }) {
  return (
    <figure className="sa-creator-card" style={{ aspectRatio: photo.ratio }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 720px) 46vw, (max-width: 1100px) 28vw, 240px"
        style={{ objectFit: "cover" }}
      />
    </figure>
  );
}

export default function CreatorGallery() {
  return (
    <section className="sa-creator-section" aria-labelledby="creator-gallery-title">
      <div className="sa-creator-inner">
        <div className="sa-creator-copy">
          <div className="sa-creator-kicker">Creator circle</div>
          <h2 id="creator-gallery-title">Seen With India&apos;s Leading Creators</h2>
          <p>
            Gaurav sir brings the same world students already follow into a sharper board-prep
            environment: credible mentors, real conversations, and focused execution.
          </p>
          <div className="sa-creator-note">
            <span />
            Built around trust, not noise.
          </div>
        </div>

        <div className="sa-creator-marquee-frame" aria-label="Photo gallery of Gaurav Suthar with creators">
          <div className="sa-creator-gallery-grid">
            {columns.map((column, columnIndex) => (
              <VerticalMarquee
                key={columnIndex}
                durationSec={column.duration}
                reverse={column.reverse}
                repeat={3}
                gap={14}
                className="sa-creator-column"
              >
                {column.photos.map((photo, photoIndex) => (
                  <PhotoCard key={`${photo.src}-${photoIndex}`} photo={photo} />
                ))}
              </VerticalMarquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

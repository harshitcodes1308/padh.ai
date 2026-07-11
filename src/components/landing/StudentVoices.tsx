"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

type StudentComment = {
  src: string;
};

type VoiceVideo = {
  src: string;
  label: string;
  ratio: string;
};

const comments: StudentComment[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/landing/student-voices/comment-${i + 1}.jpeg`,
}));

const commentRows = [comments.slice(0, 5), comments.slice(5)];

const voiceVideos: VoiceVideo[] = [
  {
    src: "/landing/student-voices/student-video-01.mp4",
    label: "Student result story",
    ratio: "16 / 9",
  },
  {
    src: "/landing/student-voices/student-video-02.mp4",
    label: "Board prep feedback",
    ratio: "16 / 9",
  },
];

function CommentCard({ comment, hidden }: { comment: StudentComment; hidden?: boolean }) {
  return (
    <article className="sa-student-comment-card" aria-hidden={hidden} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 0, flex: '0 0 clamp(350px, 45vw, 500px)' }}>
      <img src={comment.src} alt="Student Voice" style={{ width: '100%', height: 'auto' }} />
    </article>
  );
}

function CommentMarqueeRow({
  row,
  duration,
  delay,
}: {
  row: StudentComment[];
  duration: number;
  delay: number;
}) {
  return (
    <div className="sa-student-comment-row">
      <div
        className="sa-student-comment-track"
        style={
          {
            "--student-row-duration": `${duration}s`,
            "--student-row-delay": `${delay}s`,
          } as CSSProperties
        }
      >
        {[0, 1].map((copyIndex) => (
          <div className="sa-student-comment-set" key={copyIndex}>
            {row.map((comment) => (
              <CommentCard
                key={`${comment.src}-${copyIndex}`}
                comment={comment}
                hidden={copyIndex > 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentVideoCard({
  video,
  index,
  activeAudio,
  setActiveAudio,
}: {
  video: VoiceVideo;
  index: number;
  activeAudio: number | null;
  setActiveAudio: Dispatch<SetStateAction<number | null>>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioOn = activeAudio === index;
  const Icon = audioOn ? Volume2 : VolumeX;

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    node.muted = !audioOn;
    if (audioOn) {
      void node.play().catch(() => setActiveAudio(null));
    }
  }, [audioOn, setActiveAudio]);

  return (
    <article className="sa-student-video-card" style={{ "--student-video-ratio": video.ratio } as CSSProperties}>
      <video
        ref={videoRef}
        className="sa-student-video"
        src={video.src}
        autoPlay
        muted={!audioOn}
        loop
        playsInline
        preload="metadata"
        aria-label={video.label}
      />
      <div className="sa-student-video-chrome">
        <span>{video.label}</span>
        <button
          type="button"
          className="sa-student-audio-toggle"
          onClick={() => setActiveAudio(audioOn ? null : index)}
          aria-label={audioOn ? `Mute ${video.label}` : `Unmute ${video.label}`}
          aria-pressed={audioOn}
        >
          <Icon size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function StudentVoices() {
  const [activeAudio, setActiveAudio] = useState<number | null>(null);

  return (
    <section className="sa-student-voices-section" aria-labelledby="student-voices-title">
      <div className="sa-student-voices-header">
        <h2 id="student-voices-title">Hear What Students Say About Us</h2>
        <p>
          Real comments and short stories from students who used Gaurav Sir&apos;s Board-Prep
          resources when the exam pressure was at its highest.
        </p>
      </div>

      <div className="sa-student-comments-shell" aria-label="Student YouTube comments">
        {commentRows.map((row, index) => (
          <CommentMarqueeRow
            key={index}
            row={row}
            duration={index === 0 ? 46 : 52}
            delay={index === 0 ? -18 : -6}
          />
        ))}
      </div>

      <div className="sa-student-video-grid" aria-label="Student video testimonials">
        {voiceVideos.map((video, index) => (
          <StudentVideoCard
            key={video.src}
            video={video}
            index={index}
            activeAudio={activeAudio}
            setActiveAudio={setActiveAudio}
          />
        ))}
      </div>
    </section>
  );
}

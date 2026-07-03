"use client";

import { MessageCircle, ThumbsUp, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

type StudentComment = {
  name: string;
  handle: string;
  initial: string;
  text: string;
  likes: string;
  replies?: string;
  pinned?: boolean;
};

type VoiceVideo = {
  src: string;
  label: string;
  ratio: string;
};

const comments: StudentComment[] = [
  {
    name: "Aarav Sharma",
    handle: "@Aarav Sharma",
    initial: "A",
    text: "Thanks Gaurav Sir. Your videos made board prep much easier.",
    likes: "100",
    replies: "15 replies",
    pinned: true,
  },
  {
    name: "Priya Verma",
    handle: "@Priya Verma",
    initial: "P",
    text: "ToppersClan genuinely helped me score better in Class 10 CBSE.",
    likes: "10",
    replies: "2 replies",
  },
  {
    name: "Aditya Singh",
    handle: "@Aditya Singh",
    initial: "A",
    text: "The website notes are so well organized. Saved a lot of time.",
    likes: "1.2K",
  },
  {
    name: "Muskan Gupta",
    handle: "@Muskan Gupta",
    initial: "M",
    text: "Your one shots before exams were a lifesaver. Thank you sir.",
    likes: "20",
  },
  {
    name: "Rohan Yadav",
    handle: "@Rohan Yadav",
    initial: "R",
    text: "Studying from ToppersClan was one of my best decisions this year.",
    likes: "100",
  },
  {
    name: "Ananya Mishra",
    handle: "@Ananya Mishra",
    initial: "A",
    text: "The explanations are simple and easy to remember. Really helpful.",
    likes: "10",
  },
  {
    name: "Kunal Mehta",
    handle: "@Kunal Mehta",
    initial: "K",
    text: "I revised everything from your website before boards. Worth it.",
    likes: "29",
  },
  {
    name: "Sneha Patel",
    handle: "@Sneha Patel",
    initial: "S",
    text: "Thank you Gaurav Sir for making tough chapters feel easy.",
    likes: "9",
  },
  {
    name: "Harsh Raj",
    handle: "@Harsh Raj",
    initial: "H",
    text: "These resources helped me stay confident throughout my board preparation.",
    likes: "30",
  },
  {
    name: "Ishita Kapoor",
    handle: "@Ishita Kapoor",
    initial: "I",
    text: "Couldn't have managed my CBSE Class 10 boards this well without your guidance.",
    likes: "3",
  },
];

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
    <article className="sa-student-comment-card" aria-hidden={hidden}>
      <div className="sa-student-comment-topline">
        <span className="sa-student-comment-avatar">{comment.initial}</span>
        <div className="sa-student-comment-author">
          <strong>{comment.name}</strong>
          <span>
            {comment.handle} · 2 weeks ago
          </span>
        </div>
        {comment.pinned ? <span className="sa-student-comment-pin">Pinned</span> : null}
      </div>
      <p>{comment.text}</p>
      <div className="sa-student-comment-meta">
        <span>
          <ThumbsUp size={15} strokeWidth={2} aria-hidden="true" />
          {comment.likes}
        </span>
        {comment.replies ? (
          <span>
            <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
            {comment.replies}
          </span>
        ) : null}
      </div>
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
                key={`${comment.handle}-${copyIndex}`}
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
          Real comments and short stories from students who used Gaurav sir&apos;s board-prep
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

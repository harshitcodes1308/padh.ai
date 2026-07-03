export const metadata = {
  title: "Creator Portal - PADH.AI",
  description: "Affiliate creator portal for PADH.AI",
};

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return <div className="creator-portal">{children}</div>;
}

import StrangerHero from "@/components/stranger-hero"
// <CHANGE> Added ProfileAvatar component
import { ProfileAvatar } from "@/components/profile-avatar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ProfileAvatar />
      <StrangerHero />
    </main>
  )
}

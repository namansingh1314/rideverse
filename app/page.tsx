import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import CarAnimation from "@/components/CarAnimation";
import BlogPosts from "@/components/BlogPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <BlogPosts />
      <Camp />
      <CarAnimation />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

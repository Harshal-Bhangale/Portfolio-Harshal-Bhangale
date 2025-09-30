import "./globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";


// export const metadata: Metadata = {
//   title: "",
//   description: "Portfolio of Harshal Bhangale, Full Stack Developer",
// };


const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Harshal Bhangale - Full Stack Developer",
  description:
    "Developer & Innvoator || Full Stack Developer || Java Developer || Student at JSPM's Rajarshi Shahu College of Engineering, Pune.",
  generator: "Next.js",
  applicationName: "Harshal Bhangale",
  // keywords: [
  //   "freelance", "developer", "frontend", "react", "creative", "tech", "ahmedabad", "software", "portfolio",
  //   "mern stack developer", "backend developer", "web development", "javascript", "typescript",
  //   "node.js", "express.js", "mongodb", "database", "restful API", "graphql", "programming", "coding",
  //   "web design", "user interface", "user experience", "product design", "technology", "remote work",
  //   "software engineering", "coding enthusiast", "digital solutions", "problem solver",
  //   "innovative solutions", "agile development", "code quality",
  //   "mayank yadav", "myk yadav", "yadav mayank", "mayank ldrp",
  //   "mayank nptel", "yadav nptel", "myk yadav", "mayank ssip",
  //   "mayank collegpt", "mayank yadav collegpt", "yadav mayank collegpt",
  //   "collegpt founder", "collegpt developer", "mayank founder collegpt",
  //   "mayank developer collegpt", "collegpt mayank yadav",
  //   "mayank yadav safarnamaaa", "mayank yadav mongodb",
  //   "yadav mayank ldrp", "yadav ldrp", "ldrpmayank", "ldrpyadav",
  //   "collegpt yadav", "yadav collegpt", "mayank mern", "yadav mern",
  //   "mayank developer", "mayank mern stack", "mayank yadav mern",
  //   "mayank yadav react", "mayank react", "mayank hackingly"
  // ],
  // ❌ colorScheme removed from here
  openGraph: {
    title: "Harshal Bhangale - Full Stack Developer",
    description:
      "Developer & Innvoator || Full Stack Developer || Java Developer || Student at JSPM's Rajarshi Shahu College of Engineering, Pune.",
    url: "https://harshal-dev.vercel.app/",
    siteName: "https://harshal-dev.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/NMgXZ6j/Homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Harshal Bhangale - Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Bhangale - Full Stack Developer",
    description:
      "Developer & Innvoator || Full Stack Developer || Java Developer || Student at JSPM's Rajarshi Shahu College of Engineering, Pune.",
    creator: "harshal-bhangale",
    images: [
      "https://i.ibb.co/NMgXZ6j/Homepage.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// ✅ Move colorScheme to a new viewport export
export const viewport: Viewport = {
  colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}

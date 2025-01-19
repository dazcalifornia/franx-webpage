/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-main dark:bg-darkMain text-gray-900 dark:text-white py-10 px-4">
      <Head>
        <title>Supakit Wiwustrinon - Resume</title>
        <meta name="description" content="Resume of Supakit Wiwustrinon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto mt-40">
        <h1 className="text-4xl font-bold mb-6">SUPAKIT WIWUSTRINON</h1>
        <h2 className="text-2xl font-semibold">
          Full-Stack Software Developer
        </h2>
        <div className="mt-4">
          <p>
            Email:{" "}
            <a href="mailto:franx.essential@gmail.com" className="underline">
              franx.essential@gmail.com
            </a>
          </p>
          <p>
            Website:{" "}
            <Link href="https://www.franx.dev">
              <a className="underline">www.franx.dev</a>
            </Link>
          </p>
          <p>Location: Thailand</p>
        </div>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Professional Summary</h3>
          <p>
            Full-stack developer with strong experience in web and mobile
            application development, specializing in React, Node.js, and cloud
            technologies. Demonstrated success in building data-driven
            applications and automated systems, with particular expertise in
            chatbot development and real-time applications.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Technical Skills</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Programming Languages:</strong> C, C++, Java, Python,
              JavaScript, TypeScript, PHP, Go, Kotlin, Dart
            </li>
            <li>
              <strong>Frontend Development:</strong> React, ReactNative, Svelte,
              Flutter, Tailwind CSS, HTML5, CSS3, Electron
            </li>
            <li>
              <strong>Backend Development:</strong> Node.js, Laravel, FastAPI,
              Flask, Express, GraphQL
            </li>
            <li>
              <strong>Tools & Infrastructure:</strong> Docker, Nginx, Linux,
              Bash, Git, Firebase, Eslint
            </li>
            <li>
              <strong>Machine Learning & Data:</strong> TensorFlow, Predictive
              Modeling, Data Analysis
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Professional Experience</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              Front-End Developer | KOS Design (Jun 2023 - Nov 2023)
            </h4>
            <ul className="list-disc pl-5">
              <li>
                Led frontend development initiatives focusing on website
                improvements and bug resolution
              </li>
              <li>
                Implemented responsive design principles and modern UI/UX
                practices
              </li>
              <li>
                Collaborated with the team to enhance website performance and
                user experience
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              IT Support (ITSM/ITAM) | Kasikornbank (May 2024 - Nov 2024)
            </h4>
            <ul className="list-disc pl-5">
              <li>Managed IT Asset Management system implementation</li>
              <li>
                Resolved complex software issues and provided technical support
              </li>
              <li>
                Streamlined internal software processes and user experience
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Key Projects</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Water Quality Dashboard:</strong> Developed a full-stack
              application for water quality data analysis and visualization,
              incorporating predictive models (React, TensorFlow, Python).
            </li>
            <li>
              <strong>LINE Chatbot Pet Funds:</strong> Designed and implemented
              a chatbot for automated donation management using the LINE
              Messaging API (Node.js, Express).
            </li>
            <li>
              <strong>TELEX Chat Application:</strong> Built a real-time chat
              application focusing on user experience and secure communications
              (React, Firebase).
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Education</h3>
          <p>
            Bachelor of Science in Computer Science, Kasetsart University
            Sriracha Campus (2019-2024)
          </p>
        </section>
      </div>
    </div>
  );
}

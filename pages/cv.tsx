/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";

export default function CV() {
  return (
    <div className="min-h-screen bg-main dark:bg-darkMain text-gray-900 dark:text-white py-10 px-4">
      <Head>
        <title>Supakit Wiwustrinon - CV</title>
        <meta
          name="description"
          content="Curriculum Vitae of Supakit Wiwustrinon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto mt-36">
        <h1 className="text-4xl font-bold mb-6">SUPAKIT WIWUSTRINON</h1>
        <h2 className="text-2xl font-semibold">
          Full-Stack Software Developer & Solutions Engineer
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
          <h3 className="text-xl font-bold">Professional Profile</h3>
          <p>
            Versatile full-stack developer with comprehensive experience in
            modern web and mobile technologies. Specializes in creating
            efficient, scalable solutions across various platforms. Demonstrated
            ability to develop data-driven applications, automated systems, and
            user-centric interfaces.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Technical Expertise</h3>
          <h4 className="text-lg font-semibold mt-4">Programming Languages</h4>
          <p>
            C, C++, Java, Python, JavaScript, TypeScript, PHP, Go, Kotlin, Dart
          </p>
          <h4 className="text-lg font-semibold mt-4">Frontend Development</h4>
          <p>
            React, React Native, Svelte, Flutter, Electron, HTML5, CSS3,
            Tailwind CSS
          </p>
          <h4 className="text-lg font-semibold mt-4">Backend Development</h4>
          <p>Node.js, FastAPI, Flask, Laravel, Express, GraphQL</p>
          <h4 className="text-lg font-semibold mt-4">Infrastructure & Tools</h4>
          <p>Docker, Nginx, Linux, Bash, Git, Firebase, Eslint</p>
          <h4 className="text-lg font-semibold mt-4">Data & Analytics</h4>
          <p>
            TensorFlow, Machine Learning, Data Analysis, Predictive Modeling
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Professional Experience</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              Front-End Developer | KOS Design (June 2023 - November 2023)
            </h4>
            <ul className="list-disc pl-5">
              <li>
                Spearheaded frontend development initiatives for web
                applications
              </li>
              <li>
                Implemented responsive design patterns and modern UI/UX
                practices
              </li>
              <li>
                Resolved complex frontend bugs and optimized website performance
              </li>
              <li>Collaborated with design team to improve user experience</li>
              <li>Technologies: React, Tailwind CSS, JavaScript</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              IT Support (ITSM/ITAM) | Kasikornbank (May 2024 - November 2024)
            </h4>
            <ul className="list-disc pl-5">
              <li>Managed comprehensive IT Asset Management system</li>
              <li>
                Developed and implemented technical solutions for internal
                software
              </li>
              <li>Provided technical support and problem resolution</li>
              <li>Documented processes and created technical documentation</li>
              <li>Technologies: Various internal systems and tools</li>
            </ul>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Key Projects</h3>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Water Quality Dashboard</h4>
            <p>
              Built a comprehensive water quality monitoring system, integrating
              machine learning models for predictive analysis and a responsive
              frontend interface for data visualization.
            </p>
            <p>
              <strong>Technologies:</strong> React, TensorFlow, Python, Data
              Visualization Libraries
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">LINE Chatbot Pet Funds</h4>
            <p>
              Designed and implemented an automated donation management chatbot
              using the LINE Messaging API. Integrated secure payment processing
              and organization management tools.
            </p>
            <p>
              <strong>Technologies:</strong> Node.js, Express, LINE API
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">TELEX Chat Application</h4>
            <p>
              Developed a secure, real-time chat application featuring encrypted
              messaging and intuitive UX design.
            </p>
            <p>
              <strong>Technologies:</strong> React, Firebase, Real-time Database
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Education</h3>
          <p>
            <strong>Bachelor of Science in Computer Science</strong>, Kasetsart
            University Sriracha Campus (2019-2024)
          </p>
          <p>
            Relevant Coursework: Data Structures and Algorithms, Software
            Construction, Operating Systems, Database Systems, Computer
            Networks, System Analysis and Design
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Additional Skills</h3>
          <ul className="list-disc pl-5">
            <li>Agile Development Methodologies</li>
            <li>Problem-Solving and Analytical Thinking</li>
            <li>Technical Documentation</li>
            <li>Team Collaboration</li>
            <li>Project Management</li>
          </ul>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold">Languages</h3>
          <p>Thai (Native), English (Professional Working Proficiency)</p>
        </section>
      </div>
    </div>
  );
}

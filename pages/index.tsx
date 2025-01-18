/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12">
        {/*/content*/}
        <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl ">
          <article className="prose lg:prose-xl">
            <h1 className="dark:text-white">Hi, I'm Supakit Wiwustinon</h1>
            <div className="py-1 bg-black text-white no-underline decoration/30 rounded-xl shadow-md mx-10 opacity-70">
              <p className="text-base">
                "Full-Stack Software Developer based in Thailand."
              </p>
            </div>
          </article>

          <div className="px-4 pt-4 sm:px-0">
            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <span className="flex content-start items-center place-content-between">
                  <h1 className="text-left text-lg dark:text-white">
                    About Me:
                  </h1>
                  <Image
                    className="rounded-full"
                    width={100}
                    height={100}
                    src="/profile.jpg"
                    alt="profilePicture"
                  />
                </span>

                <p className="text-left indent-4 md:px-4 text-base dark:text-white break-words">
                  Hi, my name is Supakit Wiwustrinon. I’m a 24-year-old software
                  developer with a lifelong passion for technology. My interest
                  in computers began at the age of 7, and this enthusiasm led me
                  to pursue a major in Computer Science at Kasetsart University.
                  Over the years, I have honed my skills in software development
                  and gained expertise in building web and mobile applications.
                  I am deeply committed to creating innovative solutions that
                  combine technology and creativity.
                </p>
                <Link href="/work">
                  <button className="py-3 px-3 dark:bg-emerald-400/20 dark:text-emerald-200 text-sm font-semibold rounded-md shadow-lg focus:outline-none text-emerald-600 bg-emerald-500/50 hover:shadow-emerald-400/30">
                    <span className="flex content-start items-center">
                      View My Work
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">
                  Technical Skills:
                </h1>
                <h2 className="text-left text-lg dark:text-white">
                  Languages:
                </h2>
                <p className="text-left md:px-4 text-base dark:text-white break-words">
                  C, C++, Java, Python, HTML, CSS, JavaScript, Node.js,
                  TypeScript, Go, PHP, Kotlin, Dart
                </p>

                <h2 className="text-left text-lg dark:text-white">
                  Tools & Frameworks:
                </h2>
                <p className="text-left md:px-4 text-base dark:text-white break-words">
                  React, React Native, Svelte, Flutter, Tailwind CSS,
                  TensorFlow, Docker, Firebase, Nginx, Laravel, FastAPI, Flask,
                  GraphQL, Linux, Git
                </p>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">
                  Professional Experience:
                </h1>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>
                    Front-End Developer | KOS Design (Jun 2023 - Nov 2023)
                    Internship
                  </strong>
                  <br />
                  Led frontend development projects, improved website
                  performance, and implemented responsive UI/UX designs.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>
                    IT Support (ITSM/ITAM) | Kasikornbank (May 2024 - Nov 2024)
                    By Contract
                  </strong>
                  <br />
                  Managed IT asset systems, provided technical support, and
                  enhanced internal software processes.
                </p>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">
                  Key Projects:
                </h1>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Cryptocurrency Application</strong>
                  <br />
                  Code refactoring and bug fixing to enhance stability and
                  functionality. Worked closely with the client to meet business
                  requirements.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Bus Schedule Application</strong>
                  <br />
                  Designed and developed an intuitive bus schedule app with
                  React Native, Expo, and PocketBase.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Power Talent Application</strong>
                  <br />
                  Built a platform for freelancers using React Native, Expo,
                  Node.js, Express, Redis, PocketBase, and Cloudflare.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Water Quality Prediction Website</strong>
                  <br />
                  Developed a site for predicting water quality parameters using
                  Next.js and FastAPI.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Student Enrollment Management System</strong>
                  <br />
                  Created a platform to manage enrollments and grades with
                  Next.js and Lumen API.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Telex-Chat Application</strong>
                  <br />
                  Built a chat application using React Native, Expo, and
                  Firebase for real-time messaging.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Shop Management Application</strong>
                  <br />
                  Developed a shop management system for inventory tasks with
                  database integration.
                </p>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>LINE Pet Funds Chatbot</strong>
                  <br />
                  Developed a chatbot for pet fund donations using Node.js and
                  LINE's Messaging API.
                </p>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">
                  Education:
                </h1>
                <p className="text-left md:px-4 text-base dark:text-white">
                  <strong>Bachelor of Science in Computer Science</strong>
                  <br />
                  Kasetsart University Sriracha Campus (2019-2024)
                </p>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">Hobbies:</h1>
                <p className="text-left md:px-4 text-base sm:m-8 dark:text-white">
                  Music, Gaming, Reading, Drawing, Photography, Coding
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12">
        {/*/content*/}
        <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl ">
          <article className="prose lg:prose-xl">
            <h1 className="dark:text-white">Hi I'm supakit Wiwustinon</h1>
            <div className="py-1 bg-black text-white no-underline decoration/30 rounded-xl shadow-md mx-10 opacity-70">
              <p className="text-base">
                "I'm student in Kasetsart university Lived in Thailand"
              </p>
            </div>
          </article>

          <div className="px-4 pt-4 sm:px-0 ">
            <div className="relative pb-4 sm:max-w-lg ">
              <article className="prose pt-8">
                <span className="flex content-start items-center place-content-between">
                  <h1 className="text-left text-lg dark:text-white">
                    About me:
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
                  Hi my name is Supkakit wiwustrinon, I’m 22 years old, I have a
                  passion for the computer since I’m 7 years old, when I prepare
                  to study in university I choose computer science major, And
                  now, I know something that I like and I can make it good is
                  all about the computer.
                </p>
                <Link href="/work">
                  <button className="py-3 px-3 dark:bg-emerald-400/20 dark:text-emerald-200 text-sm font-semibold rounded-md shadow-lg focus:outline-none text-emerald-600 bg-emerald-500/50 hover:shadow-emerald-400/30 ">
                    <span className="flex content-start items-center">
                      Workspace
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
                <h1 className="text-left text-lg dark:text-white">Bio:</h1>
                <span className="flex content-start items-center">
                  <p className="text-lg font-bold dark:text-white">2019</p>{" "}
                  <p className="pl-8 dark:text-white">
                    {" "}
                    Darasamutr sriracha school{" "}
                  </p>
                </span>
              </article>
            </div>

            <div className="relative pb-4 sm:max-w-lg">
              <article className="prose pt-8">
                <h1 className="text-left text-lg dark:text-white">
                  Hobby I ♥:
                </h1>
                <p className="text-left md:px-4 text-base sm:m-8 dark:text-white">
                  Music, Playing Game,Reading,Drawing,Photography, Coding
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

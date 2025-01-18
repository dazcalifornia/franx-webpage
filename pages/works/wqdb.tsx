/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12 ">
      <Head>
        <title>Supakit Wiwustrinon -{">"} Telex-Chat APP</title>
        <meta name="description" content="Just Franx Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*/content*/}
      <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl">
        <article className="prose lg:prose-xl">
          <h1 className="dark:text-white">Hi I'm supakit Wiwustinon</h1>
          <div className="py-1 bg-black text-white no-underline decoration/30 rounded-xl shadow-md mx-10 opacity-70">
            <p className="text-base">
              "I'm student in Kasetsart university Lived in Thailand"
            </p>
          </div>
        </article>
        {/* content */}

        <div className="px-4 pt-4 sm:px-0">
          <div className="relative pb-4 sm:max-w-lg">
            <span className="flex content-start items-center">
              <Link href="/work">
                <a className="text-left text-lg text-[#E83E8C] underline font-bold">
                  Works
                </a>
              </Link>
              <p className="pl-2 dark:text-white">
                {">"} WaterQuality Dashboard{" "}
              </p>
            </span>
          </div>
          {/* information */}
          <article className="prose pt-8">
            <p className="text-left indent-4 md:px-4 text-base dark:text-white">
              This is a work of student in mahidol hire me to make this website
              for visual waterdata and predict value for used by other people
              such as fisherman or someone who need to make an reserch in water
              area
            </p>
          </article>
          <div className="text-left pt-4 ">
            <span className="flex content-start items-center">
              <div className="p-1 dark:bg-emerald-400/20 dark:text-emerald-200 text-sm font-semibold rounded-md shadow-lg focus:outline-none text-emerald-600 bg-emerald-500/50">
                Source :
              </div>
              <Link href="https://github.com/dazcalifornia/Line_Petfunds_Api">
                <div className="pl-3 truncate">
                  <p className="truncate hover:bg-emerald-400/20 cursor-pointer p-1 rounded-md duration-300 no-underline hover:underline dark:text-white">
                    https://github.com/dazcalifornia/waterQuality
                  </p>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

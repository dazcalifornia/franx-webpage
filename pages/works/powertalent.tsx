/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function PowerTalent() {
  return (
    <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12">
      <Head>
        <title>Supakit Wiwustrinon - Power Talent Bounty Hunter App</title>
        <meta
          name="description"
          content="Power Talent Bounty Hunter Application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl">
        <article className="prose lg:prose-xl">
          <h1 className="dark:text-white">Hi I'm Supakit Wiwustinon</h1>
          <div className="py-1 bg-black text-white no-underline decoration/30 rounded-xl shadow-md mx-10 opacity-70">
            <p className="text-base">
              "Power Talent Bounty Hunter Application"
            </p>
          </div>
        </article>

        <div className="px-4 pt-4 sm:px-0">
          <div className="relative pb-4 sm:max-w-lg">
            <span className="flex content-start items-center">
              <Link href="/work">
                <a className="text-left text-lg text-[#E83E8C] underline font-bold">
                  Works
                </a>
              </Link>
              <p className="pl-2 dark:text-white">{">"} Power Talent</p>
            </span>
          </div>
          <article className="prose pt-8">
            <p className="text-left indent-4 md:px-4 text-base dark:text-white">
              This application was commissioned by a client to create a platform
              that empowers freelancers and talent seekers to earn money more
              efficiently by completing missions. The frontend was built using
              React Native with Expo, while the backend leveraged Node.js,
              Express, Redis, PocketBase, and Cloudflare. The final product is a
              robust and scalable application that supports seamless
              interactions between talent seekers and service providers.
            </p>
            <div className="p-1 dark:bg-emerald-400/20 dark:text-emerald-200 text-sm font-semibold rounded-md shadow-lg focus:outline-none text-emerald-600 bg-emerald-500/50">
              Screenshot
            </div>
            <div className="grid grid-cols-2 gap-4 hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
              <Image
                src="/assets/power/1.png"
                width={275}
                height={500}
                alt="Power Talent App Screenshot 1"
              />
              <Image
                src="/assets/power/2.png"
                width={275}
                height={500}
                alt="Power Talent App Screenshot 2"
              />
              <Image
                src="/assets/power/3.png"
                width={275}
                height={500}
                alt="Power Talent App Screenshot 3"
              />
              <Image
                src="/assets/power/4.png"
                width={275}
                height={500}
                alt="Power Talent App Screenshot 4"
              />
            </div>
          </article>
          <div className="text-left pt-4">
            <span className="flex content-start items-center">
              <div className="p-1 dark:bg-emerald-400/20 dark:text-emerald-200 text-sm font-semibold rounded-md shadow-lg focus:outline-none text-emerald-600 bg-emerald-500/50">
                Source :
              </div>
              <div className="pl-3 truncate">
                <p className="truncate hover:bg-emerald-400/20 cursor-pointer p-1 rounded-md duration-300 no-underline hover:underline dark:text-white">
                  holding by client
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

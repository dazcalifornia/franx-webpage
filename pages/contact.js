/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function contact(){
    return (
      <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12 ">
        <Head>
          <title>Supakit wiwustrinon(contact)</title>
          <meta name="description" content="Just Franx Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*/content*/}
        <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl">
          <div className="px-4 pt-4 sm:px-0 ">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-emerald-400/40 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/profile.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {"Contact me :)"}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A passionate full-stack Developer & Software Engineer from Thailand 🇹🇭
                </p>
                <pre>
                 - 🔭 I’m currently working on <a class="text-sky-400 after:content-['_↗'] ..." href="https://github.com/dazcalifornia/Lunar">Lunar</a>

                - 👨‍💻 All of my projects are available at my <a class="text-sky-400 after:content-['_↗'] ..." href=" www.github.com/dazcalifornia">github</a>
      

                - 📫 How to reach me <a href="mailto: franx.essential@gmail.com" class="text-sky-400 after:content-['_↗'] ...">franx.essential@gmail.com</a>

                - ⚡ Fun fact **I think I'm workaholic and I really talk a lot**
                  <pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

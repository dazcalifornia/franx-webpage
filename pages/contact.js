/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function contact(){
    return (
      <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12 ">
        <Head>
          <title>Supakit Wiwustrinon -{">"} Petfunds Chatbot</title>
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
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to use the form.
                </p>
                <div>
                  <form className={styles.main}>
                    <formGroup className={styles.inputGroup}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.inputField}
                      />
                    </formGroup>
                    <formGroup className={styles.inputGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        className={styles.inputField}
                      />
                    </formGroup>
                    <formGroup className={styles.inputGroup}>
                      <label htmlFor="message">Message</label>
                      <input
                        type="text"
                        name="message"
                        className={styles.inputField}
                      />
                    </formGroup>
                    <input type="submit" />
                  </form>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <p>Send Message</p>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
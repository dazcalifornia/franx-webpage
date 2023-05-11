/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';



export default function works(){

  
    return (
      <div className="relative flex flex-col min-h-screen justify-center bg-main dark:bg-darkMain py-6 sm:py-12">
        <Head>
        <title>Supakit Wiwustrinon - Works</title>
        <meta name="description" content="Some a little works" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {/*/content*/}
        <div className="fade-in text-center pt-20 relative pb-8 sm:mx-auto sm:px-1 sm:max-w-xl">
          <article className="prose lg:prose-xl">
            <h1 className="dark:text-white">Hi I'm supakit Wiwustinon</h1>
            <div className="py-1 bg-black text-white no-underline decoration/30 rounded-xl shadow-md mx-10 opacity-70">
              <p className="text-base">
                "Hello folks!! This is my works & personal project"
              </p>

            </div>
          </article>
          {/* content */}

          <div className="px-4 pt-6 sm:px-0 transition ease-in-out">
            <div className="relative pb-4 sm:max-w-lg">
              <h1 className="text-left text-lg font-bold dark:text-white">
                Works
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">
              
               <Link href="../works/wqdb">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/wqdb.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">WaterQuality Predition Website</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                        Website that can Predict WaterQuality value such as PH Salinity ..etc
                        this website run on FastAPI framework and use Machine Learning model to predict
                        and use Next.js for Front end
                      </p>
                    </article>
                  </div>
                </a>
              </Link>


              <Link href="../works/dashboard">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/jincsint.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">Student enroll management Website</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                      Website that can manage student enroll and Grade in the university 
                      made with next.js and LumenAPI
                      </p>
                    </article>
                  </div>
                </a>
              </Link>
              

              <Link href="../works/csproject">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/csprodj.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">Telex-Chat application</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                        A chat application that can send message made with React and Firebase
                        
                      </p>
                    </article>
                  </div>
                </a>
              </Link>

              <Link href="../works/chatapp">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/chat.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">ChatApp</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                        Realtime ChatApp made with java and integrate with
                        RealtimeDB
                      </p>
                    </article>
                  </div>
                </a>
              </Link>

              <Link href="../works/shopMng">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/shop.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">ShopManagement</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                        A ShopManagement application that will store you items into Database
                        and can add,edit or delete item from database
                      </p>
                    </article>
                  </div>
                </a>
              </Link>


              <Link href="../works/linepet">
                <a>
                  <div className="felx-col hover:-translate-y-1 hover:scale-105 ease-in-out delay-150 duration-300">
                    <Image
                      src="/assets/line.png"
                      width={275}
                      height={170}
                      layout={"responsive"}
                      className="rounded-xl"
                      alt="profile"
                    />
                    <article className="prose pt-8">
                      <h1 className="text-base dark:text-white">Pet Funds Chatbot</h1>
                      <p className="text-left indent-2 text-sm dark:text-white">
                        A Line-Chatbot made with Node.js integrate with Line Message-API
                      </p>
                    </article>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

import React from "react";
export default function Feature() {
    return (
        <section className="py-8 bg-red-100 mb-40">
            <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-green-900">
                Connect With Amy To Explore, Learn, and Grow with Us

            </h2>

            <p className="text-center m-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up duration-150">
            Our blog website is a hub for curious minds, offering fresh perspectives and valuable insights on a variety of topics. From technology breakthroughs to lifestyle hacks, health tips to travel adventures, we aim to inspire, educate, and entertain our readers. Designed with simplicity and functionality in mind, our platform ensures a seamless experience across all devices. With regular updates and a vibrant community of like-minded readers, we’re not just a website – we’re a destination for ideas, discussions, and growth. Dive in and discover something new every day!

            </p>


            <div className="max-w-7xl mx-auto px-5">
                <h1 className="text-center my-8 text-green-900 animate-color-chane text-4xl font-bold ">
                    {" "}
                    Exploring our Categoies
                    {" "}
                </h1>

                <div className=" text-3xl grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-col-6 animate-fade-in-up delay-150">

                    {[
                        "Technology",
                        "Artifical Intelligence",
                        "Human Robbot",
                        "Full Stake Development",
                        "Next.js",
                        "Virtual Reality"
                    ].map((categiores, index)=>(
                        <div key={index} className="relative group p-6 bg-white rounded-lg shadow-lg hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-800 ">
                            <p className="text-center text-lg font-semibold ">
                                {categiores}
                            </p>
                            <div className="absolute inset-0 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
                        </div>

                    ))}

                </div>
            </div>
            <p className="text-sm md:text-base text-black mb-6 px-4 animated-fade-in-down delay-100 mt-12">
            Welcome to a space where knowledge meets creativity, and every visit feels like an adventure. Our blog is designed to be your trusted companion, offering insights that educate, stories that inspire, and ideas that ignite change. From uncovering the latest trends to diving deep into timeless topics, we bring content that resonates with every reader. Easy to navigate and brimming with fresh updates, our platform ensures you’ll always find something worth your time. Join our growing community and let’s explore the world of ideas together!

            
            </p>
        </section>
    );
}
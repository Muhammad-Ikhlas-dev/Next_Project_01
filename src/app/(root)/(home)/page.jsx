import Banner from "@/app/_components/Main/Banner";
import SearchForm from "@/app/_components/Main/SearchForm";
import React from "react";


const Page=()=>{
  return (
    <main className="flex flex-col justify-center items-center mx-auto w-[86vw] max-w-screen-2xl
     text-white mt-32 sm:mt-40 m-auto">
      <section className="nav-padding w-full">
        <Banner/>
        <SearchForm/>
      </section>
    </main>
  );
}

export default Page;
"use client"

import { useState, useEffect } from 'react';

export default function Cards() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:8000/Cards');
      const data = await response.json();
      if (!data) {
        throw new Error('F');
      }

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {loading && !data && <p>Carregando...</p>}
      {data && data.map((item) => <div className=" shadow-xl m-5 overflow-hidden rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white m-10">
    <img src={item.img} alt="image" className="w-full" />
    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
      <h3>
        <a
          href="javascript:void(0)"
          className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
        >
          {item.title}
        </a>
      </h3>
      <p className="mb-7 text-base leading-relaxed text-body-color">
        {item.content}
      </p>
      <a
        href="javascript:void(0)"
        className="inline-block rounded-full border border-black py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-musgo hover:text-white hover:border-0 dark:border-white"
      >
        View Details
      </a>
    </div>
  </div>)}
    </>
  );
}

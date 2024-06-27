"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';




import { useState } from "react";
import arrayMove from "array-move";

import { arrayMoveImmutable } from 'array-move';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Gallery from "react-photo-gallery";







function Pattern() {
  const searchParams = useSearchParams();
  const name = "/spilt/" + searchParams.get("name")
  // const router = useRouter();
  // const { query } = router;

  console.log(111, name)

  // const [items, setItems] = useState(photos);
  // const [category, setCategory] = useState("flowers");

  useEffect(() => {
    // 禁止滚动
    document.body.style.overflow = 'hidden';

    // 组件卸载时恢复滚动
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (

    <main>

      <div className="w-screen h-screen">


        {[1, 2, 3, 4, 5, 6].map((index2) =>
          <div style={{ display: "flex", gap: 0 }}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                // 返回一个处理过的元素
                return <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[0px]"
                  src={name}
                  alt="pattern tile Logo"
                  width={300}
                  height={300}
                  priority
                  index={index}
                />
              })

            }

          </div>
        )}






      </div>


    </main >

  );
}


export default function Home() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Pattern />
    </Suspense>
  )
}
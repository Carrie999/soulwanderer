"use client";
import Image from "next/image";
// import { useRouter } from 'next/navigation'
// import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';




// import { useState } from "react";
// import arrayMove from "array-move";

// import { arrayMoveImmutable } from 'array-move';
// import { SortableContainer, SortableElement } from "react-sortable-hoc";
// import Gallery from "react-photo-gallery";




function queryURLParams(url) {
  let askIn = url.indexOf('?'),
    wellIn = url.indexOf('#'),
    askText = '',
    wellText = '';
  // #不存在
  wellIn === -1 ? wellIn = url.length : null;
  // ?存在
  askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null;
  wellText = url.substring(wellIn + 1);
  let result = {};
  wellText !== '' ? result['HASH'] = wellText : null;
  if (askText !== "") {
    let ary = askText.split('&');
    ary.forEach(item => {
      let aryText = item.split('=');
      result[aryText[0]] = aryText[1];
    })
  }
  return result;
}



export default function Home() {
  // const searchParams = useSearchParams();

  let name = ""

  if (typeof window !== "undefined") {
    name = "/spilt/" + queryURLParams(window.location.href).name
  }
  // const router = useRouter();
  // const { query } = router;

  // console.log(111, name)

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

      <div className="w-screen h-screen bg-black flex items-center justify-center ">
        {typeof window !== "undefined" &&
          (<div className="w-full h-full flex items-center justify-center">
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[0px] w-full h-auto"
              src={name}
              alt="pattern tile Logo"
              // style={{ width: '100vw', height: 'auto' }}
              height={816}
              width={1472}
              priority
            />
          </div>)
        }

      </div>


    </main >

  );
}


"use client";

import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// import PhotoGallery from './PhotoGallery';
import Photo from "./Photo";
import { useState } from "react";
import arrayMove from "array-move";
import { arrayMoveImmutable } from 'array-move';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Gallery from "react-photo-gallery";
let photos = [];


for (let i = 1; i < 49; i++) {
  photos.push({
    src: `/spilt/flowers/m${i}_00.jpg`,
    width: 1,
    height: 1,
    title: `flowers_${i}_00.jpg`
  })
  photos.push({
    src: `/spilt/flowers/m${i}_01.jpg`,
    width: 1,
    height: 1,
    title: `flowers_${i}_01.jpg`
  })
  photos.push({
    src: `/spilt/flowers/m${i}_10.jpg`,
    width: 1,
    height: 1,
    title: `flowers_${i}_10.jpg`
  })

  photos.push({
    src: `/spilt/flowers/m${i}_11.jpg`,
    width: 1,
    height: 1,
    title: `flowers_${i}_11.jpg`
  })
}





// function isMobile() {

//   if (typeof window !== "undefined") {
//     const userAgent = window.navigator.userAgent || window.opera;
//     return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
//   }

// }

const GradientButton = () => {

  // const handleClick = () => {
  //   window.location.href = 'https://www.baidu.com';
  // };

  return (
    <a href="https://apps.apple.com/us/app/floraltile/id6504483514" target="_blank" rel="noopener noreferrer">
      <button className="bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 text-white font-bold py-4 px-5 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mt-6 mb-6"
        target='_blank'
      >
        Download In iOS
      </button>
    </a>
  );
};


const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

export default function Home() {
  const [items, setItems] = useState(photos);
  const router = useRouter();
  const [category, setCategory] = useState("flowers");


  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(items, oldIndex, newIndex, oldIndex / 4)
    let name = category + "/m" + (Math.floor(oldIndex / 4) + 1) + "_" + (oldIndex % 4).toString(2).padStart(2, '0') + ".jpg"
    // router.push({
    //   pathname: '/tile',
    //   query: { name: category + "/m" + (Math.floor(oldIndex / 4) + 1) + "_" + (oldIndex % 4).toString(2).padStart(2, '0') + ".jpg" }
    // });


    // router.push({
    //   pathname: '/tile',
    //   query: { name: 'John', age: 30 }
    // });
    window.open(`/tile?name=${name}`, '_blank');
    // router.push(`/tile?name=${name}`)




    // router.push('/tile' + "?" + category + "/m" + (Math.floor(oldIndex / 4) + 1) + "_" + (oldIndex % 4).toString(2).padStart(2, '0') + ".jpg");
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };


  const getBackground = (index) => {
    if (index === category) {
      return "bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300"
    } else {
      return "bg-white-400"
    }

  }

  const pushCategory = (sum, category) => {
    let photos = [];
    for (let i = 1; i < sum; i++) {
      photos.push({
        src: `/spilt/${category}/m${i}_00.jpg`,
        width: 1,
        height: 1,
        title: `${category}_${i}_00.jpg`
      })
      photos.push({
        src: `/spilt/${category}/m${i}_01.jpg`,
        width: 1,
        height: 1,
        title: `${category}_${i}_01.jpg`
      })
      photos.push({
        src: `/spilt/${category}/m${i}_10.jpg`,
        width: 1,
        height: 1,
        title: `${category}_${i}_10.jpg`
      })

      photos.push({
        src: `/spilt/${category}/m${i}_11.jpg`,
        width: 1,
        height: 1,
        title: `${category}_${i}_11.jpg`
      })
    }

    setItems(photos)

  }


  // useEffect(() => {
  //   isMobile()
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12  bg-black pt-[150px]">

      <Image
        className="absolute left-[80px] top-[40px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[20px]"
        src="/logo1.jpg"
        alt="pattern tile Logo"
        width={70}
        height={70}
        priority
      />
      {/* <Link href="/tile"> */}
      <p className="absolute left-[180px] top-[50px] text-white mt-2 text-2xl mr-[600px]">FloralTile</p>
      {/* </Link> */}

      <div className="absolute right-[80px] top-[35px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[20px]">
        <GradientButton />
      </div>


      <div className="flex space-x-4">
        <button className={`${getBackground("flowers")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(49, "flowers")
          setCategory("flowers")
        }}>flowers</button>
        <button className={`${getBackground("darkflowers")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(10, "darkflowers")
          setCategory("darkflowers")
        }}>dark flowers</button>
        <button className={`${getBackground("animals")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(22, "animals")
          setCategory("animals")
        }}>animals</button>
        <button className={`${getBackground("fruits")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(18, "fruits")
          setCategory("fruits")
        }}>fruits</button>
      </div>
      <div class="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d5c5ff,transparent)]"></div></div>

      <div style={{ width: '20px', height: '20px' }}></div>

      {/* <Gallery photos={items} />; */}
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />




    </main >
  );
}

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


for (let i = 1; i < 130; i++) {
  photos.push({
    src: `/spilt/heng/${i}.png`,
    width: 1,
    height: 1,
    title: `heng_${i}.png`
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
    <a href="https://apps.apple.com/us/app/soulwanderer/id6584520522" target="_blank" rel="noopener noreferrer">
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
  const [category, setCategory] = useState("heng");


  const onSortEnd = ({ oldIndex, newIndex }) => {
    // console.log(items, oldIndex, newIndex, oldIndex / 4)
    let name = category + "/" + (oldIndex + 1) + ".png"
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
        src: `/spilt/${category}/${i}.png`,
        width: 1,
        height: 1,
        title: `${category}_${i}.png`
      })
      // photos.push({
      //   src: `/spilt/${category}/m${i}_01.jpg`,
      //   width: 1,
      //   height: 1,
      //   title: `${category}_${i}_01.jpg`
      // })
      // photos.push({
      //   src: `/spilt/${category}/m${i}_10.jpg`,
      //   width: 1,
      //   height: 1,
      //   title: `${category}_${i}_10.jpg`
      // })

      // photos.push({
      //   src: `/spilt/${category}/m${i}_11.jpg`,
      //   width: 1,
      //   height: 1,
      //   title: `${category}_${i}_11.jpg`
      // })
    }

    setItems(photos)

  }


  // useEffect(() => {
  //   isMobile()
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12  bg-black pt-[150px]">

      <p className="text-white ml-50 mr-20 mt-2 text-center">
        visual novel game, a pair of sisters are forced to land on an unknown planet due to a spaceship accident. They explore the planet, meet various people...

      </p>
      <p className="text-white ml-20 mr-20 mb-10 text-center">

        You can read the entire story in under 15 minutes, with less than 10,000 words.

        Join our protagonists as they uncover the unknown!

        You’ll experience an engaging story with beautiful illustrations, philosophical dialogues, reflections, and praise.

        Whatever you get is your unique experience
      </p>
      <Image
        className="absolute left-[80px] top-[40px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[20px]"
        src="/logo1.png"
        alt="pattern tile Logo"
        width={70}
        height={70}
        priority
      />
      {/* <Link href="/tile"> */}
      <p className="absolute left-[180px] top-[50px] text-white mt-2 text-2xl mr-[600px]">Soul Wanderer</p>
      {/* </Link> */}

      <div className="absolute right-[80px] top-[35px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[20px]">
        <GradientButton />
      </div>


      <div className="flex space-x-4">
        <button className={`${getBackground("heng")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(130, "heng")
          setCategory("heng")
        }}>Landscape Screen</button>
        <button className={`${getBackground("shu")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(46, "shu")
          setCategory("shu")
        }}>Vertical Screen</button>
        {/* <button className={`${getBackground("animals")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(22, "animals")
          setCategory("animals")
        }}>animals</button>
        <button className={`${getBackground("fruits")} text-white rounded-full hover:bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 via-orange-300 to-red-300 py-4 px-5`} onClick={() => {
          pushCategory(18, "fruits")
          setCategory("fruits")
        }}>fruits</button> */}
      </div>
      <div class="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d5c5ff,transparent)]"></div></div>

      <div style={{ width: '20px', height: '20px' }}></div>

      {/* <Gallery photos={items} />; */}
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />




    </main >
  );
}

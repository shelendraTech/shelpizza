import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";
import cardData from "../store/cardData.json";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [categories, setCategories] = useState(new Set());
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const categoriesSet = new Set();
    const foodArray = [];
    cardData.forEach((data) => {
      foodArray.push(data);
      categoriesSet.add(data.category);
    });
    setCategories(categoriesSet);
    setFoodData(foodArray);
  }, []);

  const categoryArray = [...categories];

  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto">
      {categoryArray.map((category) => (
        <div key={category}>
          <div className="text-4xl mt-10 mb-3 uppercase font-bold">
            {category}
          </div>
          <hr />
          <div className="flex flex-col items-center justify-center">
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foodData
                .filter((data) => category === data.category)
                .map((data) => (
                  <Card key={data.name} foodData={data} />
                ))}
            </div>
          </div>
        </div>
      ))}
      </div>
     
    </>
  );
}
import samsungIMG from "../IMAGES/BestSellerImgOne.svg";
import sony from "../IMAGES/BestSellerImgTwo.svg";
import sonyTwo from "../IMAGES/BestSelerImgThree.svg";
import Eastsport from "../IMAGES/BestSellerImgFour.svg";
import rolex from "../IMAGES/BestSellerImgFiveEggs.svg";

import BestSellersRatingStar from "../IMAGES/BestSellersRatingStar.svg";

import heartHovered from "../IMAGES/Hearthovered.svg";
import EyeHovered from "../IMAGES/Eye.svg";
import barHovered from "../IMAGES/Bar.svg";

const pageHeading = "Best Sellers";

const NavAssets = [
  {
    title: "Top 20",
    category: "bestseller",
    id: 1,
  },
  {
    title: "Baby",
    category: "Baby",
    id: 2,
  },
  {
    title: "Furniture",
    category: "Furniture",
    id: 3,
  },
  {
    title: "Electronic",
    category: "Electronic",
    id: 4,
  },
  {
    title: "All",
    category: "bestseller",
    id: 5,
  },
];
 
const SellerAssets = [
  {
    src: samsungIMG,
    brand: "SAMSUNG",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    initial$: "$45",
    category: "Baby",
    id: 1,
  },
  {
    src: sony,
    brand: "SONY",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "Baby",
    initial$: "$45",
    id: 2,
  },
  {
    src: sonyTwo,
    brand: "SONY",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "Furniture",
    initial$: "$45",
    id: 3,
  },
  {
    src: Eastsport,
    brand: "Eastsport",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "Furniture",
    initial$: "$45",
    id: 4,
  },
  {
    src: rolex,
    brand: "rolex",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "Electronic",
    initial$: "$45",
    id: 5,
  },
];

const hoverAssets = [
  { src: heartHovered, id: 1 },
  { src: EyeHovered, id: 2 },
  { src: barHovered, id: 3 },
];

export { pageHeading, NavAssets, SellerAssets, hoverAssets };

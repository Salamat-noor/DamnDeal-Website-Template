import heartICO from "../IMAGES/Heart.svg";
import barICON from "../IMAGES/Bar.svg";
import askQ from "../IMAGES/AskQ.svg";
import share from "../IMAGES/Share.svg";

import TruckICO from "../IMAGES/Truck.svg";
import ShippingICO from "../IMAGES/shoppingCart.svg";
import MoneyReturnICO from "../IMAGES/returnBack.svg";
import StartICO from "../IMAGES/BestSellersRatingStar.svg";
import SearchIcon from "../IMAGES/searchIco.svg";
import UnrateICO from "../IMAGES/unrateStar.svg";

import userImg from "../IMAGES/user-img.svg";

export const FAQAssets = [
  { title: "WishList", src: heartICO, id: 1 },
  { title: "Compare", src: barICON, id: 2 },
  { title: "Ask A Question", src: askQ, id: 3 },
  { title: "Share", src: share, id: 4 },
];

export const MarkeetingDetails = [
  {
    src: TruckICO,
    paraOne: "Free shipping, arrives by Thu, Jun 2 to Sacramento, 95829",
    paraTwo: "Want it faster? Add an address to see options",
    btnMore: "More options",
    id: 1,
  },
  {
    src: ShippingICO,
    paraOne: "Sold and shipped by ",
    paraTwo: "TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart",
    btnMoreStar: StartICO,
    reviews: "965 seller reviews",
    id: 2,
  },
  {
    src: MoneyReturnICO,
    paraOne: "Free 15-Day returns",
    btnMore: "Details",
    id: 1,
  },
];

export const VendorAccordionAssets = [
  {
    title: "Apple Store",
    src: StartICO,
    sellerReviews: "965 seller reviews",
    paraOne: "Fast Delivery: Ships in 1 day",
    paraTwo: "Free Cargo",
    initialprice: "$32.50",
    saledprice: "$45",
    btnText: "Go Product",
    id: 1,
  },
  {
    title: "Apple Store",
    src: StartICO,
    sellerReviews: "965 seller reviews",
    paraOne: "Fast Delivery: Ships in 1 day",
    paraTwo: "Free Cargo",
    initialprice: "$32.50",
    saledprice: "$45",
    btnText: "Go Product",
    id: 2,
  },
  {
    title: "Apple Store",
    src: StartICO,
    sellerReviews: "965 seller reviews",
    paraOne: "Fast Delivery: Ships in 1 day",
    paraTwo: "Free Cargo",
    initialprice: "$32.50",
    saledprice: "$45",
    btnText: "Go Product",
    id: 3,
  },
  {
    title: "Apple Store",
    src: StartICO,
    sellerReviews: "965 seller reviews",
    paraOne: "Fast Delivery: Ships in 1 day",
    paraTwo: "Free Cargo",
    initialprice: "$32.50",
    saledprice: "$45",
    btnText: "Go Product",
    id: 4,
  },
];

export const search_Icon = SearchIcon;
export const StartICON = StartICO;
export const UnrateStar = UnrateICO;

export const HowManyReviews = {
  howManyReviews: "10 Review For This Product",
  userProfPic: userImg,
  starIcon: StartICO,
  textWithStar: "A high performance Mac with a long lasting battery",
  profNamewithReview: "Reviewed by Ali Tufan - April 27, 2022",
  userCommentone: `This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support. This Amazon listing has two different processors, the M1 Pro (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one the Pro, the other the Max. I got the base Pro, but much of what I'll say applies to both, and I'll have some comments specifically about the Max too. (MBP below = MacBook Pro.)`,
  userCommentTwo: `This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support. This Amazon listing has two different processors, the M1 Pro (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one the Pro, the other the Max. I got the base Pro, but much of what I'll say applies to both, and I'll have some comments specifically about the Max too. (MBP below = MacBook Pro.)`,
};

export const fourBoxesForUser = "#041E42";

// ! Details & Specs Table Data ---------
export const columns = [
  {
    title: "",
    dataIndex: "Brand",
    key: "Brand",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "",
    dataIndex: "BrandName",
    key: "age",
    render: (text) => <p>{text}</p>,
  },
];

// ! Details & Specs Table Data ---------
export const data = [
  {
    key: "1",
    Brand: "Brand",
    BrandName: "Apple",
  },
  {
    key: "2",
    Brand: "Model Name",
    BrandName: "MacBook Pro",
  },
  {
    key: "3",
    Brand: "Screen Size",
    BrandName: "16.2 Inches",
  },
  {
    key: "4",
    Brand: "Model Name",
    BrandName: "MacBook Pro",
  },
  {
    key: "5",
    Brand: "Color Space",
    BrandName: "Space Gray",
  },
  {
    key: "6",
    Brand: "Hard Disk Size",
    BrandName: "1 TB",
  },
  {
    key: "7",
    Brand: "CPU Model",
    BrandName: "Apple M1",
  },
  {
    key: "8",
    Brand: "Ram Memory Installed Size",
    BrandName: "16 GB",
  },
  {
    key: "9",
    Brand: "Operating System",
    BrandName: "Mac OSo",
  },
  {
    key: "10",
    Brand: " Graphics Card Description",
    BrandName: "Integrated",
  },
  {
    key: "10",
    Brand: "Graphics Coprocessor",
    BrandName: "M1 Pro",
  },
];

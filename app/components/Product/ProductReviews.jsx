import Image from "next/image"
import StarIcon from "../Icons/StarIcon"
import Img1 from '@/public/Images/image-4.webp'
import Img2 from '@/public/Images/image-6.webp'
import VerifiedIcon from "../Icons/VerifiedIcon"
import ThumbsUpIcon from "../Icons/ThumbsUpIcons"
import ThreeDotIcon from "../Icons/ThreeDotIcon"
import Divider from "../Divider"
import { Roboto } from "@/app/fonts/fonts"

function ProductReviews() {
    return (
        <div className="flex flex-col mx-6 gap-4">
            <p className="text-base font-bold">Customer Reviews (800)</p>
            <div className="flex flex-col mx-2">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 pt-2">
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} fill="#D9D9D9" /></span>
                    </div>
                    <p className="text-sm font-bold">Highly Recommended</p>
                    <p className="text-xs   text-textGray1">
                        Ut aliquet venenatis elit, at condimentum mi bibendum non. Sed vitae dui quis neque fermentum tincidunt. Quisque id aliquam magna. Proin sit amet sagittis sem...
                        <button className="text-primary underline">See More</button>
                    </p>
                    <div className="flex gap-2 overflow-x-scroll max-w-full">
                        <Image className="w-[100px] h-[100px]" src={Img1} alt="img-1" />
                        <Image className="w-[100px] h-[100px]" src={Img2} alt="img-2" />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium">Sofia</p>
                            <p className="flex items-center gap-1"><VerifiedIcon /><span className="text-[10px] mt-1 text-textGray1">Verified Buyer, 20th July, 2024</span></p>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-xs  text-textGray1">Helpful?</p>
                            <p className="flex gap-1 items-end">
                                <ThumbsUpIcon /><span className="text-xs">4</span>
                            </p>
                            <button>
                                <ThreeDotIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 pt-2">
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} fill="#D9D9D9" /></span>
                    </div>

                    <p className="text-sm font-bold">Nice Buy</p>
                    <p className="text-xs   text-textGray1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  tempor incididun...
                        <button className="text-primary underline">See More</button>
                    </p>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium">Esther Howard</p>
                            <p className="flex items-center gap-1"><VerifiedIcon /><span className="text-[10px] mt-1 text-textGray1">Verified Buyer, 20th July, 2024</span></p>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-xs  text-textGray1">Helpful?</p>
                            <p className="flex gap-1 items-end">
                                <ThumbsUpIcon /><span className="text-xs">3</span>
                            </p>
                            <button>
                                <ThreeDotIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 pt-2">
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} /></span>
                        <span><StarIcon width={20} height={20} fill="#D9D9D9" /></span>
                    </div>

                    <p className="text-sm font-bold">Splendid Purchase</p>
                    <p className="text-xs   text-textGray1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  tempor incididun...
                        <button className="text-primary underline">See More</button>
                    </p>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium">Mary Magdalen</p>
                            <p className="flex items-center gap-1"><VerifiedIcon /><span className="text-[10px] mt-1 text-textGray1">Verified Buyer, 20th July, 2024</span></p>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-xs  text-textGray1">Helpful?</p>
                            <p className="flex gap-1 items-end">
                                <ThumbsUpIcon /><span className="text-xs">3</span>
                            </p>
                            <button>
                                <ThreeDotIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <button className={`${Roboto.className} w-fit mx-auto mt-12 px-8 py-2 border border-secondary text-sm font-medium`}>
                    SEE ALL REVIEWS
                </button>
            </div>
        </div>
    )
}

export default ProductReviews

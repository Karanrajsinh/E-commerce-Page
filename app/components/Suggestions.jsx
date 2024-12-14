import Image from "next/image"
import { DMSerifDisplay, Roboto } from "../fonts/fonts"
import Img1 from '@/public/Images/suggest-1.webp'
import Img2 from '@/public/Images/suggest-2.webp'
import Img3 from '@/public/Images/suggest-3.webp'
import Img4 from '@/public/Images/suggest-4.webp'
import HeartIcon from "./Icons/HeartIcon"
function Suggestions() {
    return (
        <div className="flex  flex-col mx-6 gap-6">
            <p className={`text-2xl text-center border-b border-primary px-2 py-4 ${DMSerifDisplay.className}`}>You Might Also Like</p>
            <div className="flex justify-between gap-3 ">
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img1} alt="img-1" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img2} alt="img-2" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
            </div>
            <div className="flex justify-between gap-3 ">
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img3} alt="img-3" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img4} alt="img-4" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
            </div>
            <div className="flex justify-between gap-3 ">
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img1} alt="img-1" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img2} alt="img-2" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
            </div>
            <div className="flex justify-between gap-3 ">
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img3} alt="img-3" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Image className="w-[156px] h-[184px]" src={Img4} alt="img-4" />
                        <span className="absolute top-2 right-2">
                            <HeartIcon />
                        </span>
                    </div>
                    <p className="text-sm font-medium">₹1190</p>
                    <p className="text-xs text-textGray1">Rose Corset</p>
                </div>
            </div>
            <div className="flex sticky bottom-0 z-[200] bg-white gap-2 justify-between items-center px-2 py-4">
                <HeartIcon widht={24} height={24} stroke="black" />
                <button className={`${Roboto.className} bg-secondary text-sm text-white px-8 py-2`}>ADD TO BAG</button>
                <button className={`${Roboto.className} bg-white text-sm border border-secondary px-8 py-2`}>BUY NOW</button>
            </div>
        </div>
    )
}

export default Suggestions

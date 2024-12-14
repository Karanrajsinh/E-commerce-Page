import Image from "next/image"
import SlideImg from '@/public/Images/image.webp'
import StarIcon from "../Icons/StarIcon"
function ProductImageCarousel() {
    return (
        <>
            <div className="relative">

                <Image src={SlideImg} alt="Printed Slip Dress " />
                <div className="flex absolute gap-2 bg-white bottom-4 left-4 p-2 text-xs rounded-full">
                    <div className="flex border-r border-border px-2 items-center gap-1"><span>3.9</span><StarIcon width={16} height={16} /></div>
                    <p>237 Reviews</p>
                </div>

            </div>
            <div className="flex justify-center items-center gap-2 py-3">
                <button><div className="w-3 h-3 bg-primary rounded-full"></div></button>
                <button><div className="w-2 h-2 bg-textGray2 rounded-full"></div></button>
                <button><div className="w-2 h-2 bg-textGray2 rounded-full"></div></button>
                <button><div className="w-2 h-2 bg-textGray2 rounded-full"></div></button>
            </div>
        </>
    )
}


export default ProductImageCarousel
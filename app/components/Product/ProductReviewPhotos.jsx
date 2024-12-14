import Image from "next/image"
import Img1 from '@/public/Images/image-1.webp'
import Img2 from '@/public/Images/image-2.webp'
import Img3 from '@/public/Images/image-3.webp'
import Img4 from '@/public/Images/image-4.webp'
import Img5 from '@/public/Images/image-5.webp'

function ProductReviewPhotos() {
    return (
        <div className="flex flex-col gap-4 mx-6">
            <p className="text-base font-bold">Review Photos (150)</p>
            <div className="flex max-w-full overflow-x-scroll gap-1">
                <Image className="w-[100px] h-[100px]" src={Img1} alt="img-1" />
                <Image className="w-[100px] h-[100px]" src={Img2} alt="img-2" />
                <Image className="w-[100px] h-[100px]" src={Img3} alt="img-3" />
                <Image className="w-[100px] h-[100px]" src={Img4} alt="img-4" />
                <Image className="w-[100px] h-[100px]" src={Img5} alt="img-5" />
            </div>
        </div>
    )
}

export default ProductReviewPhotos

import StarIcon from "../Icons/StarIcon"

function ProductRatingsAndRreviewsOverview() {
    return (
        <div className="flex flex-col mx-6 gap-6">
            <div className="text-lg flex ">
                <div className="flex justify-between w-full">
                    <p className="font-bold">
                        Ratings & Reviews
                    </p>
                    <button className="text-primary font-medium text-sm underline">Write Review</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-2xl">4.0/5</p>
                <div className="flex gap-1">
                    <span><StarIcon width={24} height={24} /></span>
                    <span><StarIcon width={24} height={24} /></span>
                    <span><StarIcon width={24} height={24} /></span>
                    <span><StarIcon width={24} height={24} /></span>
                    <span><StarIcon width={24} height={24} fill="#D9D9D9" /></span>
                </div>
                <p className="text-xs text-textGray1">Based on 237 Star Ratings</p>
            </div>
        </div>
    )
}

export default ProductRatingsAndRreviewsOverview

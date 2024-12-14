import RatingCircle from "../Icons/NumericRatingIcon"
import PercentageRatingIcon from "../Icons/PercentageRatingIcon"
import SizeRatingIcon from "../Icons/SizeRatingIcon"

function ProductInsights() {
    return (
        <div className="flex flex-col items-center justify-center mx-6 gap-10">
            <div className="flex justify-between w-[80%]">
                <div className="flex flex-col gap-2 w-[40%] items-center" >
                    <SizeRatingIcon progress={90} />
                    <p className="font-medium text-sm">Sizing</p>
                    <p className="text-xs text-textGray1">True To Size</p>
                </div>
                <div className="flex flex-col gap-2 w-[40%] items-center" >
                    <RatingCircle progress={90} rating={4.5} />
                    <p className="font-medium text-sm">Quality</p>
                    <p className="text-xs text-textGray1">Out Of 5</p>
                </div>
            </div>
            <div className="flex justify-between w-[80%]">
                <div className="flex flex-col gap-2 w-[40%] items-center" >
                    <RatingCircle progress={77} rating={4.1} />
                    <p className="font-medium text-sm">Fit</p>
                    <p className="text-xs text-textGray1">Out of 5</p>
                </div>
                <div className="flex flex-col gap-2 w-[40%] justify-center items-center" >
                    <PercentageRatingIcon progress={87} />
                    <p className="font-medium text-center text-sm">Most Recommend</p>
                    <p className="text-xs text-textGray1 text-center">160 Recommendes </p>
                </div>
            </div>

        </div>
    )
}

export default ProductInsights

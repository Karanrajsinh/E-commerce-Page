import DownArrowIcon from "../Icons/DownArrowIcon"

function ProductAbout() {
    return (
        <div className="flex justify-between mx-6">
            <p className="text-sm font-bold">About The Product</p>
            <button className="w-6 h-6"><DownArrowIcon /></button>
        </div>
    )
}

export default ProductAbout

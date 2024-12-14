import TickIcon from "../Icons/TickIcon"

function ProductCustomization() {
    return (
        <div className="mx-6 flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="text-xs flex gap-1"><p className="font-bold">COLOR:</p><p className=" font-medium">Persian Rose</p></div>
                <div className="my-2 flex gap-4">
                    <button className="bg-primary rounded-full flex items-center justify-center w-10 h-10"><TickIcon /></button>
                    <button className="bg-secondary rounded-full flex items-center justify-center w-10 h-10"></button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-xs flex ">
                    <div className="flex justify-between w-full">
                        <p className="flex gap-1">
                            <span className="font-bold">SIZE:</span>
                            <span className="font-medium text-textGray1">Medium</span>
                        </p>
                        <button className="text-primary underline">Size Guide</button>
                    </div>
                </div>
                <div className="my-2 flex gap-4">
                    <button className="bg-noStock text-textGray1 w-12 h-10">XS</button>
                    <button className=" border border-borderDefault w-12 h-10">S</button>
                    <button className=" border-2 border-borderActive font-medium w-12 h-10">M</button>
                    <button className=" border border-borderDefault w-12 h-10">L</button>
                    <button className=" border border-borderDefault w-12 h-10">XL</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCustomization

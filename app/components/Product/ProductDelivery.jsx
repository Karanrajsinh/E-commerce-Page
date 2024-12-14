import { Roboto } from "@/app/fonts/fonts"
import CashIcon from "../Icons/CashIcon"
import TruckIcon from "../Icons/Truck"

function ProductDelivery() {
    return (
        <div className="flex flex-col mx-6 gap-4">
            <div className="text-xs flex gap-1"><p className="font-bold">DELIVER TO:</p><p className="text-textGray1 font-medium">Mumbai</p></div>

            <form className="flex " action="submit">
                <input className="p-2 w-full border border-[#BDBDBD]" type="text" defaultValue={'4000001'} />
                <button className={`bg-secondary py-2 px-8 text-white ${Roboto.className}`}>Check</button>
            </form>
            <div className="flex items-center gap-2">
                <CashIcon />
                <p className="text-xs text-textGray1">
                    Cash On Delivery Available
                </p>
            </div>
            <div className="flex flex-col gap-1 ">
                <div className="flex items-center gap-2">
                    <TruckIcon />
                    <p className="text-xs font-bold">Standard Delivery :</p>
                </div>
                <div className="text-xs ml-6 text-textGray1">
                    <p>Free Shipping on this product. Save ₹99 </p>
                    <p>Estimated Delivery by <span className="font-bold text-secondary">Tue, 26 Mar - Thu 28 Mar</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductDelivery

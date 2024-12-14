function ProductBio() {
    return (
        <div className="flex flex-col mx-6 gap-2">
            <p className="text-lg  font-medium">Printed Slip Dress</p>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">₹1434</p>
                <p className="text-xs text-textGray2 font-medium line-through">₹2300</p>
                <p className="bg-primary text-white text-[10px] font-medium p-1">- 40%</p>
            </div>
            <p className="text-textGray2 text-xs">Inclusive of all taxes</p>
            <p className="text-textGray1 text-xs">
                Short slip dress made of satin, featuring a flared A-line silhouette with a printed design detail. Sleeveless with spaghetti straps for a feminine look.
            </p>
        </div>
    )
}

export default ProductBio
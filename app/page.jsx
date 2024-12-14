import Divider from "./components/Divider"
import ProductImageCarousel from "./components/Product/ProductImgCarousel"
import Navbar from "./components/Navbar"
import ProductAbout from "./components/Product/ProductAbout"
import ProductBio from "./components/Product/ProductBio"
import ProductCustomization from "./components/Product/ProductCustomization"
import ProductDelivery from "./components/Product/ProductDelivery"
import ProductServicePolicy from "./components/Product/ProductServicePolicy"
import ProductWashCareInfo from "./components/Product/ProductWashCareInfo"
import ProductRatingsAndRreviewsOverview from "./components/Product/ProductRatingsAndRreviewsOverview"
import ProductInsights from "./components/Product/ProductInsights"
import ProductReviewPhotos from "./components/Product/ProductReviewPhotos"
import ProductReviews from "./components/Product/ProductReviews"
import Suggestions from "./components/Suggestions"

function Homepage() {
    return (
        <>
            <Navbar />
            <ProductImageCarousel />
            <ProductBio />
            <Divider />
            <ProductCustomization />
            <Divider />
            <ProductDelivery />
            <Divider />
            <ProductAbout />
            <Divider />
            <ProductWashCareInfo />
            <Divider />
            <ProductServicePolicy />
            <Divider />
            <ProductRatingsAndRreviewsOverview />
            <Divider />
            <ProductInsights />
            <Divider />
            <ProductReviewPhotos />
            <Divider />
            <ProductReviews />
            <hr className="border border-divider w-screen my-6" />
            <Suggestions />
        </>
    )
}

export default Homepage
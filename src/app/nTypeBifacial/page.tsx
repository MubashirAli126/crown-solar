import ProductBanner from "@/components/NTypeBifacial/ProductBanner"
import Faqs from "@/components/NTypeBifacial/FAQs"
import Cta from "@/components/Cta"
import CollapseComp from '@/components/NTypeBifacial/CollapseComp'

function page() {
  return (
    <>
      <ProductBanner />
      <CollapseComp />
      <Faqs />
      <Cta />
    </>
  )
}

export default page
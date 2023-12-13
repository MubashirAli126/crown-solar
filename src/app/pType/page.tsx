import ProductBanner from "@/components/PType/ProductBanner"
import Faqs from "@/components/PType/FAQs"
import Cta from "@/components/Cta"
import CollapseComp from '@/components/PType/CollapseComp'

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
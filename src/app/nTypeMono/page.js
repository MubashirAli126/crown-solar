import ProductBanner from "@/components/NTypeMono/ProductBanner"
import Faqs from "@/components/NTypeMono/FAQs"
import Cta from "@/components/Cta"
import CollapseComp from '@/components/NTypeMono/CollapseComp'

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
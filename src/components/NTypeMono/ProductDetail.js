import Image from 'next/image'
import React from 'react'
import slider10 from '../../../public/images/solar/NTypeMonoBlueprint.png'

function ProductDetail() {
  return (
    <>
      <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm h-5/6">
        <div className="flex justify-between lg:text-left" data-aos="zoom-out">

          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-5 p-4'>
            <div className="flex flex-col justify-center">
              {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
              <h3 className="lg:text-2xl ml-4 text-xl mt-4 text-black font-semibold">Specifications</h3>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <tbody>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Weight</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">27kg</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Dimensions</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">2279mm*1134mm*30mm</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Cell Dimensions</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">182*182mm</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Cell Amount</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">72*2 pcs</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Maximum System Voltage</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">1500V</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Junction Box</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">IP68</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Frame</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">Aluminum Alloy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Cable</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">4mm2, N 1400mm/P 1400mm for Horizontal installation</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Connector</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">MC4 compatible</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">Application Level</td>
                            <td className="whitespace-nowrap text-sm px-6 py-4">Class A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Image src={slider10} alt="card img" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-left text-left">
          {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
          <h3 className="lg:text-2xl ml-4 text-xl mt-4 text-black font-semibold">Electrical Parameters At STC</h3>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Power</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">565W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">570W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">575W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">580W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">585W</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Open Circuit Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">50.68V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">50.82V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">50.96V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">51.09V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">51.22V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Short Circuit Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.21A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.29A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.37A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.45A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.53A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximun Power Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">41.99V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">42.14V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">42.29V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">42.42V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">42.55V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximum Power Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.46A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.53A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.60A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.67A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.74A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Module Efficiency</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">21.86%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">22.06%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">22.25%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">22.44%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">22.64%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-left text-left">
          {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
          <h3 className="lg:text-2xl ml-4 text-xl mt-4 text-black font-semibold">Electrical Parameters At NMOT</h3>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Power</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">425W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">429W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">433W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">436W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">440W</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Open Circuit Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">48.14V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">48.28V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">48.41V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">48.54V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">48.67V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Short Circuit Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.47A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.53A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.60A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.67A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.73A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximun Power Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.48V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.61V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.70V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.81V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.92V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximum Power Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.77A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.83A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.90A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.96A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.02A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Module Efficiency</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.44%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.60%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.75%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.87%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">17.03%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductDetail
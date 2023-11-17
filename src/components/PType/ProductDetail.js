import Image from 'next/image'
import React from 'react'
import slider10 from '../../../public/images/solar/PTypeMonoBlueprint.png'

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
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm font-light">
                        <tbody>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Weight</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">27kg</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Dimensions</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">2279mm*1134mm*30mm</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Cell Dimensions</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">182*182mm</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Cell Amount</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">72*2 pcs</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Maximum System Voltage</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">1500V</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Junction Box</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">IP68</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Frame</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">Aluminum Alloy</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Cable</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">4mm2, N 1400mm/P 1400mm for Horizontal installation</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Connector</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">MC4 compatible</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-300">
                            <td className="whitespace-pre-line px-6 py-4 text-sm font-medium">Application Level</td>
                            <td className="whitespace-pre-line text-sm px-6 py-4">Class A</td>
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
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Power</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">540W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">545W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">550W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">555W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">560W</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Open Circuit Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">49.40V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">49.60V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">49.80V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">50.00V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">50.20V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Short Circuit Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.87A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.93A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.99A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.05A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">14.11A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximun Power Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">41.20V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">41.40V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">41.60V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">41.80V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">42.00V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximum Power Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.11A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.17A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.23A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.29A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">13.33A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Module Efficiency</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">20.90%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">21.09%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">21.28%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">21.48%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">21.67%</td>
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
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Power</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">404W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">408W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">412W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">416W</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">419W</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Open Circuit Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">46.44V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">46.62V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">46.81V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">47.00V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">47.19V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Short Circuit Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.29A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.35A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.40A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.46A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">11.49A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximun Power Voltage</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">38.33V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">38.49V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">38.69V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">38.88V</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">39.05V</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Maximum Power Current</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.54A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.60A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.65A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.70A</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">10.73A</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-300">
                        <td className="whitespace-nowrap px-6 py-4 text-base font-medium">Module Efficiency</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">15.63%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">15.79%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">15.94%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.10%</td>
                        <td className="whitespace-nowrap text-sm px-6 py-4">16.21%</td>
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
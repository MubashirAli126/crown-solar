
function InstallmentComponent() {
    return (
        <>
            <section>
                <div className="m-auto p-4 md:px-40 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-4/5 flex flex-col justify-center">
                            {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div> */}
                            <h3 className="text-xl mt-4 mr-4 text-black font-medium">Easy Installation <br />
                                <span className='text-2xl font-semibold text-green-700'>Installation and hands-on experience of the entire solution can be easily monitored and deployed</span></h3>
                            <div>
                                <p className='my-3 mr-4 text-base text-black font-medium'>
                                    With dedicated warranty services and expert solutions, you will never be confused or left baffled with the right leadership and guidance to install solar panels on desired infrastructure. The durability of the panels are tougher than what is generally offered in Pakistan which makes Crown Solar Product Tier 1 grade.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <video className="rounded-lg" src=('/videos/solarFix.mp4') autoPlay loop muted />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstallmentComponent

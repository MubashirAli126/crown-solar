
function InstallmentComponent() {
    return (
        <>
            <div className="m-auto max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl p-4 xl:p-8 lg:p-8 h-5/6">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className=" justify-center">
                        <video className="rounded-lg" src='videos/solarFix.mp4' autoPlay loop muted />
                    </div>
                    <div className="justify-center self-center" data-aos="fade-left">
                        <h3 className="lg:text-xl text-lg mt-4 text-black font-medium">Easy Installation <br />
                            <span className='lg:text-2xl text-xl font-semibold text-green-700'>Installation and hands-on experience of the entire solution can be easily monitored and deployed</span></h3>
                        <div>
                            <p className='my-3 text-base text-black font-medium'>
                                With dedicated warranty services and expert solutions, you will never be confused or left baffled with the right leadership and guidance to install solar panels on desired infrastructure. The durability of the panels are tougher than what is generally offered in Pakistan which makes Crown Solar Product Tier 1 grade.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstallmentComponent

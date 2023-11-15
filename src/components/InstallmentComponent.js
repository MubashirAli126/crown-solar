
function InstallmentComponent() {
    return (
        <>
            <div className="m-auto max-w-screen-xl max-w-screen-lg max-w-screen-sm p-4 md:px-4 h-5/6">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="justify-center self-center">
                        <h3 className="lg:text-xl text-lg mt-4 text-black font-medium">Easy Installation <br />
                            <span className='lg:text-2xl text-xl font-semibold text-green-700'>Installation and hands-on experience of the entire solution can be easily monitored and deployed</span></h3>
                        <div>
                            <p className='my-3 text-base text-black font-medium'>
                                With dedicated warranty services and expert solutions, you will never be confused or left baffled with the right leadership and guidance to install solar panels on desired infrastructure. The durability of the panels are tougher than what is generally offered in Pakistan which makes Crown Solar Product Tier 1 grade.
                            </p>

                        </div>
                    </div>
                    <div className=" justify-center">
                        <video className="rounded-lg" src='videos/solarFix.mp4' autoPlay loop muted />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstallmentComponent

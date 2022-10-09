const Hero2 = () => {
    return(
        <div className="hero min-h-screen bg-base-200 bg-slate-400">
             <div className="btn btn-disabled bg-zinc-700 text-white mb-auto mt-20">
                <h1 className="text-4xl md:text-5xl font-bold mr-auto">Stay Here</h1>
            </div> 
        <div className="hero-content flex-col lg:flex-row-reverse m-[130px]">
            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <div className="grid grod-cols-1 md:grid-cols-2  gap-4">
                <div className="card">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p className="break-words">If a dog chews shoes whose shoes does he chooose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-auto">Buy Now</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="card">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p className="break-words">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-auto">Buy Now</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="card">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p className="break-words">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-auto">Buy Now</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="card">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p className="break-words">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-auto">Buy Now</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hero2
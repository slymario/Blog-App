

const HomePosts = () => {
    return (
        <div className="w-full flex mt-8 space-x-4">
            {/* LEFT */}
            <div className="w-[35%] h-[-200px] flex justify-center items-center">
                <img src="https://via.placeholder.com/150" alt="" className="h-full w-full object-cover"/>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font:bold md:mb-2 mb-1 md:text-2xl">
                    10 uses of artificial inteligence in day to day life
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                    <p>@slymario</p>
                    <div className="flex space-x-2">
                        <p>26/01/24</p>
                        <p>16:45</p>
                    </div>
                </div>
                <p className="text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum vitae vel omnis porro mollitia dolor, cum totam eligendi in sit obcaecati voluptatibus, hic tenetur veniam perspiciatis maiores nulla quo animi.</p>
            </div>
        </div>
    )
}

export default HomePosts
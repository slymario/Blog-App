import Comments from "../components/Comments";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const PostDetails = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">
                    10 uses of artificial inteligence in day to day life
                    </h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><FiEdit3 /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@slymario</p>
                        <div className="flex space-x-2">
                            <p>26/01/24</p>
                            <p>16:45</p>
                        </div>
                </div>
                <img src="https://via.placeholder.com/150" alt="" className="w-full mx-auto mt-8"/>
                <p className="mx-auto mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum soluta molestias quod, atque reprehenderit a magni doloribus maiores corporis quas nulla provident autem ratione voluptatibus fuga corrupti. Fuga totam eligendi quo deleniti maiores illum nesciunt illo deserunt voluptatem aliquid. Quae harum rerum mollitia ad aliquid architecto nisi doloremque eaque temporibus, ab excepturi non quasi et totam laborum voluptas voluptates. Harum labore, laboriosam et quam dolore in est quisquam ea id eveniet corrupti illum eius quos nobis voluptatibus fugiat obcaecati. Hic.</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Dark Humour</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Humour</div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
                    <Comments/>
                    <Comments/>
                </div>
                {/* WRITE A COMMENT */}
                <div className="w-full flex flex-col mt-4 md:flex-row space-x-4">
                    <input className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" type="text" placeholder="Write a comment"/>
                    <button className="bg-black text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-md">Add Comment</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PostDetails
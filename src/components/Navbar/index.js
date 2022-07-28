import "./style.css"
import { navList } from "../../const/StaticData";
import { binar_icon } from "../../asset";

const Navbar = () => {   
    return (
        <>
        {/* <div className="navbar-body">
            <div className="navbar-row">
            </div>
            <div className="nav-list">
                {
                    navList.map((item) => (
                        <a class ="text text-black" href = {item.id}>{item.text}</a>
                    ))
                }
            </div>
        </div> */}
        
        <nav class="bg-[#F1F3FF] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div class="flex items-center">
                <img src={binar_icon} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#F1F3FF] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {
                    navList.map((item) => (
                        <li>
                        <a class ="text text-black" href = {item.id}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
        </nav>

        </>

        
    )
}

export default Navbar;

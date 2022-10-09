const Navbar = () => {
    return(
  <div className="navbar bg-zinc-400 ">
  <div className="flex">
    <a className="btn btn-outline normal-case text-xl"><b> <span className="text-orange-700 ">LA</span> <span className="text-sky-700">REACT</span></b></a>
  </div>
  <div className="flex-1 hidden lg:inline">
  <a className="btn btn-ghost normal-case text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg><span className="text-teal-700">Home</span></a> 
  <a className="btn btn-ghost normal-case text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 text-rose-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg><span className="text-rose-700">News</span></a> 
  <a className="btn btn-ghost normal-case text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 text-fuchsia-700" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg><span className="text-fuchsia-700">AboutUs</span></a> 
  </div>
  <div className="flex-none ml-auto gap-2">
    <div className="form-control">
      <input type="text" placeholder="S earch" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li className="lg:hidden"><a>Home</a></li>
      <li className="lg:hidden"><a>News</a></li>
      <li className="lg:hidden"><a>AboutUs</a></li>
      <hr className="lg:hidden border border-t-2 mx-2" />
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li> 
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}

export default Navbar
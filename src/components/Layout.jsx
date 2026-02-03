import Navbar from './Navbar'

function Layout( { children } ){

    return(
          
        <div className="parent-container flex flex-col">
            <Navbar/>
            <main className="content-body flex-grow">
                { children }
            </main>
            <div className="footer text-center p-[10px] md:mt-[40px]">
                <p>© Grace Ayomide Orji {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Layout
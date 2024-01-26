import { useState } from "react"
import Dashboard from "../Dashboard"
import Switcher from "../Switcher"
import OverviewBoard from "../OverviewBoard"

function Main() {

    const [isActive, setIsActive] = useState(false)

    const clickHandle = () => {
        setIsActive(current => !current)
    }
    
    const buttonClass = "w-11 h-6 bg-slate-400 rounded-full flex items-center p-0.5 cursor-pointer hover:bg-gradient-to-r hover:from-buttom-1 hover:to-buttom-2 transition-all ease-in-out duration-500"
    const innerButton = "w-5 h-5 rounded-full transition-all ease-in-out duration-500"
    const pageBg = "w-full h-full flex justify-center items-center py-16 px-36 max-md:px-64 max-sm:px-52 max-mobile:px-16 transition-all ease-in-out duration-500"

    return(
        <main>
            <div className={isActive ? pageBg + " bg-white" : pageBg + " bg-slate-950"} >
                <div className={isActive ? "flex flex-col gap-6" : "flex flex-col gap-6" + ' text-white'}>
                    <div className="flex justify-between items-center max-md:flex-col max-md:justify-start max-md:items-start">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-2xl max-md:text-lg font-bold">Social Media Dashboard</h1>
                            <b className="text-xs text-slate-500">Total Followers: 23,004</b>
                        </div>
                        <hr className="bg-slate-300 md:w-full md:hidden visible border-xs" />
                        <Switcher onClick={clickHandle}
                        className1={isActive ?  buttonClass + " justify-end" : buttonClass + ' justify-start'}
                        className2={isActive ?  innerButton + " bg-white" : innerButton + " bg-blue-950"} />
                    </div>
                    <Dashboard background={isActive ? 'bg-slate-200' : 'bg-blue-950'}/>
                    <b className="text-slate-500">Overview - Today</b>
                    <OverviewBoard background={isActive ? 'bg-slate-200' : 'bg-blue-950'} />
                </div>
            </div>
        </main>
    )
}
export default Main

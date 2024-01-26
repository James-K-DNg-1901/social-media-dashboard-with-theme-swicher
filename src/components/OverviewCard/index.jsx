function OverviewCard(props) {
    return(
        <div className={props.background + " w-56 h-24 py-4 px-6 rounded-md flex flex-col justify-between cursor-pointer hover:bg-slate-300"}>
            <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
                {props.title}
                <img src={props.icon} alt="icon" />
            </div>
            <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold">
                    {props.number}
                </h3>
                <div className={props.rangeClass}>
                    <img src={props.arrow} alt="arrow" />
                    {props.range}%
                </div>
            </div>
        </div>
    )
}
export default OverviewCard
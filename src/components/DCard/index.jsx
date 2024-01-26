function DCard(props) {
    return(
        <div className={props.mainClass}>
            <div className={props.background + " h-full rounded-b-sm flex flex-col justify-between items-center py-8 hover:bg-slate-300 cursor-pointer"}>
                <div className="text-slate-500 flex justify-center items-center gap-2 text-xs font-bold">
                    <img src={props.cardIcon} alt='icon' />
                    {props.account}
                </div>
                <div>
                    <h1 className="text-4xl font-bold">
                        {props.number}
                    </h1>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                        {props.discrip}
                    </p>
                </div>
                <div className={props.rangeClass}>
                    <img src={props.arrow} alt="arrow" />
                    {props.timeRange} Today
                </div>
            </div>
        </div>
    )
}
export default DCard

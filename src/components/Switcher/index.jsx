function Switcher(props) {
    return(
        <div className="text-xs text-slate-400 font-bold flex justify-center max-md:gap-28 items-center gap-2">
            Dark Mode
            <div id="SwitcherButton" 
                onClick={props.onClick}
                className={props.className1}>
                <div className={props.className2}></div>
            </div>
        </div>
    )
}

export default Switcher
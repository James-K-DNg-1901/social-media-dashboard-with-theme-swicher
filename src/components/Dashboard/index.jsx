import DCard from "../DCard"
import iconFacebook from '../../assets/icon-facebook.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconYoutube from '../../assets/icon-youtube.svg'
import arrowUp from '../../assets/icon-up.svg'
import arrowDown from '../../assets/icon-down.svg'

function Dashboard(props) {

    const dashboardCards = [
        {
            id: 1,
            mainClass: "bg-Facebook w-56 h-48 pt-1.5 rounded-md",
            cardIcon: iconFacebook,
            account: '@nathanf',
            number: 1987,
            discrip: 'followers',
            rangeClass: "text-Lime-Green flex justify-center items-center gap-1 text-xs font-bold",
            arrow: arrowUp,
            timeRange: 12,
        },
        {
            id: 2,
            mainClass: "bg-Twitter w-56 h-48 pt-1.5 rounded-md",
            cardIcon: iconTwitter,
            account: '@nathanf',
            number: 1044,
            discrip: 'followers',
            rangeClass: "text-Lime-Green flex justify-center items-center gap-1 text-xs font-bold",
            arrow: arrowUp,
            timeRange: 99,
        },
        {
            id: 3,
            mainClass: "bg-gradient-to-r from-Instagram-1 to-Instagram-2 w-56 h-48 pt-1.5 rounded-md",
            cardIcon: iconInstagram,
            account: '@nathanf',
            number: '11k',
            discrip: 'followers',
            rangeClass: "text-Lime-Green flex justify-center items-center gap-1 text-xs font-bold",
            arrow: arrowUp,
            timeRange: 1099,
        },
        {
            id: 4,
            mainClass: "bg-YouTube w-56 h-48 pt-1.5 rounded-md",
            cardIcon: iconYoutube,
            account: '@nathanf',
            number: 8239,
            discrip: 'subscribers',
            rangeClass: "text-YouTube flex justify-center items-center gap-1 text-xs font-bold",
            arrow: arrowDown,
            timeRange: 144,
        },
    ]

    return (
        <div className="flex gap-6 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3">
            {dashboardCards.map( dashboardCards => (
                <DCard
                    key={dashboardCards.id}
                    mainClass={dashboardCards.mainClass}
                    background={props.background}
                    cardIcon={dashboardCards.cardIcon}
                    account={dashboardCards.account}
                    number={dashboardCards.number}
                    discrip={dashboardCards.discrip}
                    rangeClass={dashboardCards.rangeClass}
                    arrow={dashboardCards.arrow}
                    timeRange={dashboardCards.timeRange}
                />
            ))}
        </div>
    )
}
export default Dashboard
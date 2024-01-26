import OverviewCard from "../OverviewCard"
import iconFacebook from "../../assets/icon-facebook.svg"
import iconInstagram from "../../assets/icon-instagram.svg"
import iconTwitter from "../../assets/icon-twitter.svg"
import iconYoutube from "../../assets/icon-youtube.svg"
import arrowUp from "../../assets/icon-up.svg"
import arrowDown from "../../assets/icon-down.svg"
function OverviewBoard(props) {

    let rangeUp = "flex justify-center items-center gap-1 text-xs text-Lime-Green font-bold"
    let rangeDown = "flex justify-center items-center gap-1 text-xs text-YouTube font-bold"

    const cardObject1 = [
        {
            id: 1,
            title: 'Page Views',
            icon: iconFacebook,
            number: 87,
            arrow: arrowUp,
            range: 3,
            rangeClass: rangeUp
        },
        {
            id: 2,
            title: 'Likes',
            icon: iconFacebook,
            number: 52,
            arrow: arrowDown,
            range: 3,
            rangeClass: rangeDown
        },
        {
            id: 3,
            title: 'Likes',
            icon: iconInstagram,
            number: 5462,
            arrow: arrowUp,
            range: 2257,
            rangeClass: rangeUp
        },
        {
            id: 4,
            title: 'Profile Views', 
            icon: iconInstagram,
            number: '52k',
            arrow: arrowUp,
            range: 1375,
            rangeClass: rangeUp
        },
    ]

    const cardObject2 = [
        {
            id: 1,
            title: 'Retweets',
            icon: iconTwitter,
            number: 117,
            arrow: arrowUp,
            range: 303,
            rangeClass: rangeUp
        },
        {
            id: 2,
            title: 'Likes',
            icon: iconTwitter,
            number: 507,
            arrow: arrowDown,
            range: 553,
            rangeClass: rangeDown
        },
        {
            id: 3,
            title: 'Likes',
            icon: iconYoutube,
            number: 107,
            arrow: arrowUp,
            range: 19,
            rangeClass: rangeUp
        },
        {
            id: 4,
            title: 'Total Views', 
            icon: iconYoutube,
            number: 1407,
            arrow: arrowDown,
            range: 12,
            rangeClass: rangeDown
        },
    ]

    return(
        <div className="flex flex-col gap-6 ">
            <div className="flex gap-6 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3">
                {cardObject1.map( cardObject1 => (
                    <OverviewCard 
                        key={cardObject1.id}
                        background={props.background}
                        title={cardObject1.title}
                        icon={cardObject1.icon}
                        number={cardObject1.number}
                        arrow={cardObject1.arrow}
                        range={cardObject1.range}
                        rangeClass={cardObject1.rangeClass}
                    />
                ))}
            </div>
            <div className="flex gap-6 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3">
                {cardObject2.map( cardObject2 => (
                    <OverviewCard 
                        key={cardObject2.id}
                        background={props.background}
                        title={cardObject2.title}
                        icon={cardObject2.icon}
                        number={cardObject2.number}
                        arrow={cardObject2.arrow}
                        range={cardObject2.range}
                        rangeClass={cardObject2.rangeClass}
                    />
                ))}
            </div>
        </div>
    )
}
export default OverviewBoard
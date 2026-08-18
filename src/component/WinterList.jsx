import WinterCard from "./WinterCard"

// In this component, we passed props to it from App.jsx, we named the prop "list" and looped through it with .map()

function WinterList(props) {

    return (
        <div className="board-grid">
            {props.list.map((item) => (
               <WinterCard need={item} />
            ))}
        </div>
    )
}

export default WinterList
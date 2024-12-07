
export default function NextButton ({ color, onClick }) {
    return (
        <button className="btn" id="new-quote" style={{backgroundColor: color, color: "white"}} onClick={onClick}>New Quote</button>
    )
}
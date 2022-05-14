const PokedordleBoard = ({ row }) => {
    return (
        <div className="board">
            <div className="pokeRow">{row}</div>
            <div className="pokeRow">{row}</div>
            <div className="pokeRow">{row}</div>
            <div className="pokeRow">{row}</div>
            <div className="pokeRow">{row}</div>
            <div className="pokeRow">{row}</div>
        </div>
    );
};

export default PokedordleBoard;

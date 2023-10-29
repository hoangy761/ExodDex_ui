function SelectTrade() {
    return (
        <>
            <div className="btn-group w-100">
                <button type="button" className="btn btn-secondary ">
                    Long
                </button>
                <button type="button" className="btn btn-secondary ">
                    Short
                </button>
                <button type="button" className="btn btn-primary ">
                    Swap
                </button>
            </div>
        </>
    );
}

export default SelectTrade;

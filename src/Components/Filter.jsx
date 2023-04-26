function Filter({onSearchChange, searchTerm}) {
    return (
        <>
            <div className="Filter">
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={onSearchChange}
                />
            </div>
        </>);
}

export default Filter;
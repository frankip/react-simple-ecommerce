function Filter({onSearchChange, searchTerm}) {
    return (
        <>
            <h2>Filter</h2>
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
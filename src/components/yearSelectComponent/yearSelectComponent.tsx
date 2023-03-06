
const YearSelectComponent = () => {

    return (
        <div>
            <div className='select-container'>
            <label htmlFor="year-select">Godina zahtjeva </label>
            <select id="year-select">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2022">2023</option>
            </select>
            </div>
        </div>
    );
};

export default YearSelectComponent;
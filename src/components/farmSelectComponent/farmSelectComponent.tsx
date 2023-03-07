
const FarmSelectComponent = () => {

    return (
        <div className='farm-select-container'>
            <div className='year-select-container'>
                <label htmlFor="year-select">Godina zahtjeva </label>
                <select id="year-select">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2022">2023</option>
                </select>
            </div>

            {/* <div className='farm-input-container'>
                <label htmlFor="farm-input">Gospodarstvo </label>
                <input type="text" />
            </div> */}
        </div>
    );
};

export default FarmSelectComponent;
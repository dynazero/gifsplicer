import './gridControl.css'

interface GridControlProps {
    setNumRows: (value: number) => void
    setNumColumns: (value: number) => void
    inputNumRows: number;
    inputNumColumns: number;
    setInputNumRows: (value: number) => void
    setInputNumColumns: (value: number) => void
}

const GridControl: React.FC<GridControlProps> = ({ setNumRows, setNumColumns, inputNumRows, inputNumColumns, setInputNumRows, setInputNumColumns }) => {


    return (
        <div className="wrapper form-group row">
            <label htmlFor="numRows" className="col-sm-2 col-form-label">
                Rows
            </label>
            <div className="col-sm-3">
                <input
                    type="numeric"
                    id="numRows"
                    className="form-control"
                    placeholder="Enter a number"
                    value={inputNumRows}
                    onChange={(e) => {
                        const inputValue = parseInt(e.target.value);
                        if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 99) { //Save your processor by restricting inputValue to 99
                            setInputNumRows(inputValue);
                        }
                    }}
                />
            </div>
            <label htmlFor="numColumns" className="col-sm-2 col-form-label">
                Columns
            </label>
            <div className="col-sm-3">
                <input
                    type="numeric"
                    id="numColumns"
                    className="form-control"
                    placeholder="Enter a number"
                    value={inputNumColumns}
                    onChange={(e) => {
                        const inputValue = parseInt(e.target.value);
                        if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 99) { //Save your processor by restricting inputValue to 99
                            setInputNumColumns(inputValue);
                        }
                    }}
                />
            </div>
            <div className="col-sm-2">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                        // Update the state in the parent component
                        setNumRows(inputNumRows);
                        setNumColumns(inputNumColumns);
                    }}
                >
                    Update
                </button>
            </div>
        </div>
    );

};

export default GridControl;

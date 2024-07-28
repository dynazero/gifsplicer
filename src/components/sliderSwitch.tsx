import './sliderSwitch.css'

interface SliderProps {
    checkboxState: boolean;
    setCheckboxState: (value: boolean) => void
}

const SliderSwitch: React.FC<SliderProps> = ({ checkboxState, setCheckboxState }) => {

    return (
        <div className='sliderWrapper continer'>
            <div className='row'>
                <div className="col">
                    <div className='sliderSwitch'>
                        <label>
                            <input className="" name="slider" type="checkbox" 
                            checked={checkboxState}
                            onChange={(e) => setCheckboxState(e.target?.checked ?? false)}
                            />
                            <span className="fill"></span>
                        </label>
                    </div>
                </div>
                <div className="col tileLabel">
                    <label>
                        Tile Image {checkboxState ? 'On' : 'Off'}
                    </label>
                </div>

            </div>
        </div>
    )
};

export default SliderSwitch;

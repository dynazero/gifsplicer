import { useState, useEffect } from 'react'
import './App.css'
import MainContext from './context/MainContext'
import UploadFile from './components/uploadFile'
import SplitImage from './components/splitImage'
import GridControl from './components/gridControl'
import SliderSwitch from './components/sliderSwitch'

function App() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null); //File placeholder
  const [checkboxState, setCheckboxState] = useState<boolean>(true); //Slider State
  const [numRows, setNumRows] = useState<number>(0); //Actual grid value
  const [numColumns, setNumColumns] = useState<number>(0); //Actual grid value
  const [inputNumRows, setInputNumRows] = useState<number>(1); // Input value for rows
  const [inputNumColumns, setInputNumColumns] = useState<number>(1); // Input value for column

  useEffect(() => {
    setNumRows(1);
    setNumColumns(1);
    if (checkboxState && inputNumRows != 0) {
      setNumRows(inputNumRows);
    }
    if (checkboxState && inputNumColumns != 0) {
      setNumColumns(inputNumColumns);
    }
  }, [checkboxState]);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          selectedFile,
          checkboxState,
          numRows,
          numColumns,
          inputNumRows,
          inputNumColumns,
          handleFileChange,
        }}
      >
        <UploadFile onFileChange={handleFileChange} />
        <SplitImage selectedFile={selectedFile} numRows={numRows} numColumns={numColumns} />
        <SliderSwitch checkboxState={checkboxState} setCheckboxState={setCheckboxState} />
        <GridControl setNumRows={setNumRows} setNumColumns={setNumColumns} inputNumRows={inputNumRows} inputNumColumns={inputNumColumns} setInputNumRows={setInputNumRows} setInputNumColumns={setInputNumColumns} />
      </MainContext.Provider>
    </>
  )
}

export default App

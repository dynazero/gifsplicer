import { createContext } from 'react';

interface MainContextType {
  selectedFile: File | null;
  checkboxState: boolean;
  numRows: number;
  numColumns: number;
  inputNumRows: number;
  inputNumColumns: number;
  handleFileChange: (file: File) => void;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export default MainContext;

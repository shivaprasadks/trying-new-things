import React, { useEffect, useState } from "react";
// import "./styles.css";
import FileStructure from "./explorer";
import { FILES_DATASET } from "./dataSet";

export default function App() {
  const [selected, setSelectedState] = useState(null);
  const handleSelect = (item) => {
    setSelectedState(item);
  };
  return (
    <>
      <FileStructure
        filesList={FILES_DATASET}
        handleSelect={handleSelect}
        selectedKey={selected}
        isExpand={true}
      />
    </>
  );
}

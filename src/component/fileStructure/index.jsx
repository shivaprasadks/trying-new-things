import React, { useEffect, useState } from "react";
import FileStructure from "./explorer";
import { FILES_DATASET } from "./dataSet";

export default function FileStructureApp() {
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

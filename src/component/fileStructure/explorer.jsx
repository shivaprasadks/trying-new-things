import { useState } from "react";
import "./styles.css";

const FileStructure = ({
  filesList,
  handleSelect,
  selectedKey,
  isExpand = false,
}) => {
  const [expandState, setExpandState] = useState(isExpand);

  const handleClick = (itemName) => {
    handleSelect(itemName);
  };
  return (
    <div>
      <div
        className={`folderItem nodeItem ${
          selectedKey === filesList.name ? "highlight" : ""
        }`}
        onClick={() => {
          handleClick(filesList.name);
          setExpandState(!expandState);
        }}
      >
        {filesList.name}
      </div>
      <div>
        {expandState &&
          filesList.fileList?.map((item) => {
            if (item.isFolder) {
              return (
                <div className="endItem">
                  <FileStructure
                    filesList={item}
                    handleSelect={handleSelect}
                    selectedKey={selectedKey}
                  />
                </div>
              );
            } else {
              return (
                <div
                  className={`nodeItem endItem ${
                    selectedKey === item.name ? "highlight" : ""
                  }`}
                  onClick={() => {
                    handleClick(item.name);
                  }}
                >
                  📄 {item.name}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default FileStructure;

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
const ProgressBtn = () => {
  const [totalItem, setTotal] = useState(0);
  const [statusQueue, updateStatusQueue] = useState([]);
  const sortedProgress = 0;

  const updateStatus = (id) => {
    const temp = [...statusQueue];
    temp.forEach((element) => {
      if (element.id === id) {
        element.status = "done";
      }
    });
    console.log("call", temp);
    updateStatusQueue([...temp]);
    // console.log("call", temp);
  };
  const addProgress = () => {
    const temp = [...statusQueue];
    temp.push({
      status: "progress",
      id: totalItem + 1,
      val: renderBars(),
      update: () => setTimeout(updateStatus(totalItem + 1), 2000),
    });

    updateStatusQueue([...temp]);
    setTotal(totalItem + 1);
  };
  const renderPlanner = () => {
    console.log("update", statusQueue);
    return statusQueue.map((item) => {
      //   item.update();
      return item.val;
    });

    // return itemList.map((item) => console.log(item));
  };

  const renderBars = () => {
    return <div className="progress">progress</div>;
  };
  return (
    <div>
      <button
        onClick={() => {
          addProgress();
        }}
      >
        Add{" "}
      </button>
      {renderPlanner()}
    </div>
  );
};

export default ProgressBtn;

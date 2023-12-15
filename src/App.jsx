import React from "react";
import datas from "./datas";
import Cards from "./Cards";

function App() {
  return (
    <>
      <p className="text-center pt-2">
        YouTube 熱門影片 <span className="text-primary">hololive</span>
      </p>
      <div className="container w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
        {datas.map((data, index) => (
          <Cards data={data} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;

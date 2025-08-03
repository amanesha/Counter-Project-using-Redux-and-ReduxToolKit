import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/index";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const toogle = useSelector((state) => state.toogle);
  console.log("counter", counter);
  console.log("toogle", toogle);

  const dispatch = useDispatch();

  //.........................................
  //..............Using Redux................
  //.........................................

  // function inc() {
  //   dispatch({ type: "INC" });
  // }
  // function dec() {
  //   dispatch({ type: "DEC" });
  // }
  // function incTen() {
  //   dispatch({ type: "INCTEN", amount: 10 });
  // }
  // function tgle() {
  //   dispatch({ type: "HIDE-SHOW" });
  // }

  //.........................................
  //..............Using Redux ToolKit........
  //.........................................

  function inc() {
    dispatch(counterActions.increment());
  }
  function dec() {
    dispatch(counterActions.decrement());
  }
  function incTen() {
    dispatch(counterActions.increase(10));
  }
  function tgle() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 text-center space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Counter App
        </h1>
        {toogle && (
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
            {counter}
          </h2>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={inc}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Increment
        </button>

        <button
          type="button"
          onClick={dec}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Decrement
        </button>

        <button
          type="button"
          onClick={incTen}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Increment by 10
        </button>

        <button
          type="button"
          onClick={tgle}
          className="px-5 py-2.5 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          {toogle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Counter;

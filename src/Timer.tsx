import { useState } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState<number>(0);
//   return (
//     <div>
//       <h2>타이머 : {seconds}초</h2>
//       <button
//         onClick={function () {
//           setInterval(() => {
//             setSeconds((prev) => prev + 1);
//           }, 1000);
//         }}
//       >
//         시작
//       </button>
//     </div>
//   );
// };

const Clock = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return <div>현재 시간 : {time.toLocaleTimeString()}</div>;
};
export default Clock;

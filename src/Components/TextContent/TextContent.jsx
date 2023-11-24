import React, { useEffect, useState, useRef } from "react";
const textArray = ["first", "second", "third", "fourth", "fifth", "sixth"];
const TextContent = React.forwardRef((props, countChange) => {
  const [text, setText] = useState("hello welcome to my world");
  const currentCount = useRef(0);
  const promiseHandler = async (clear) => {
    return new Promise((res, rej) => {
      clear = setTimeout(() => {
        countChange.current++;
        currentCount.current++;
        setText(textArray[countChange.current]);

        res();
      }, 2000);
    });
  };

  useEffect(() => {
    console.log(countChange.current);
    if (countChange.current == textArray.length) {
      currentCount.current = 0;
      countChange.current = 0;
      console.log("out of length");
      props.textShowHandler(false);

      return;
    }
    if (countChange.current != 0 && countChange.current % 3 === 0) {
      props.textShowHandler(false);
    }

    let clear;
    promiseHandler(clear);

    return () => {
      clearInterval(clear);
    };
  }, [text]);
  return (
    <div className="bg-slate-50 w-fit">
      {text}
      <span>{countChange.current}</span>
    </div>
  );
});

export default TextContent;

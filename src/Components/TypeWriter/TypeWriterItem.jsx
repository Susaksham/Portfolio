import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriterItem = () => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("")
            .callFunction(() => {})
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {})
            .start();
        }}
        options={{
          strings: [
            "Software Developer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default TypeWriterItem;

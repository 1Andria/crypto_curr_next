import React from "react";
type ParamsType = {
  params: {
    id: string;
  };
};

function About({ params }: ParamsType) {
  return <div>page{params.id}</div>;
}

export default About;

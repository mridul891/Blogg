import { useId } from "react";

function Container({ children}) {
  return <div className="w-full max-w-7xl mx-auto px-4" key={useId}>{children}</div>;
}

export default Container;

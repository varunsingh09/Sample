/* eslint-disable jsx-a11y/accessible-emoji */
import Skeleton from "./Skeleton";
import Indicator from "./Indicator";
import "./App.css";

export default Scroll = () => (
  <div className="app">
    <p>
      💡 CodeSandbox might be <b>caching the old version</b> of React Cool
      Virtual. You can <b>manually specify to the latest version</b> to see the
      examples.
    </p>
    <br />
    <h4>Skeleton</h4>
    <Skeleton />
    <br />
    <br />
    <h4>Indicator</h4>
    <Indicator />
    <br />
    <br />
  </div>
);


import ReactDOM from "react-dom/client";
import Add from "./function.js";
import Details from "./function2.js";
import Third from "./third.js";
import Four from "./four.js";
import Review from "./review.js";
const rootElement = document.getElementById('root');
const rootRef= ReactDOM.createRoot(rootElement);
rootRef.render(<div><Add/><Details/><Third/><Four/><Review/></div>);

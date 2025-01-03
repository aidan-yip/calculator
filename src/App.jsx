import { useState } from "react";
import "./index.css";
import Calculator from "./components/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section>
          <Calculator />
        </section>
      </main>
    </>
  );
}

export default App;

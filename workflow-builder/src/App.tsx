import Sidebar from "./features/workflow/Sidebar";
import Canvas from "./features/workflow/Canvas";
import ConfigPanel from "./features/workflow/ConfigPanel";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Canvas />
      <ConfigPanel />
    </div>
  );
}

export default App;

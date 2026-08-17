import { WinterCard } from "./winterCard";
import { winterNeeds } from "../data/winterNeeds";

function App() {
  return (
    <main className="app">
      <div className="app-header">
        <h1>Winter Needs</h1>
        <p>
          Help provide essential winter supplies to
          children and families in need.
        </p>
      </div>

      <div className="winter-grid">
        {winterNeeds.map((item) => (
          <WinterCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
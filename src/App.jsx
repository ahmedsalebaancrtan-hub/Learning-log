
import WinterCard from "./component/WinterCard";
import { winterNeeds } from "./data/winterNeeds";


function App() {
  return (
    <main>
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
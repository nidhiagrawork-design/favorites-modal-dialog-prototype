import { ProductShell } from "./ProductShell";
import { CompanySwitcher } from "./CompanySwitcher";
import { Dashboard } from "./dashboard/Dashboard";
import "./App.css";

export default function App() {
  return (
    <ProductShell companySwitcherTrigger={<CompanySwitcher />}>
      <Dashboard />
    </ProductShell>
  );
}

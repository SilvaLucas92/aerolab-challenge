import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <Layout>
      <Hero />
      <Products />
    </Layout>
  );
}

export default App;

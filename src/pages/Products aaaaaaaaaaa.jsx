import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://backend-toti.onrender.com'); 
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar JSON:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

 
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todos" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Catálogo de Notebooks</h1>

      
      <input
        type="text"
        placeholder="Buscar notebook..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      />

      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          marginLeft: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      
      <div className="products-grid" style={{ marginTop: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Products;
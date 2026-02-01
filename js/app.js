// COLECCIÓN
const grid = document.getElementById("products-grid");

if (grid) {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card" onclick="location.href='producto.html?id=${p.id}'">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
      </div>
    `;
  });
}

// PRODUCTO
const detail = document.getElementById("product-detail");

if (detail) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find(p => p.id == id);

  detail.innerHTML = `
    <img src="${product.image}">
    <div class="info">
      <h1>${product.name}</h1>
      <p>$${product.price}</p>

      <label>Talla</label>
      <select id="size">${product.sizes.map(s => `<option>${s}</option>`).join("")}</select>

      <label>Color</label>
      <select id="color">${product.colors.map(c => `<option>${c}</option>`).join("")}</select>

      <button onclick="buy()">Comprar por WhatsApp</button>
    </div>
  `;
}

function buy() {
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  const text = `Hola, quiero comprar ${size} en color ${color}`;
  window.open(`https://wa.me/57TU_NUMERO?text=${encodeURIComponent(text)}`);
}

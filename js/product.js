const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id === id);

if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;

  let index = 0;
  const img = document.getElementById("product-image");
  img.src = product.images[index];

  document.querySelector(".left").onclick = () => {
    index = (index - 1 + product.images.length) % product.images.length;
    img.src = product.images[index];
  };

  document.querySelector(".right").onclick = () => {
    index = (index + 1) % product.images.length;
    img.src = product.images[index];
  };
}

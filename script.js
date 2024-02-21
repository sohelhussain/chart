// first step is show the real product
const product = [
  {
    name: "Wooden Stoll",
    headline: "Made with apple wood",
    price: "$700",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Chair",
    headline: "Soft like cloud",
    price: "$1300",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Broun Caouch",
    headline: "this is a relaxing area",
    price: "$3400",
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const popular = [
  {
    name: "Wooden leg",
    headline: "Made with apple wood",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=80&w=3234&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "red Chair",
    headline: "sitting on blood",
    price: "$1700",
    image:
      "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wooden Chair",
    headline: "Made with saddel wood",
    price: "$2500",
    image:
      "https://images.unsplash.com/photo-1572297794908-f2ee5a2930d6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const chart = [];

const addProduct = () => {
  let clutter = "";

  product.forEach((items, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full" object-cover src="${items.image}" />
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">
        ${items.name}
      </h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">${items.headline}</h3>
          <h4 class="font-semibold mt-2">${items.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
          <i data-index="${index}" class="ri-add-line add"></i>
        </button>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(`.products`).innerHTML = clutter;
};
addProduct();

const addPopular = () => {
  let clutter = "";
  popular.forEach((product) => {
    clutter += `          <div
        class="popular overflow-hidden bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
      >
        <div
          class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
        >
          <img
            class="w-full h-full object-cover"
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="data py-2 w-full">
          <h1 class="leading-none font-semibold">${product.name}</h1>
          <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
            ${product.headline}
          </h4>
          <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
      </div>`;
  });
  document.querySelector(`.populars`).innerHTML = clutter;
};
addPopular();

// product push in chart
const pushChart = () => {
  //how to handel a maltipale btn click to and avoid the multiple addenvet listner
  // then we using a event bubbling mechanism, we click on the parent element
  document.querySelector(`.products`).onclick = (btn) => {
    if (btn.target.classList.contains("add")) {
      // this value says that which thing i clicked
      chart.push(product[btn.target.dataset.index]); // this value find a index and push the object by index on chart array
    }
  };
};
pushChart();
// show the chart prodect
const showCart = () => {
    document.querySelector(`.carticon`).onclick = (value) => {
        document.querySelector(`.cartexpnd`).style.display = `block`;
        let clutter = "";
        chart.forEach(items => {
            clutter += `          <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${items.image}"/>
            </div>
            <div>
              <div class="font-semibold">${items.name}</div>
              <div class="text-sm font-semibold opacity-80">${items.price}</div>
            </div>
          </div>`
        }); // yeh par jab bhi click ho tab ye code chalega tabhi ye kaam karega
        document.querySelector(`.cartexpnd`).innerHTML = clutter;
  };
};
showCart();

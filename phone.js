const loadPhone = async (phoneName) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneName}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhone(phones);
};

const displayPhone = (phones) => {
  //   console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  //   clear container before adding new card
  document.getElementById("phone-container").innerHTML = "";
  // show all button and items if the total items are more than 12
  const showAll = document.getElementById("show-all-Container");
  if (phones.length > 12) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  //   display only 12 phones
  const first10Phone = phones.slice(0, 12);
  first10Phone.forEach((phone) => {
    // console.log(phone);
    //create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card card-compact bg-base-100 shadow-xl border m-2 p-3`;
    phoneCard.innerHTML = `
    <figure>
    <img
      src=${phone.image} alt="Shoes"
    />
    </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        
    `;
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoadingSpiner(false);
};
// loadPhone();

const handleSearch = () => {
  // loading
  toggleLoadingSpiner(true);

  const searchField = document.getElementById("search-field").value;
  console.log(searchField);
  loadPhone(searchField);
  //   reset filed
  document.getElementById("search-field").value = "";
};
const toggleLoadingSpiner = (isLoading) => {
  const loadingSpiner = document.getElementById("loader");
  if (isLoading) {
    loadingSpiner.classList.remove("hidden");
  } else {
    loadingSpiner.classList.add("hidden");
  }
};

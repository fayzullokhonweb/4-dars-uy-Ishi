import jobs from "./main.js";

const listEl = document.querySelector("#listEl");
jobs.forEach((item) => {
  const lisItem = document.createElement("li");
  lisItem.classList.add("list__item");

  const itemImg = document.createElement("img");
  itemImg.classList.add("last-img");

  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("item__wrapper");

  const itemTop = document.createElement("div");
  itemTop.classList.add("top__item");

  const itemTopTitle = document.createElement("h3");
  itemTopTitle.classList.add("top__item-title");

  const itemTopText = document.createElement("p");
  itemTopText.classList.add("top__item-text");

  const itemTopDesc = document.createElement("p");
  itemTopDesc.classList.add("top__item-description");

  const itemCenter = document.createElement("div");
  itemCenter.classList.add("center__item");

  const itemCenterTitle = document.createElement("h2");
  itemCenterTitle.classList.add("center__item-title");

  const itemBtm = document.createElement("p");
  itemBtm.classList.add("bottom__item");

  const itemBtmText = document.createElement("p");
  itemBtmText.classList.add("bottom__item-text");

  const itemListPost = document.createElement("div");
  itemListPost.classList.add("list__post");

  const itemListPostPr = document.createElement("p");
  itemListPostPr.classList.add("bottom__item-text");

  itemImg.src = item.logo;
  itemImg.width = "88";
  itemImg.height = "88";
  lisItem.appendChild(itemImg);

  itemTopTitle.textContent = item.company;
  itemTop.appendChild(itemTopTitle);

  if (item.new == true) {
    itemTopText.textContent = "new";
    itemTop.appendChild(itemTopText);
  }

  if (item.featured == true) {
    itemTopDesc.textContent = "featured";
    itemTop.appendChild(itemTopDesc);
    lisItem.classList.add("border__left");
  }

  itemCenterTitle.textContent = item.position;
  itemCenter.appendChild(itemCenterTitle);

  itemBtmText.textContent = `${item.postedAt}  ${item.contract}  ${item.location} `;
  itemBtm.appendChild(itemBtmText);

  itemWrapper.appendChild(itemTop);
  itemWrapper.appendChild(itemCenter);
  itemWrapper.appendChild(itemBtm);

  lisItem.appendChild(itemWrapper);

  const newArr = [];
  newArr.push(item.role);
  newArr.push(item.level);
  const newArrSpl = newArr.splice(" ");

  newArrSpl.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  const newRole = item.tools;
  newRole.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  const newSplit = item.languages;
  newSplit.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  lisItem.appendChild(itemListPost);

  listEl.appendChild(lisItem);
});

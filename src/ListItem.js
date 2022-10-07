import React from "react";

export default function ListItem({item}){
  if (!('MainImage' in item)) {return};

  var itemTitle = item.title;
  const maxTitleLength = 50;
  if (itemTitle.length > maxTitleLength) {itemTitle = itemTitle.slice(0, maxTitleLength) + '…'};

  let map = new Map([["USD", "$"], ["EUR", "€"]]);
  const itemPrice = map.has(item.currency_code) ?
    map.get(item.currency_code) + item.price :
    item.price + ' '+ item.currency_code;

  const itemQuantityLevel = item.quantity <= 10 ? 'low' :
    item.quantity <= 20 ? 'medium' :
    'high';

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{itemTitle}</p>
        <p className="item-price">{itemPrice}</p>
        <p className={"item-quantity level-"+itemQuantityLevel}>{item.quantity}</p>
      </div>
    </div>
  );
};
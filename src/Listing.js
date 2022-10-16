import React from "react";
import ListItem from "./ListItem";

export default function Listing({items = []}) {
  const ItemElements = items.filter(item => item.state === "active").map((item, index) => (
    <ListItem item={item} key={item.listing_id} />
  ));
  return (
    <div className="item-list">
      {ItemElements}
    </div>
  );
};
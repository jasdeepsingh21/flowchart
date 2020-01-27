import React from "react";

function WindowArea(props) {
  const drop = e => {
    e.preventDefault();
     const windowTwo = document.getElementById("window-2");
     const shape = e.dataTransfer.getData("cardId");
     console.log('Shape Recevied on drop is :',shape)
     if(shape){
      let newId = 1;
    
      const element = document.createElement(shape); 
      element.setAttribute('id',`card-${newId}`)
      element.setAttribute('class',shape.toLowerCase())
      element.setAttribute('draggable','true')
      windowTwo.appendChild(element);
      const shapeText = document.createElement("p"); 
      shapeText.innerHTML=`${shape}-${newId}`;
      element.appendChild(shapeText);
     }
    // const card = document.getElementById(cardId);
    // card.style.display = "block";
    // e.target.appendChild(card);
    
  };
  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default WindowArea;

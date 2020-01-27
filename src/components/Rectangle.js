import React from 'react'

function Rectangle(props) {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData("cardId", target.id);
        // setTimeout(function() {
        //   target.style.display = "none";
        // }, 0);
      };
      const dragOver = e => {
        e.stopPropagation();
        console.log('circle drag over called')
      };
    return (
        <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
    )
}

export default Rectangle

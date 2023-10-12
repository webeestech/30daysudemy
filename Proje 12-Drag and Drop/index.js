let boxes = document.getElementsByClassName("box");
let leftBlock = document.getElementById("left");
let rightBlock = document.getElementById("right");


for(box of boxes){
    box.addEventListener("dragstart",function(e){
        let selected = e.target;

        rightBlock.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBlock.addEventListener("drop",function(e){
            rightBlock.appendChild(selected);
            selected = null;
        });

        leftBlock.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftBlock.addEventListener("drop",function(e){
            leftBlock.appendChild(selected);
            selected = null;
        });
    })
}
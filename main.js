class WallPaper{
    constructor(text, colorCode, imgUrl, vertical, horizontal){
        this.text = text;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }

    verticalTable = {
        "top": "top",
        "center": "top-center",
        "bottom": "bottom"
    }

    horizontalTable = {
        "right": "right",
        "center": "bottom-center",
        "left": "left"
    }

    generateWallPaper() {
        let domObj = document.getElementById("target");
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("container");
    
        let wallPaperImg = document.createElement("img");
        wallPaperImg.src = this.imgUrl;
    
        let wallPaper_h3 = document.createElement("h3");
        wallPaper_h3.innerHTML = this.text;
        wallPaper_h3.classList.add(this.verticalTable[this.vertical], this.horizontalTable[this.horizontal]);
        wallPaper_h3.style.color = "#" + `${this.colorCode}`;

        containerDiv.append(wallPaperImg);
        containerDiv.append(wallPaper_h3);

        domObj.append(containerDiv);
        return domObj;
    }
}

class helper {
    static showAll(wallPaperList) {
        for (let i = 0; i < wallPaperList.length; i ++) {
            wallPaperList[i].generateWallPaper();
        }
    }
}

let wallPaper1 = new WallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://media.istockphoto.com/photos/yes-you-can-motivational-inspirational-message-on-sand-picture-id1003163388?k=20&m=1003163388&s=612x612&w=0&h=qpaFyY0AKaPPRfWgjlSfXeXrDjtj8g_2fUCux02c_sg=", "top", "right");
let wallPaper2 = new WallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
let wallPaper3 = new WallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

let wallPaperList = [wallPaper1, wallPaper2, wallPaper3];

helper.showAll(wallPaperList);


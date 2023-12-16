import { ToolBarComponent } from "./components/toolBarComponent.js";
import { tabData } from "./mock.js";
import { RenderPosition, render } from "./render.js";

const appContainer = document.querySelector(".app");
const content = document.querySelector(".content");

const toolBar = new ToolBarComponent(content);

render(toolBar,appContainer,RenderPosition.AFTERBEGIN);


const toolButtons = document.querySelectorAll(".tab-button");

toolButtons.forEach(item=>{
    item.addEventListener("click",()=>{
        content.innerHTML = "";
        toolButtons.forEach(toolBarItem => toolBarItem.classList.remove("active"));
        item.classList.add("active");
        
        const contents = tabData.find(p=>p.name == item.id);

        contents.content.forEach(element => {
            const contentElement = document.createElement("p");
            contentElement.innerText = element;
            content.appendChild(contentElement);
        });
    });
})






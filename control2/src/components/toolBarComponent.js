import { tabData } from "../mock.js";
import { AbstractComponent } from "./abstractComponent.js";
import { TabButtonComponent } from "./tabButtonComponent.js";

export class ToolBarComponent extends AbstractComponent{

    constructor(windowContent){
        super();
        this._windowContent = windowContent;
    }

    getTemplate(){
        const toolBar = document.createElement("div");
        toolBar.className = "tool-bar";

        tabData.forEach(toolItem=>{
            const tabButton = new TabButtonComponent(toolItem.name,this._windowContent);
            const tabButtonEl = tabButton.getTemplate();
            toolBar.appendChild(tabButtonEl);
        });


        return toolBar.outerHTML;
    }
}
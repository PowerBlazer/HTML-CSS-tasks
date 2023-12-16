import { tabData } from "../mock.js";
import { AbstractComponent } from "./abstractComponent.js";

export class TabButtonComponent extends AbstractComponent{
    
    constructor(tabName,windowContent){
        super();
        this._tabName = tabName;
        this._windowContent = windowContent;
    }


    getTemplate(){
        const button = document.createElement("button");
        button.className = "tab-button";
        button.id = this._tabName;
        button.innerText = this._tabName;
       
        return (button);
    }
}
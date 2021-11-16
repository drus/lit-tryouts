import {LitElement, html, css   } from 'lit';

export class DrusTryout001 extends LitElement{

    static styles=css`
        :host{
            position:relative;
        }

        span, input{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
        span{
            display:block;
            background-color:red;
            border-radius:50%;
        }
        input{
            width:50px;
            height:50px;
            background:none;
            border:none;
        }
    `;

    static properties={
        size:{type:Number, reflect:true},
        color:{type:String}
    }

    constructor(){
        super();
        this.onMouseUp=this.onMouseUp.bind(this);
        this.resetSize=this.resetSize.bind(this);
    }

    resetSize(input){
        
        if(this.size){
            this.size-=1;
            input.stepDown();
            setTimeout(this.resetSize, 10, input);
        }
    }

    onMouseUp(e){
        this.resetSize(e.currentTarget);
    }

    updateSize(e){
        this.size=e.currentTarget.value;
    }

    render(){
        return html`
            <div>
                <span style="background-color:#${this.color};width:${this.size}vw;height:${this.size}vw;"></span>
                <input type="range" value="${this.size}" @input="${this.updateSize}" max="120" @mouseup="${this.onMouseUp}">
            </div>`;
    }

}

customElements.define('drus-tryout001', DrusTryout001);


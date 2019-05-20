class MoonBall extends Ball {
    public behavior: Behavior

    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        this.behavior = new Float(this)

    }

    public update() : void {
 this.behavior.update()

      
    }
}

window.customElements.define("moonball-component", MoonBall)
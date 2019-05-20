class EarthBall extends Ball{
    public behavior: Behavior
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        this.behavior = new Bounce(this)
    }

    public update() : void {
        this.behavior.update()
    }
}

window.customElements.define("earthball-component", EarthBall)
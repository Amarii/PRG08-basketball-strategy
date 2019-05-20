class BasketBall extends Ball{
    public behavior: Behavior

    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        this.behavior = new Bounce(this)

        
    }

    public update() : void {
        if(this.x > window.innerWidth / 2 ){
            this.behavior = new Float(this)

        }
        else{
            this.behavior = new Bounce(this)
        }
        
this.behavior.update()
    }
}

window.customElements.define("basketball-component", BasketBall)
class DonutMaker {

    constructor(ctDonuts, ctAutoClickers) {
        this.ctDonuts = ctDonuts;
        this.ctAutoClickers = ctAutoClickers;
        this.costAutoClicker = Math.round(100 * (1.1**this.ctAutoClickers));
    }

    addDonut() {
        this.ctDonuts++;
    }

    addAutoClicker() {
        if (this.ctDonuts >= this.costAutoClicker) {
            this.ctDonuts -= this.costAutoClicker;
            this.ctAutoClickers ++;
        }
    }

    activateAutoClickers() {
        this.ctDonuts += this.ctAutoClickers * 1;
    }

}
export default DonutMaker;
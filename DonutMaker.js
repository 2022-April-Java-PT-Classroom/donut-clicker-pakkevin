class DonutMaker {

    constructor(ctDonuts, ctAutoClickers, ctClickMultipliers) {
        this.ctDonuts = ctDonuts;
        this.ctAutoClickers = Math.round(ctAutoClickers * 10) / 10;
        this.ctClickMultipliers = ctClickMultipliers;
        this.costAutoClicker = Math.round(100 * (1.1 ** this.ctAutoClickers) * 10) / 10;
        this.costClickMultiplier = Math.round(10 * (1.1 ** this.ctClickMultipliers) * 10) / 10;
        this.powerClick = Math.round(Math.pow(1.2, this.ctClickMultipliers) * 10) / 10;
        this.powerAutoClick = this.ctAutoClickers * this.powerClick;
    }

    donutCount() {
        return this.ctDonuts;
    }

    addDonut() {
        this.ctDonuts += this.powerClick;
        // this.donutCount.innerHTML = this.ctDonuts;
    }

    // Iteration 1: Auto Clicker
    upgradeAutoClicker() {
        if (this.ctDonuts >= this.costAutoClicker) {
            this.ctDonuts -= this.costAutoClicker;
            this.ctAutoClickers++;
        }
    }

    activateAutoClickers() {
        this.ctDonuts += this.powerAutoClick;
    }

    // Iteration 2: Donut Multiplier
    upgradeClickMultiplier() {
        if (this.ctDonuts >= this.costClickMultiplier) {
            this.ctDonuts -= this.costClickMultiplier;
            this.ctClickMultipliers++;
        }
    }

    resetDonutGame() {
        this.ctDonuts = 0;
        this.ctAutoClickers = 0;
        this.costAutoClicker = 100;
        this.ctClickMultipliers = 0;
        this.costClickMultiplier = 10;
    }

}

export default DonutMaker;
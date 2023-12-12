class BoardMannager {
    CardMAnager;
    Node;
    numImgs;
    curNumCards;
    constructor(id,numImgs, CardMAnager) {
        this.node = document.getElementById(id);
        this.numImgs = numImgs;
        this.CardMAnager = CardMAnager;
    }
    clear() {
        this.node.innerHTML="";
    }
    fill(numberCards) {
        if(numberCards>2*this.numImgs){
            console.error(`Error: not enough images for ${numberCards} cards.`);
            numberCards = 2*this.numImgs;
        }
        numberCards=parseInt(numberCards);

        this.curNumCards= numberCards;
        
        this.clear();

        this.genRamdonList(numberCards).forEach((number) => {
            this.addCard(this.CardMAnager.gen(number));
        });
        this.adjustCss()
    }
    adjustCss(){
        let cols = Math.sqrt(this.curNumCards);
        let size = (100/cols -1);
        size+='vmin';

        document.documentElement.style.setProperty("--numCols", cols);
        document.documentElement.style.setProperty("--size", size);
    }

    addCard(card) {
        this.node.appendChild(card);
    }
    genRamdonList(size) {
        let list = Array(size/2).fill().map((_,i)=>i+1);
        console.log({list});
        list = [...list,...list].sort(()=>Math.random()-0.5);
        return list;
    }
    check(){
        const flipped = document.getElementsByClassName('matched');
        return flipped.length >= this.curNumCards;
    }
}
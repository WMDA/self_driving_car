class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false
        this.reverse = false;

        this.#addKeyboardListners();
    }

    #addKeyboardListners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break
                case "ArrowRight":
                    this.right = true;
                    break
                case "ArrowUp":
                    this.left = true;
                    break
                case "ArrowDown":
                    this.right = true;
                    break

            }
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break
                case "ArrowRight":
                    this.right = false;
                    break
                case "ArrowUp":
                    this.left = false;
                    break
                case "ArrowDown":
                    this.right = false;
                    break

            }
            
        }    
        
    }
}
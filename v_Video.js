class v_Video{
	constructor( dirVideo ){
        this.x = random (600, 1000);
        this.y = random(200, 400);

        this.video = createVideo(dirVideo,() => {
                console.log("termino carga")
                this.yaPuedoDarPlay = true;});
        // this.video.size(500,500);
        this.yaPuedoDarPlay = false;
	}

    dibujar(){
        imageMode(CENTER); 
        let img = this.video.get();
        image(img,this.x,this.y);
    }

    play(){
        if(this.yaPuedoDarPlay){
            this.video.play();
            this.yaPuedoDarPlay = false;
        }
    }

     
}
	//---------
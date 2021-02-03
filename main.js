//Make the "hery" of Zachery dissapear
/*
    let getNamePtag = document.getElementById("yourName");
    let innerText = getNamePtag.innerText;
    let nameShorten = "Zac Wilson";

    setTimeout( () => {
        
            getNamePtag.innerText = nameShorten;
    }, 2000);
  */
 
 let getNamePtag = document.getElementById("yourName");
 let innerText = getNamePtag.innerText;
 let nameToShorten = "Zachery Wilson"

 // splits name at space converts to array
 nameToShorten =  nameToShorten.split(" "); 

 //reverse for loop that stops when name reaches "Zac"
 //for(let i = nameToShorten[0].length-1; i >= 3; i-- ){
 //        setTimeout( () => {
 //               //starts at 0 index of name string & removes last letter 1 at end of first name
 //               nameToShorten[0] = nameToShorten[0].slice(0, i); 
 //               //console.log(nameToShorten);
 //               getNamePtag.innerText = nameToShorten[0] + " " + nameToShorten[1];
 //        }, 1000);
 //        
 //}

 function nameSlicer(){
         setTimeout( () => {
                nameToShorten[0] = nameToShorten[0].slice(0, nameToShorten[0].length-1);
                getNamePtag.innerText = nameToShorten[0] + " " + nameToShorten[1];
                console.log(nameToShorten[0]);
                if(nameToShorten[0].length > 3){
                        nameSlicer(nameToShorten[0]);
                }
         },600);
 }
 nameSlicer(nameToShorten[0]);
 


//if(localStorage.getItem("url"+1) === null)
//{
    //localStorage.setItem('url'+1,'haha');

//}
//else{

//}



//if(localStorage.getItem("x") === null)
//{
  //localStorage.setItem("x",1);
//}
//else{
  
//}

const linkArray = [
  'https://www.reddit.com/r/sexmemes.json',
  'https://www.reddit.com/r/unfunnysexmemes.json',
  'https://www.reddit.com/r/SexMemes2024.json',
  'https://www.reddit.com/r/meme.json',
  'https://www.reddit.com/r/memes.json',
  'https://www.reddit.com/r/Memes_Of_The_Dank.json',
  'https://www.reddit.com/r/MemeAlleyway.json',
  'https://www.reddit.com/r/okbuddyretard.json'
];


function rand(max,min){
const whichOne = Math.floor(Math.random() * (max - min + 1)) + min;
  return whichOne;
}
//console.error("https://www.reddit.com/r/" + linkArray[whichOne(7,0)]".json");


randPost(rand(24,0),rand(7,0));
function nextB(){

document.getElementById('meme').src= 'https://ibb.co/YXYM09g';
  randPost(rand(24,0),rand(7,0));
}

function randPost(pNum,rNum){



fetch(linkArray[rNum],{ 
  headers: {
       'Accept': 'application/json'
     }
})
.then((response) => response.json())
.then((body) => {


  
 let after = body.data;

    if (body.data.children[pNum].data.post_hint === "image") {

//var teT= false;
      
//for(let i = 1; i < localStorage.getItem('x'); i++){

  //if(localStorage.getItem('url'+i).localeCompare(body.data.children[pNum].data.url) === 0)
//{
   //teT = true;
//}
//}
      //if(teT === true)
     // {
     // randPost(rand(24,0),rand(7,0));
      //}
      //else {
      var image = document. getElementById('meme');


      //localStorage.setItem('url'+localStorage.getItem('x'), body.data.children[pNum].data.url_overridden_by_dest);

//localStorage.setItem('x',localStorage.getItem('x')+1);

      //console.error(localStorage.getItem('url'));
      
      
      image.src = body.data.children[pNum].data.url_overridden_by_dest;  
    
  
  //}

    }

  else{

    randPost(rand(24,0));
    //console.error('oh no');
    }

  
})
.catch((e) => {
 console.error(e+'okk');
  location.reload();
});
}



const shareButton = document.getElementById('sB');
const imageToShare = document.getElementById('meme');

shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      const blob = await fetch(imageToShare.src).then(res => res.blob());
      await navigator.share({
        files: [new File([blob], 'image.jpg', { type: blob.type })],
        title: '',
      });
    } catch (err) {
      console.error('Error sharing image:', err);
    }
  } else {
    console.error('Web Share API not supported.');
  }
});
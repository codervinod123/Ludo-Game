const turnManip=()=>{
    const play1=Math.floor(Math.random()*6)+1;
    const p1=`dice${play1}.png`; 
    document.getElementById('player1').setAttribute('src',p1);

    const play2=Math.floor(Math.random()*6)+1;
    const p2=`dice${play2}.png`; 
    document.getElementById('player2').setAttribute('src',p2);
   
    if(play1==play2)
    {document.getElementById('result').innerHTML='Match Drawen';}
    else if(play1>play2){document.getElementById('result').innerHTML='Player 1 Win';}
    else{document.getElementById('result').innerHTML='Player 2 Win';}
    

 }
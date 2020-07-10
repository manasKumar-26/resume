var links=document.querySelectorAll('.navbar li a');
for(let link of links)
{
    link.addEventListener('click',function(event){
        event.preventDefault();
        let targetid=link.getAttribute('href').substring(1);
        console.log(targetid)
        let cordinates=document.getElementById(targetid).getBoundingClientRect();
        let i=0;
        let j=cordinates.y;
        console.log(j)
        let interval=setInterval(()=>{
            if(i>j)
            {
                clearInterval(interval);
            }
            i+=50;
            scrollBy(0,50);

        },20)

    })
}
var skill=document.getElementById('skills1');
var skillPercent=document.querySelectorAll('.skill-progress > div');
initiaizeWidth();
var visible=false;
document.addEventListener('scroll',function(){
    var view=skill.getBoundingClientRect();
    if(!visible && view.top<=window.innerHeight)
    {
        visible=true;
        animate();
    }
    else if(view.top>window.innerHeight)
    {
        visible=false;
        initiaizeWidth();
    }
})
function animate(){
    for(let s of skillPercent)
    {
        let maxwidth=parseInt(s.getAttribute('data-skill-bar'));
        let curWidth=0;
        let int=setInterval(() => {
            if(curWidth>maxwidth)
            {
                clearInterval(int);
                return;
            }
            curWidth++;
            s.style.width=`${curWidth}%`;
            
        }, 5);
    }
}




function initiaizeWidth(){
    for(let s of skillPercent)
    {
        s.style.width='0%';
    }
}


/*var anchor=document.querySelectorAll('#navbar li a');

for(var i=0;i<anchor.length;i++)
{
    anchor[i].addEventListener('click',function(e){
        e.preventDefault();

        var targetid=this.getAttribute('href').substring(1);
        var target=document.getElementById(targetid);
        var c=target.getBoundingClientRect();
        var i=0;
        var j=c.y;
        var interval=setInterval(function(){
            if(i>j)
            {
                clearInterval(interval);
            }
            scrollBy(0,50);
            i+=50;
        },20);
    });
}*/


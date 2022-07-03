function showtime() {
    const date= new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s= date.getSeconds();
    let sesson="AM";

    if(h==12)
        h=0

    else if(h>12)
        h=h-12;
        sesson="PM";

// now we will use ternary oparator 
h= (h<10)?"0"+h:h;
m= (m<10)?"0"+m:m;
s= (s<10)?"0"+s:s;

    document.querySelector(".time").innerHTML=h+":"+m+":"+s+sesson;
    setInterval(showtime,1000);

}


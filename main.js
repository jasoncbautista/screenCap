console.log("main");
setTimeout(function(){
    html2canvas(document.body).then(function(canvas) {
        debugger;
        document.body.appendChild(canvas);
    });
}, 2500);

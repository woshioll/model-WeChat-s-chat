window.onload = function(){
    var oList = document.getElementById('list');
    var aBtn = document. getElementsByTagName('input');
    var oMsg = document.getElementById('msg');
    var aImg = document.getElementsByTagName('img');
    var onOff = true;

    aImg[0].onclick = function(){
        if(onOff){
            this.src = 'img/2.png';
        }else{
            this.src = 'img/1.png';
        }
        onOff =! onOff;
    }
    aBtn[1].onclick = function(){
        if(aBtn[0].value.length != 0){
            if(onOff){
                oList.innerHTML += '<li class = "fl clearfix"><img src = "img/1.png"><p>'+aBtn[0].value+'</p></li>';
            }else{
                oList.innerHTML += '<li class = "fr clearfix"><img src = "img/2.png"><p>'+aBtn[0].value+'</p></li>';
            }
            aBtn[0].value = '';
        }else{
            alert('请输入内容');
        }
    }
}
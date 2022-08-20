const searchFunJs = () =>{
    let filterJs = document.getElementById('myInputJs').value.toUpperCase();
    // let pre = document.getElementById('pre').value;
    let ol = document.getElementById('myOlJs');
    // let h2 = ol.getElementsByTagName('h2');
    let li = ol.getElementsByClassName('Jsli');
    let pre = ol.getElementsByClassName('coding');

    for(var i=0; i<li.length; i++){
        let b = li[i].getElementsByClassName('JsPara')[0];

        let textValue = b.textContent || b.innerHTML;

        if(textValue.toUpperCase().indexOf(filterJs) > -1){
            li[i].style.display = '';
            pre[i].style.display = '';
        }else{
            li[i].style.display = 'none';
            pre[i].style.display = 'none';
        }
        // let b = pre[i].getElementsByTagName('code')[0];
    }
}
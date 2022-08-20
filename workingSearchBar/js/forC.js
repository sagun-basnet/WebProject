const searchFun = () =>{
        let filter = document.getElementById('myInput').value.toUpperCase();
        let ol = document.getElementById('myOl');
        let li = ol.getElementsByTagName('li');
        let pre = ol.getElementsByTagName('pre');

        for(var i=0; i<li.length; i++){
            let a = li[i].getElementsByTagName('p')[0];

            let textValue = a.textContent || a.innerHTML;

            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = '';
                pre[i].style.display = '';
            }else{
                li[i].style.display = 'none';
                pre[i].style.display = 'none';
            }
        }
    }
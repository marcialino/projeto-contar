function contar() {
    var n1 = window.document.getElementById('txtn1')
    var n2 = window.document.getElementById ('txtn2')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    
    if(n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0 ){
        window.alert('[ERRO]. Dados icorretos. Preencha novamente')
        res.innerHTML = `Impossível contar.`
    
    }else{
        res.innerHTML = 'Contando: <br/>'
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        pas = Number(pas.value)

        if(pas <= 0){
        window.alert('Passo inválido!')
        }
    
        if (n1 < n2){
             for(var c = n1; c <= n2; c += pas ){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }else{
            for(var c = n1; c >= n2; c -= pas ){
                res.innerHTML += `${c} \u{1F449}`
            }
         
        }
        res.innerHTML += `\u{1F3C1}`
    }
     
}
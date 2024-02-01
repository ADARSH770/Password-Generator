function createpassword(){
    let  pass = ''
    let  str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let symbol = '!@#$%&'
    const length = 60;
    pass+=upper[Math.floor(Math.random()*25+1)]
    pass+=lower[Math.floor(Math.random()*25+1)]
    pass+=num[Math.floor(Math.random()*9+1)]
    pass+=symbol[Math.floor(Math.random()*5+1)]
   
    
    for(let i=1;i<=8;i++){
        let char = Math.floor(Math.random()*length+1)
        pass+=str[char]
        
    }
    const st = document.querySelector('#inp')
    st.value = pass
    
}

function copy(){
   const res =  document.querySelector('#inp')
    console.log(res.value);
    res.select()
    window.navigator.clipboard.writeText(res.value)
}

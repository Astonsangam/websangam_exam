function right(n){
    for(i=1; i<=n; i++){
        console.log(''.repeat(n-i)+'*'.repeat(i));
    }
}
right(6)
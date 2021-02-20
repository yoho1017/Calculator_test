export const Counter = function (){
    const arr = function(){
        let arr1 = [];
    
        for(let i = 0; i<10; i++){
          arr1.push(<button style={{color:'red'}} value={i}>{i}</button>);
        }
    
        return arr1;
      };
      const numArr = arr();
      console.log(numArr);
    return (numArr)
}

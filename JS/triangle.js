function countAreaTraingle(){
    // triangle base valu
    const triangleBase = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBase.value;
    const base =parseFloat(triangleBaseValue)
    // console.log( base);

    // triangle hight valu
    const triangleHight =document.getElementById('triangleHight');
    const triangleHightValue =triangleHight.value;
    const hight =parseFloat(triangleHightValue);

    // area calculate 
    const area =0.5*base*hight;
    // triangle area 
    const triangleAreaDisplay =document.getElementById('triangle-area');
    triangleAreaDisplay.innerText=area;
    

    // console.log(area)
}
function calculateRactangleArea(){
    // ractangle width calculation
    const ractangleWidth =document.getElementById('rectangleWidth');
    const rectangleWidthValue =ractangleWidth.value;
    const width =parseFloat(rectangleWidthValue)
    // console.log(typeof width)

    // ractangle length calculate
    const ractangleLength =document.getElementById('rectangleLength');
    const rectangleLengthValue =ractangleLength.value;
    const length =parseFloat(rectangleLengthValue)

    // ractangle area 
    const area = width * length
    // console.log(area)
    const rectangleAreaDisplay =document.getElementById('rectangleArea');
    rectangleAreaDisplay.innerText=area;

}
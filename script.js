let screen = document.getElementById('screen');
function numPush(Number){
    screen.value += Number;
};

function clearAll(){
    screen.value = '';
}
function equal(){
    try{
        screen.value = eval(screen.value);
    } catch(error){
        alert('invalid format')
    }
}
// function calculateResult(){
//     try{
//         result.value = eval(result.value);
//     } catch (err){
//         alert('input valid expression');
//     }
// }
function insert(num){
        const number = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = number + num;
    }

function rase() {
    document.getElementById('result').innerHTML = "";
}

function calculate() {
    const answer = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(answer)
    }
    else {
        document.getElementById('result').innerHTML = "Nada..."
    }
}

function clearOne() {
    const result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
  }
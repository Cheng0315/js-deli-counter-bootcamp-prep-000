function takeANumber(lineArr, name) {
  lineArr.push(name);
  var numberInLine = lineArr.length;
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(lineArr) {
  if (lineArr.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var customer = lineArr.splice(0, 1);
    return `Currently serving ${customer}.`;
  }
}

function currentLine(lineArr) {
  var customersInLineStr = '';

  if (lineArr.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < lineArr.length; i++) {
      var numberInLine = i + 1;
      var customer = lineArr[i];

      if (i === lineArr.length - 1) {
        customersInLineStr += `${numberInLine}. ${customer}`;
      } else {
        customersInLineStr += `${numberInLine}. ${customer}, `;
      }
    }
  }

  return 'The line is currently: ' + customersInLineStr;
=======
function takeANumber(arr, name) {
  arr.push(name);
  var numberInLine = arr.length;
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(arr) {
  if (arr.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return arr[0]
  }
>>>>>>> fbb2514b7238dbe5784e8868f8be65c464b64faf
}

function Calculator() {

  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "" });


  function numberHandler(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }

  function operatorHandler(value) {
    const total = doCalculation();
    setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
  }







  function doCalculation() {
    let total = parseInt(calc.total);
    debugger;
    console.log(calc.preOp);
    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);}

    return total;
  }

  function renderDisplay() {
    return calc.current;
  }

  function clearer() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "" });

  }

  return  (
    React.createElement("div", { className: "Calculator" },  
    React.createElement("div", { className: "display" }, renderDisplay()),  
    React.createElement(Calcbtton, { value: "7", onClick: numberHandler }),  
    React.createElement(Calcbtton, { value: "8", onClick: numberHandler }),  
    React.createElement(Calcbtton, { value: "9", onClick: numberHandler }),  
    React.createElement(Calcbtton, { className: "operator", value: "/", onClick: operatorHandler }),  

    React.createElement(Calcbtton, { value: "4", onClick: numberHandler }),  
    React.createElement(Calcbtton, { value: "5", onClick: numberHandler }),  
    React.createElement(Calcbtton, { value: "6", onClick: numberHandler }),  
    React.createElement(Calcbtton, { className: "operator", value: "*", onClick: operatorHandler }),  

    React.createElement(Calcbtton, { value: "1", onClick: numberHandler }),  
    React.createElement(Calcbtton, { value: "2", onClick: numberHandler }), 
    React.createElement(Calcbtton, { value: "3", onClick: numberHandler }),  
    React.createElement(Calcbtton, { className: "operator", value: "-", onClick: operatorHandler }),  

    React.createElement(Calcbtton, { className: "operation", value: "CLR", onClick: clearer }),  
    React.createElement(Calcbtton, { value: "0", onClick: numberHandler }),  
    React.createElement(Calcbtton, { className: "operation", value: "=", onClick: operatorHandler }),  
    React.createElement(Calcbtton, { className: "operator", value: "+", onClick: operatorHandler })));


}

function Calcbtton(props)
{
  return  (
    React.createElement("button", { className: props.className, onClick: () => props.onClick(props.value) }, props.value));

}

ReactDOM.render(  React.createElement("div", { className: "app_container" },  React.createElement(Calculator, null)), document.getElementById("root"));
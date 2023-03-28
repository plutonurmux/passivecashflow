function calculateMortgage() {
        const loanAmount = parseFloat(document.getElementById("loanAmount").value);
        const downPayment = parseFloat(document.getElementById("downPayment").value);
        const interestRate = parseFloat(document.getElementById("interestRate").value);
        const loanTerm = parseFloat(document.getElementById("loanTerm").value);
        const propertyTaxes = parseFloat(document.getElementById("propertyTaxes").value);
        const homeInsurance = parseFloat(document.getElementById("homeInsurance").value);
        
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;
        
        const loanAmountAfterDownPayment = loanAmount - downPayment;
        
        const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        const monthlyPaymentBeforeTaxInsurance = (loanAmountAfterDownPayment * (numerator / denominator)).toFixed(2);
        const monthlyPropertyTaxes = (propertyTaxes / 12).toFixed(2);
        const monthlyHomeInsurance = (homeInsurance / 12).toFixed(2);
        const monthlyPayment = (parseFloat(monthlyPaymentBeforeTaxInsurance) + parseFloat(monthlyPropertyTaxes) + parseFloat(monthlyHomeInsurance)).toFixed(2);
        const totalPayment = (monthlyPayment * numberOfPayments).toFixed(2);
        const totalInterest = (totalPayment - loanAmountAfterDownPayment).toFixed(2);
        const totalPropertyTaxes = (propertyTaxes * loanTerm).toFixed(2);
        const totalHomeInsurance = (homeInsurance * loanTerm).toFixed(2);
        
        document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
        document.getElementById("totalPayment").innerHTML = "$" + totalPayment;
           document.getElementById("totalInterest").innerHTML = "$" + totalInterest;
    document.getElementById("propertyTaxesMonthly").innerHTML = "$" + monthlyPropertyTaxes;
    document.getElementById("homeInsuranceMonthly").innerHTML = "$" + monthlyHomeInsurance;
    document.getElementById("resultTable").style.display = "block";
  }
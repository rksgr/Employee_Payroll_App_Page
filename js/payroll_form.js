/** UC 2: Set event listeners on document load */
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if (name.value.length == 0){
            textError.textContent ="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
        });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output-text');
    output.textContent = salary.value;
    
    // Display text corresponding to value on slider
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
    });


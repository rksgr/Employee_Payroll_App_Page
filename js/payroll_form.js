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

    
    /**UC 3: Create employee payroll object on save*/
    const save = ()=>{
        try{
            let employeePayrollData = createEmployeePayroll();
        }catch(e){
            return;
        }
    }
    const createEmployeePayroll = () =>{
        let EmployeePayrollData = new EmployeePayrollData();
        try{
            employeePayrollData.name = getInputValueById('#name');
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
        employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]').pop();
        employeePayrollData.salary = getSelectedValues('[name=salary]').pop();
        employeePayrollData.note = getSelectedValues('[name=note]').pop();

        let date=getInputValueById('#day')+ " "+ getInputValueById('#month')+ " "
                getInputValueById('#year');
        employeePayrollData.Date = Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }

    const getSelectedValues = (propertyValue) =>{
        let allItems = document.querySelectorAll(propertyValue);
        let sellItems = [];
        allItems.forEach(item =>{
            if(item.checked) sellItems.push(item.value);
        });
        return sellItems;
    }

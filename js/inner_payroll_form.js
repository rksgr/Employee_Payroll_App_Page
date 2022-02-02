
window.addEventListener('DOMContentLoaded',(event)  =>{
    createInnerHtml();
});
/** UC4: Display employee payroll details in tabular format using Template Literals*/
//Template Literal ES6 feature
const createInnerHtml = () =>{
    const innerHtml =`
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
    <tr>
    <td> <img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></td>
    <td>ALtaf Hussain</td>
    <td>Male</td>
    <td><div class='dept-label'>HR</div><div class='dept-label'>Finance</div></td>
    <td>5000000</td>
    <td>1 Nov 2020</td>
    <td>
        <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img name="2" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
    </td>
    </tr>`
    ;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

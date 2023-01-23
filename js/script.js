
// Section 3. The name field
// when the page first loads focus the name field. 

let name_field = document.getElementById("name");
name_field.focus();

// Section 4. the Job role section.
// when the page first loads hide the "other" job input
let other_job_role = document.getElementById("other-job-role");
other_job_role.style.display = "none";


let select_menu = document.getElementById("title");

// if other job role is selected, then display the "other job" text

select_menu.addEventListener("change", (e) => {


    if(e.target.value=== "other") { 

        other_job_role.style.display = "block";
    }

    else {other_job_role.style.display = "none";}


});



// Section 5. T-shirt

// disable the color select element:

let color_list = document.getElementById("color");
color_list.disabled = true;


// add event listener for changes made on the design dropdown menu.

let design_list = document.getElementById("design");

design_list.addEventListener("change", (e)=> {

color_list.disabled = false;



// enable/disable target js puns design depending on your choice

if(e.target.value === "js puns") {

    color_list.value = "cornflowerblue"

    for(let i = 1; i < 4; i++) {

        color_list.options[i].style.display = "block";
    }
    
    for(let i = 4; i < 7; i++) {

        color_list.options[i].style.display = "none";
    }


}

// enable/ diable target heart Js puns design depending on your choice

else {

    color_list.value = "tomato"
    
    for(let i = 1; i < 4; i++) {

        color_list.options[i].style.display = "none";
    }
    
    for(let i = 4; i < 7; i++) {

        color_list.options[i].style.display = "block";
    }


    
}

} )

//section 6 calculate the total cost of the chosen activities.

let activities = document.getElementById("activities");
let total_cost_string = document.getElementById("activities-cost").textContent;
let regex = /\d+/;
total_cost_string = total_cost_string.match(regex);
total_cost = parseInt(total_cost_string);



activities.addEventListener("change" , (e)=> {

if(e.target.checked) { 

    let activity_cost = e.target.getAttribute("data-cost");
    activity_cost = parseInt(activity_cost);
    total_cost = total_cost + activity_cost; 
    total_cost_string = total_cost.toString();
    total_cost_string = "Total:" + " " + "$"+total_cost_string;
    let total_cost_displayed = document.getElementById("activities-cost").textContent = total_cost_string;


}

else{
    
    let activity_cost = e.target.getAttribute("data-cost");
    activity_cost = parseInt(activity_cost);
    total_cost = total_cost - activity_cost; 
    total_cost_string = total_cost.toString();
    total_cost_string = "Total:" + " " + "$"+total_cost_string;
    let total_cost_displayed = document.getElementById("activities-cost").textContent = total_cost_string;


}


})


//section 7 payment info. 


//select credit card sections 

let creditcard_sections = document.getElementById("credit-card");


// display credit card pmt as a default 


let creditcard_display = document.getElementById("payment");
creditcard_display.options[1].setAttribute("selected", "selected");




// select the payment dropdown menu

let pmt = document.getElementById("payment");


// hide paypal and bitcoin sections as default

let paypal = document.getElementById("paypal");
paypal.style.display = "none";

let bitcoin = document.getElementById("bitcoin");
bitcoin.style.display = "none";

/* Create event listener to diplay different 
payments methods according to the one selected */

pmt.addEventListener("change",(e)=> {

    if(e.target.value === "credit-card") {
         
        creditcard_sections.style.display = "block"
        paypal.style.display = "none";
        bitcoin.style.display = "none";

    }
 
    else if (e.target.value === "paypal") {

        paypal.style.display = "block";
        bitcoin.style.display = "none"
        creditcard_sections.style.display = "none"

    }


    else if (e.target.value === "bitcoin") {
        
        paypal.style.display = "none";
        bitcoin.style.display = "block"
        creditcard_sections.style.display = "none"
    
    }

});


// Section 8. Form validation
// select the form 

let form = document.querySelector("form");


//create function for name field

function name_input(name) {


    name_field.setAttribute("value","value");
    name_field.value = name
    
    
    if(/[a-zA-Z]+\s*[a-zA-Z]+/.test(name)) {

        return true

    }

    else {

        return false

    }

};


// create function for email field 

let email_field = document.getElementById("email");


function email (email) {


    email_field.value = email;


    if(email.match(/.+\@.+\.com/)) {

        return true

    }


    else {
        
        return false
    
    }


}


// create a function to make sure at least 1 checkbox is checked. 

let checkboxes = document.querySelectorAll("input[type = checkbox]")


function checkonebox() {


    for(let i = 0; i<checkboxes.length; i++) {

        
        if(checkboxes[i].checked) {

            return true
            
       }

    
    }

}


// create a function to validate regular expressions for credit card components
//select credit card elements

let creditcard_number = document.getElementById("cc-num");
let zipcode_number = document.getElementById('zip');
let cvv_number = document.getElementById('cvv');

//create the credit card number function

function credit_card_num(num) {

    creditcard_number.value = num;
    let creditcard_tostring = num.toString()
    let creditcard_regex = /\d{13,16}/

    if(creditcard_tostring.match(creditcard_regex)) {

        return true
    }

    }


// create the zipcode number function


function zipcode_num(zip) {


    zipcode_number.value = zip;
    let zipcode_tostring = zip.toString();
    let zipcode_regex = /^\d{5}$/

    if( zipcode_tostring.match(zipcode_regex)) {


        return true

}


}

// Create the CVV number function


function cvv_num(cvv) {

    let cvv_regex  = /^\d{3}$/; 
    cvv_number.value = cvv;
    let cvv_tostring = cvv.toString();


    if(cvv_tostring.match(cvv_regex)) {
    
    return true 

    }

}


/*Create a submission event to listen for the correct name, email and credit card
values before submiting the form */


form.addEventListener("submit", (e)=> {

    if(name_input(name_field.value) && email(email_field.value) 
    && checkonebox() && 
    credit_card_num(creditcard_number.value) && zipcode_num(zipcode_number.value) &&
    cvv_num(cvv_number.value)) 

    {  

        e.submit;

    }

    
    else if(name_input(name_field.value) && email(email_field.value) 
    && checkonebox() && pmt.value === "bitcoin") {


        e.submit;


    }


    else if(name_input(name_field.value) && email(email_field.value) 
    && checkonebox() && pmt.value === "paypal") {


        e.submit;


    }






    else{

        
        if(name_input(name_field.value)) {

            name_active();

        }



        else{


            name_unactive();


        }


        if (email(email_field.value)) {
                    
            email_active();
                 

        }

        else {

            email_unactive();
        
        }

    
        if(checkonebox()) {

            activities_active();

        }


        else {


            activities_unactive();

        }
      


        if(credit_card_num(creditcard_number.value)) {

            creditcard_active();


        }


        else{


            creditcard_unactive();


        }



        if(zipcode_num(zipcode_number.value)){


            zipcode_active();


        }


        else {


            zipcode_unactive();


        }



        if(cvv_num(cvv_number.value)) {

            cvv_active();


        }


        else{ 

            cvv_unactive();

        }



        e.preventDefault();

    }
     
            

    })
    

//section 9. Acccesability
    
/* Create a focus event for increase website accessability 
This will add the focus class to the activity that was just clicked
*/

for(let i =0; i<checkboxes.length; i++) {


checkboxes[i].addEventListener("focus", (e)=> {

    e.target.parentElement.classList.add("focus")
    
})

}    
    

/*Create a blur event that will remove the focus class from previously
clicked activities
*/

for(let i = 0; i<checkboxes.length; i++) {

    checkboxes[i].addEventListener("blur",(e) => {

    
    e.target.parentElement.classList.remove("focus")

})

}



/* make invalid inputs obvious to all users.
Create functions that will make valid and invalid the info 
entered on each field. This functions will be used above on 
the submit form event. 
*/ 

// functions for the name field 

let name_hint = document.getElementById("name-hint")

function name_active() {

    name_field.parentElement.classList.add("valid")
    name_field.parentElement.classList.remove("not-valid")
    name_hint.remove();

}


function name_unactive() {

    name_field.parentElement.appendChild(name_hint)
    name_hint.style.display = "block"
    name_field.parentElement.classList.add("not-valid")
    name_field.parentElement.classList.remove("valid")
    
}



//functions for the email field

let email_hint = document.getElementById("email-hint")

   function email_active () {
    
        email_field.parentElement.classList.add("valid")
        email_field.parentElement.classList.remove("not-valid");
        email_hint.remove();
    }
    
    function email_unactive () {

        email_field.parentElement.appendChild(email_hint)
        email_hint.style.display = "block"
        email_field.parentElement.classList.add("not-valid");
        email_field.parentElement.classList.remove("valid");
        
    }
    


    // functions for the activities section     

    let activities_hint = document.getElementById("activities-hint")
    
    function activities_active () {
  
    if(checkonebox()) {
        
        
        activities.classList.add("valid");
        activities.classList.remove("not-valid");
        activities_hint.remove()
    
            }
    }
    
       
    function activities_unactive () {

    if(!checkonebox()) {
        
            
        activities.appendChild(activities_hint)
        activities_hint.style.display = "block"
        activities.classList.add("not-valid") 
        activities.classList.remove("valid");
                
         }
    }        
    
    // functions for the credit card number

    let creditcard_hint = document.getElementById("cc-hint")

    function creditcard_active() {

        if(credit_card_num(creditcard_number.value)) {

            creditcard_number.parentElement.classList.add("valid")
            creditcard_number.parentElement.classList.remove("not-valid")
            creditcard_hint.remove();
        }
    }


    function creditcard_unactive() {

        if(!credit_card_num(creditcard_number.value)) {

            
            
            creditcard_hint.style.display = "block"
            creditcard_number.parentElement.classList.add("not-valid")
            creditcard_number.parentElement.classList.remove("valid")
            creditcard_number.parentElement.appendChild(creditcard_hint);

        }

    }


    //functions for the zipcode number 

    let zipcode_hint = document.getElementById("zip-hint")

    function zipcode_active() {
   

        if(zipcode_num(zipcode_number.value)) {

            zipcode_number.parentElement.classList.add("valid")
            zipcode_number.parentElement.classList.remove("not-valid")
            zipcode_hint.remove()
        }

    
    }   

    function zipcode_unactive() {

        if(!zipcode_num(zipcode_number.value))
            
            zipcode_number.parentElement.appendChild(zipcode_hint)
            zipcode_hint.style.display = "block"
            zipcode_number.parentElement.classList.add("not-valid")
            zipcode_number.parentElement.classList.remove("valid")

    }


    //functions for the CVV number 

    let cvv_hint = document.getElementById("cvv-hint")

    function cvv_active () {


        if(cvv_num(cvv_number.value)) {


            cvv_number.parentElement.classList.add("valid")
            cvv_number.parentElement.classList.remove("not-valid")
            cvv_hint.remove()
        }
    };

    function cvv_unactive() {

        if(!cvv_num(cvv_number.value))
            
            cvv_number.parentElement.appendChild(cvv_hint)
            cvv_hint.style.display = "block"
            cvv_number.parentElement.classList.add("not-valid")
            cvv_number.parentElement.classList.remove("valid")

    }


    
// END 


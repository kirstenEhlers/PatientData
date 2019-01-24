
var patientData;

function loadJSON(filePath, success, error)
{
    var xhr = new XMLHttpRequest();
        
    xhr.onreadystatechange = function()
    {
            
        if (xhr.readyState === XMLHttpRequest.DONE) 
        {
                
            if (xhr.status === 200) 
            {

                patientData = JSON.parse(xhr.responseText);
                     
            } else 
            {
                if (error)
                {
                    error(xhr);
                }
            }
                
                
            
        }
    };
        
        xhr.open("GET", filePath, true);
        xhr.send();
        
    }

    
loadJSON("2019_01_Kirsten_Ehlers_QA.json", true, false );



window.onload = function()
{
    //change name
    var name = document.getElementById("name");
    name.innerHTML = patientData.name.given +" "+ patientData.name.family;

    //change organization
    var organization = document.getElementById("organization");
    organization.innerHTML = patientData.managingOrganization.display;

    //change gender
    var gender = document.getElementById("gender");
    gender.innerHTML = patientData.gender;

    //print number of conditions
    var numConditions = document.getElementById("numConditions");
    numConditions.innerHTML = patientData.conditions.length;

    var conditions = document.getElementById("conditions");

    //add first condition to string
    conditions.innerHTML = patientData.conditions[0];

    for(var i = 1; i < patientData.conditions.length; i++)
    {
        conditions.innerHTML = patientData.conditions[i] + ", " + conditions.innerHTML;

    }

   
    
}
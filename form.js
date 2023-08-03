var allerrors = [];

var vaildValus =[];


subBtn=document.getElementById("subBtn")
subBtn.addEventListener("click",function (e){   

    e.preventDefault();

    const gender = document.getElementsByName("gender");
      console.log(gender);
    const sports = document.getElementsByName("sports");

  const errors = document.getElementsByClassName("error");

  console.log(errors)
  let errornum = 0;
  let noerrornum = 0;
  let sportsch=0;
  function errfun(num,array,index) {
    
    allerrors[errornum]=num;
    errornum++;
  }
    function noerrorfun(num,array,index) 
    {
        vaildValus[noerrornum]=num;
        noerrornum++;
        
    }
    (!/^[a-zA-xZ\s]{8,}$/g.test(name1.value))? errfun(0) : noerrorfun(0);
    (!/^[a-z]{3,}\d*@(yahoo|gamil)(.com)$/.test(email.value)) ? errfun(1):noerrorfun(1);
    (!/^\w{8,}$/.test(password.value))? errfun(2) : noerrorfun(2);
    (gender[0].checked || gender[1].checked)? noerrorfun(3): errfun(3); 
    console.log(gender[0]);
    for (let i = 0; i < sports.length; i++) {
        if(sports[i].checked)
        sportsch++
        
    }
    (sportsch<2)?errfun(4) : noerrorfun(4);
    (countryid.value=="")?errfun(5):noerrorfun(5);

    for (let i = 0; i < allerrors.length; i++) {
        errors[allerrors[i]].style.display = "block";  
    }
    
    for (let i = 0; i < vaildValus.length; i++) {
        errors[vaildValus[i]].style.display = "none";
      
    }

    allerrors =[];
    vaildValus=[];
})
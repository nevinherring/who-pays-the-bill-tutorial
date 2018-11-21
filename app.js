(function GetLoser(){

    this.applicants = [];

    this.init = function(){
        this.addApplicants();
    }

    this.addApplicants = function(){

        function generateList(input){

            var value = input.value;
            if(this.checkValid(value.toLowerCase())){
            applicants.push(value.toLowerCase());
            input.value = '';
            } else {
                alert("no duplicate names, please list only unique names");
            }
            console.log(applicants);
        }

        var addBtn = document.querySelector("#add_applicant");
        addBtn.addEventListener("click", function(){

            var input = document.querySelector("#applicant_value");
            generateList(input);

        });
    }

    this.checkValid = function(value){
        
        if(applicants.indexOf(value) < 0  && value !== ''){
            return true;
        } else {
            return false;
        }
        
    }


    this.init();
})();
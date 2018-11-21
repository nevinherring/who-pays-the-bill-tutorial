(function GetLoser(){

    this.applicants = [];

    this.init = function(){
        this.addApplicants();
    }

    this.addApplicants = function(){
        var addBtn = document.querySelector("#add_applicant");

        function generateList(input){

            var value = input.value;

            applicants.push(value);
            input.value = '';

            console.log(applicants);
        }

        addBtn.addEventListener("click", function(){

            var input = document.querySelector("#applicant_value");
            generateList(input);

        });
    }



    this.init();
})();
(function GetLoser(){

    this.applicants = [];

    this.init = function(){
        this.addApplicants();
        this.getRandomUser();
        this.runAgain();
        this.startOver();
    };

    this.showList = function(){

        var parent = document.querySelector(".applicant_list_wrapper");
        var template = '';

        for(var i = 0; i < applicants.length; i++){
            template += '<span class="name-tag" data-id="'+ i +'">' + applicants[i] + '</span>'
        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteOne();
    }

    this.addApplicants = function(){

        function generateList(input){

            var value = input.value;
            if(this.checkValid(value.toLowerCase())){
            applicants.push(value.toLowerCase());
            input.value = '';
            showList();
            } else {
                alert("no duplicate names, please list only unique names");
            }
            
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

    this.deleteOne = function(){

        var item = document.querySelectorAll('.name-tag');

        function removeIt(element){
            var attr = parseInt(element.getAttribute('data-id'));

            applicants.splice(attr, 1);
            this.showList();
        }


        for(var i = 0; i < item.length; i++){
            item[i].addEventListener('click', function(){
                removeIt(this);
            });
        }

    };

    this.getRandomUser = function(){
        var resultsButton = document.querySelector('#show_results');
        
        function showLooser(){
            var resultsContainer = document.querySelector('.results_container');
            var applicantsContainer = document.querySelector('.applicant_container');

            applicantsContainer.className += ' hidden';
            resultsContainer.className = 'results_container';

            showRandomUser();
        }
        
        resultsButton.addEventListener('click', function(e){
            if(applicants.length > 1){
                showLooser();
            }
        });
    }

    this.showRandomUser = function(){

        var resultContainer = document.querySelector('.result');
        var rand = applicants[Math.floor(Math.random() * applicants.length)];

        resultContainer.innerHTML = '';
        resultContainer.insertAdjacentHTML('afterbegin', '<h3>' + rand + '</h3>');

    }

    this.runAgain = function(){
        
        runAgainBtn = document.querySelector('.run_again');
        runAgainBtn.addEventListener("click", function(e){
            showRandomUser();
        });
    }

    this.startOver = function(){
        var startAgainBtn = document.querySelector('.start_again');

        startAgainBtn.addEventListener('click', function(){
            var applicantsContainer = document.querySelector('.applicant_caontainer');
            var applicantsWrapper = docuement.querySelector('.applicants_list_wrapper');

            applicantsContainer.className = 'applicant_container';
            resultsContainer.className = 'results_container hidden';
            applicantsWrapper.innerHTML = '';

            applicants = [];
        });
    }

    this.init();
})();
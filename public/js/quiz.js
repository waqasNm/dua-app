var app = angular.module('MyApp',[]);
app.controller('quizController',function($scope,$rootScope,$interval,$timeout){
    
    /*Get SignUp Data from localStorage*/
    $scope.signUpData = JSON.parse(localStorage.getItem('data'));
    if($scope.signUpData === null){
        location = "index.html";
    }    

    /*Time Duration & Start Button*/
    $scope.start = false;
    $scope.duration = 600000;
    $scope.format = "mm:ss";
    
    $scope.startQuiz = function(){
        increment =  $interval(function(){
            $scope.duration -=1000;
            if($scope.duration === 0){
                $interval.cancel(increment);
                if($scope.quest_index < $scope.questions.length){
                    $scope.quest_index = $scope.questions.length;
                    for(var i = 0 ; i < answers.length; i++){
                        if(answers[i] === $scope.questions[i].correctAns){
                            $scope.counter++;
                            $scope.obtMarks += $scope.questions[i].Marks;
                        }
                    }
                    $scope.score = ($scope.obtMarks * 100)/50;
                }
            }
    },1000);    
        $scope.start = true;
    }


    /*Quiz Data*/
    $scope.questions = [{
        quest:'what does HTML stand for?',
        opt1:'Hyper Text Markup Language',
        opt2:'Home Tool Markup Language',
        opt3:'Hyperlinks and Text Markup Language',
        correctAns:'opt1',
        Marks:5
    },
    {
        quest:'What is Latest version of HTML?',        
        opt1:'HTML4',
        opt2:'XML',
        opt3:'HTML5',
        correctAns:'opt3',
        Marks:5
    },
    {
        quest:'Who is making the Web standards?',        
        opt1:'Google',
        opt2:'The World Wide Web Consortium',
        opt3:'Mozilla',
        correctAns:'opt2',
        Marks:5
    },
    {
        quest:'Choose the correct HTML element for the largest heading:',        
        opt1:'<h6>',
        opt2:'<heading>',
        opt3:'<h1>',
        correctAns:'opt3',
        Marks:5
    },
    {
        quest:'What is the correct HTML for adding a background color?',        
        opt1:'<body bg="yellow">',
        opt2:'<body style="background-color:yellow;">',
        opt3:'<background>yellow</background>',
        correctAns:'opt2',
        Marks:5
    },
    {
        quest:'Choose the correct HTML element to define emphasized text',        
        opt1:'<italic>',
        opt2:'<i>',
        opt3:'<em>',
        correctAns:'opt3',
        Marks:5
    },
    {
        quest:'What is the correct HTML for creating a hyperlink?',        
        opt1:'<a href="http://www.w3schools.com">W3Schools</a>',
        opt2:'<a name="http://www.w3schools.com">W3Schools.com</a>',
        opt3:'<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctAns:'opt1',
        Marks:5
    },
    {
        quest:'How can you make a numbered list?',        
        opt1:'<ul>',
        opt2:'<list>',
        opt3:'<ol>',
        correctAns:'opt3',
        Marks:5
    },
    {
        quest:'Which HTML element defines the title of a document?',        
        opt1:'<head>',
        opt2:'<title>',
        opt3:'<meta>',
        correctAns:'opt2',
        Marks:5
    },
    {
        quest:'In HTML, which attribute is used to specify that an input field must be filled out?',        
        opt1:'placeholder',
        opt2:'required',
        opt3:'validate',
        correctAns:'opt2',
        Marks:5
    }];

    $scope.quest_index = 0;
    var answers = [];
    $scope.obtMarks = 0;
    $scope.counter = 0;
    $scope.next = function(){
        var radioCheck = document.getElementsByTagName('input');
        var bool = false;
        
        for(var i=0;i < radioCheck.length;i++){
            if(radioCheck[i].checked){
                answers.push(radioCheck[i].value);                
                bool = true;
            }
        }

        if(bool){
            if($scope.quest_index < $scope.questions.length - 1){
                $scope.quest_index++;
            }else if($scope.quest_index === $scope.questions.length - 1){
                $scope.quest_index++;
                    for(var i = 0 ; i < answers.length; i++){
                        if(answers[i] === $scope.questions[i].correctAns){
                            $scope.counter++;
                            $scope.obtMarks += $scope.questions[i].Marks;
                            console.log("correct");
                        }
                    }
                    $scope.score = ($scope.obtMarks * 100)/50;
                    
                    $interval.cancel(increment);
                    console.log("Questions Finished");

            }else{
                console.log("Something wrong");
                }    
            }

            if($scope.score >= 90){
                $scope.comment = "Great job Well Done!";
            }else if($scope.score >=80 && $scope.score <=89){
                $scope.comment = "Keep it up!";
            }else if($scope.score >= 70 && $scope.score <=79){
                $scope.comment = "You should work hard";
            }else if($scope.score < 70 ){
                $scope.comment = "Sorry you are fail";
            }
            
    };    
});






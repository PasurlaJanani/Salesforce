import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}//for Storing answers
    correctAnswers=0;//to show the result
    isSubmitted=false //use to show the number of correct answers
    myQuestions=[
        {
            id:'Question1',
            Question:"Which of the following is not a template loop?",
            answers:{
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer:"c"
        },
        {
            id:'Question2',
            Question:"Which of the file is invalid in LWC Component Folder?",
            answers:{
                a:'.svg',
                b:'.apex',
                c:'.js'
            },
            correctAnswer:"b"
        },
        {
            id:'Question3',
            Question:"Which of the following is not a directive?",
            answers:{
                a:'for:each',
                b:'if:true',
                c:'@track'
            },
            correctAnswer:"c"
        }
        
    ]
    //used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length);
    }
    //for applying dynmaic styling to the result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error' }`
    }
    //change handler get's called when the radio button is selected
    changeHandler(event){
        //console.log("name",event.target.name);
       // console.log("value",event.target.value);
        const {name,value}=event.target;
        this.selected={...this.selected,[name]:value};
    
    }
    //Form submit handler   
    submitHandler(event){
        event.preventDefault();
        let correct =this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer);
        this.correctAnswers=correct.length;
        this.isSubmitted=true;
        //console.log("correct answer",this.correctAnswers);

    }
    //form reset Handler
    resetHandler(event){
        this.selected={};
        this.correctAnswers=0; 
        this.isSubmitted=false;
    }
}
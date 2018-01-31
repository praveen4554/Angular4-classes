var a = 10;


var count:Number;
var userName:String;
var isAgree:Boolean;
var users:Array<String>;
var cart:[String,Number];
cart = ['name',10];

var [x,y]=[3,4];
var a=20;

var [x,y,...rajesh]=[3,4,5,6,7,8];



enum Color {'RED','GREEN','YELLOW'};


let da:Number;
  da= 10;
  function value(){
      console.log(x);
      console.log(y);
      console.log(rajesh[0]);
      console.log(Color.GREEN);
      let da = 20;
  }
value();
  class base {
     message:String;
    //  constructor(){
    //      this.message = 'Angular4';
    //  }
     constructor(name:String){
         this.message = name;
     }
  }
interface tsc{
      message:String;
     fullName();
  }
  interface Test{
      firstName();
  }
  class Angular extends base implements tsc,Test{
      constructor(){
           super('praveen');
      }
      fullName(){
          return 'praveen';
      }
      firstName(){
          return 'praveen';
      }
  }
  
var ang = new Angular();
var bas= new base('praveen');
  

//   var name= 10; // global scope


//   class anular{
//       constructor(){
//           var name = 20;
//       function fullName(){
//           var name = 30;
//       }
//       }
//   }





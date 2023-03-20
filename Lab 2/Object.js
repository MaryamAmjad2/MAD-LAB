// const Function 
function MyBio( firstName,lastName,Age,GPA,Universty,Interest,pets,department,hometown,show)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.Age=Age;
    this.GPA=GPA;
    this.Universty=Universty;
    this.Interest=Interest;
    this.pets=pets;
    this.department=department;
    this.hometown=hometown;
   this.show= function (){
    document.write("HI"+"\n");
    doc
document.write(" My Name is " +firstName+ " " +lastName);
document.write(" I am currently " +Age + " years  old");
document.write(" I am a Student of "+department+" at "+Universty+ " <br> My Current CGPA is "+GPA);
document.write( " My Interest are "+Interest+ " I have "+pets);
document.write("Thats All");
    }


}
//document.write("huhu");
const myObj=new MyBio("Maryam","Amjad",20,3.42,"Comsats","NOT Specific","Two cats","Computer Science","Attock");
myObj.show();

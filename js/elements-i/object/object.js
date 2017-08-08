function Cgpa(m)
{
	with(this)
	{
		cgpa=m;
	}
}
function student(admno,rollno,name,clas,section)
{
	this.admno=admno;
	this.rollno=rollno;
	this.name=name;
	this.class=clas;
	this.section=section;
	this.addCgpa=Cgpa;
}
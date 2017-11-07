 
var data={
	name :"Aashish Karki",
	img:"images/image.PNG",
	dateOfBirth:"2052/02/25",
	occupation:"Intern",

	address: {
		permanent:"Dolakha,Jhaphe",
		temprorary:"Putalisadak,Kathmandu"
	},

	contact:{
		email:"aashish.y2z@gmail.com",
		phone:"981381XXXX"
	},
	education:{
		HighSchool:"Spangle Boarding High School",
		College:"Glacier Int'l college",
		Bachelors:"St Xavier's College"
	},

	socialmedia:[
		{ 
			icons:"images/social/fb.png",
			href:"https:fb.com/aashish.karki.9"		
		},
		{ 
			icons:"images/social/github-logo.png",
			href:"https:github.com/karkipy"		
		},
		{ 
			icons:"images/social/insta.png",
			href:"https:instagram.com/"		
		},		{ 
			icons:"images/social/linkedin.png",
			href:"https:linkedin.com/aashish.karki"		
		},		{ 
			icons:"images/social/google.png",
			href:"https:google.com/aashish.karki.9"		
		},
	]
	,
	hobbies:["Hobby1","Hobby2","Hobby3"],
	skills:{
		ProgrammingLanguage :["php","java"]

	},
	quotes:["You can do anything once you set your mind to - Eminem "]
}

var body,maindiv;//initialize the containers requirements to be accessed later on
init();
divInitialized();

function init() {
	body= document.getElementsByTagName("BODY")[0];

	body.style.padding="0";
	body.style.margin="0";

	maindiv = document.createElement("div");
	maindiv.style.width="530px";
	maindiv.id="container";
	maindiv.style.height="650px";
	maindiv.style.background="#F5F5F5";
	maindiv.style.margin="0 auto";
	maindiv.style.border="solid 2px black";
	body.appendChild(maindiv);
}


function initTable(){

	var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    maindiv.appendChild(table);
    table.width="100%";


    var rowOne = document.createElement("TR");
    rowOne.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(rowOne);

    var rowOneColumnOne = document.createElement("TD");
    rowOneColumnOne.style.border="1px solid black";
    var t = document.createTextNode("cell");
    rowOneColumnOne.appendChild(t);



    document.getElementById("myTr").appendChild(rowOneColumnOne);

}



function divInitialized(){
	var photocontainer=document.createElement("div");
	photocontainer.style.width="45%";
	photocontainer.style.float="left";
	photocontainer.style.height="350px";
 
	var photo=document.createElement("img");
	photo.src=data.img;
	photo.style.width="100%";
	photo.style.height="100%";

	photocontainer.appendChild(photo);

	maindiv.appendChild(photocontainer);
	var infocontainer=document.createElement("div");
	infocontainer.style.width="50%";
	infocontainer.style.float="right";
	infocontainer.style.height="350px";
	 
 

	var nameHeader=document.createElement("h1");

	nameHeader.appendChild(document.createTextNode(data.name));
	infocontainer.appendChild(nameHeader);

	var dateOfBirth=document.createElement("p");
	dateOfBirth.appendChild(document.createTextNode("D.O.B : "+data.dateOfBirth));
	infocontainer.appendChild(dateOfBirth);
	var occupation=document.createElement("p");	
	occupation.appendChild(document.createTextNode("Current Occupation : "+data.occupation));
	infocontainer.appendChild(occupation);


	var  address=document.createElement("p");

	address.appendChild(document.createTextNode("Address :"));
	address.style.fontWeight = "900";
	infocontainer.appendChild(address);


	var permanentAddress=document.createElement("p");

	permanentAddress.appendChild(document.createTextNode("Permanent : "+data.address.permanent));
	permanentAddress.style.marginLeft = "15px";
	infocontainer.appendChild(permanentAddress);

 
	var currentAddress=document.createElement("p");

	currentAddress.appendChild(document.createTextNode("Current: "+data.address.temprorary));
	currentAddress.style.marginLeft = "15px";
	infocontainer.appendChild(currentAddress);



 

	var  quotes=document.createElement("p");

	quotes.appendChild(document.createTextNode("Quotes :"));
	quotes.style.fontWeight = "900";
	infocontainer.appendChild(quotes);

	var quotesContainer=document.createElement("p");

	quotesContainer.appendChild(document.createTextNode(data.quotes[0]));
 
	infocontainer.appendChild(quotesContainer);

	maindiv.appendChild(infocontainer);







	var socailMedaiContainer=addSocialMedia();
 

	maindiv.appendChild(socailMedaiContainer);



	var restcontainer=document.createElement("div");
	restcontainer.style.width="50%";
	restcontainer.style.float="right";
	restcontainer.style.height="46%";
 
	 



	var  hobbies=document.createElement("p");

	hobbies.appendChild(document.createTextNode("Hobbies :"));
	hobbies.style.fontWeight = "900";
	restcontainer.appendChild(hobbies);



	var  hobbieslist=document.createElement("ul");

	for(var i=0;i<data.hobbies.length;i++){
		var  indvlist=document.createElement("li");
		indvlist.appendChild(document.createTextNode(data.hobbies[i]));

		hobbieslist.appendChild(indvlist);
	}


	restcontainer.appendChild(hobbieslist);



	var  skills=document.createElement("p");
	skills.appendChild(document.createTextNode("Skills :"));
	skills.style.fontWeight = "900";
	restcontainer.appendChild(skills);

	var  skillslist=document.createElement("ul");

		for(var i=0;i<data.skills.ProgrammingLanguage.length;i++){
			var  indvlist=document.createElement("li");
			indvlist.appendChild(document.createTextNode(data.skills.ProgrammingLanguage[i]));

			skillslist.appendChild(indvlist);
		}


	restcontainer.appendChild(skillslist);


	maindiv.appendChild(restcontainer);

}



function addSocialMedia(){


	var  socailMedaiContainer=document.createElement("div");
	socailMedaiContainer.style.width="45%";
	socailMedaiContainer.style.float="left";
	socailMedaiContainer.style.height="46%";
 

	var nameHeader=document.createElement("h3");
	nameHeader.style.margin="15px";
	nameHeader.appendChild(document.createTextNode("Social Links"));
	socailMedaiContainer.appendChild(nameHeader);




	for(var i=0;i<data.socialmedia.length;i++){
			var  alink=document.createElement("a");
			alink.href=data.socialmedia[i].href;

			var socialicons=document.createElement("img");
			socialicons.src=data.socialmedia[i].icons;
			socialicons.height="30";
			socialicons.style.margin="15px";
			alink.appendChild(socialicons);

			socailMedaiContainer.appendChild(alink);

	}


	return socailMedaiContainer;
}



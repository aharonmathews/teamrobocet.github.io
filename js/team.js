var team = [
  {
    img: "images/team/adarsh.jpg",
    Name: "Adarsh Anil",
    Position: "Chairperson",
    Department: "Electronics Department",
  },
  {
    img: "images/team/shrada.jpg",
    Name: "Shradha Murali",
    Position: "Vice Chairperson",
    Department: "Electrical Department",
  },
  {
    img: "images/team/Sourav Satheesh.jpg",
    Name: "Sourav Satheesh",
    Position: "Secretary",
    Department: "Computer Science Department",
  },

  {
    img: "images/team/ASWIN_JAYAJI.jpg",
    Name: "Aswin Jayaji",
    Position: "Treasurer",
    Department: "Computer Science Department",
  },

  {
    img: "images/team/Padman.jpg",
    Name: "Padmanabhan Rajesh",
    Position: "Overseer",
    Department: "Electrical Department",
  },
  {
    img: "images/team/Nanda.jpg",
    Name: "Nanda R",
    Position: "PRO",
    Department: "Electrical Department",
  },

  {
    img: "images/team/Nandan.png",
    Name: "Nandan NK",
    Position: "Media Head",
    Department: "Computer Science Department",
  },
  {
    img: "images/team/Rizvan M S.png",
    Name: "Rizvan",
    Position: "Event Head",
    Department: "Mechanical Department",
  },
  {
    img: "images/team/Muhammed B.jpg",
    Name: "Muhammed Bilal",
    Position: "Project Head",
    Department: "Mechanical Department",
  },
  {
    img: "images/team/Sooraj Menon.png",
    Name: "Sooraj Menon",
    Position: "Project Head",
    Department: "Electronics Department",
  },
  {
    img: "images/team/MATHEW VK.jpg",
    Name: "Mathew V Kariath",
    Position: "Web Admin",
    Department: "Computer Science Department",
  },
  {
    img: "images/team/Adarsh Varghese.jpg",
    Name: "Adarsh Varghese",
    Position: "Inventory Management",
    Department: "Electronics Department",
  },
  {
    img: "images/team/Shehin.jpg",
    Name: "Muhammed Shehin",
    Position: "Media Team",
    Department: "Electrical Department",
  },
  {
    img: "images/team/arshid.png",
    Name: "Muhammed Arshid VK",
    Position: "Media Team",
    Department: "Electrical Department",
  },
  {
    img: "images/team/Appu J.jpg",
    Name: "Appu J",
    Position: "Documentation Team",
    Department: "Electronics Department",
  },
  {
    img: "images/team/chirutha.jpg",
    Name: "Chirutha K",
    Position: "Documentation Team",
    Department: "Electrical Department",
  },
  {
    img: "images/team/Judy.jpg",
    Name: "Judy Teresa",
    Position: "Publicity Team",
    Department: "Electronics Department",
  },
  {
    img: "images/team/Sandra.jpg",
    Name: "Sandra Davis",
    Position: "Publicity Team",
    Department: "Electronics Department",
  },
];

var i;

for (i = 0; i < 26; ++i) {
  let html = document.getElementById("row").innerHTML;
  html +=
    '<div class="col-sm-4 col-md-3 col-6 team-member">' +
    '<div class="team-image">' +
    '<img src="' +
    team[i]["img"] +
    '">' +
    "</div>" +
    '<div class="team-info">' +
    '<span class="team-position">' +
    team[i]["Position"] +
    "</span><br>" +
    '<span class="team-name">' +
    team[i]["Name"] +
    "</span><br>" +
    '<span class="team-department">' +
    team[i]["Department"] +
    "</span>" +
    "</div>" +
    "</div>";
  document.getElementById("row").innerHTML = html;
}

var team = [
  {
    img: "images/team/Bilal.jpg",
    Name: "Muhammed Bilal O P",
    Position: "Chairperson",
    Department: "",
  },
  {
    img: "images/team/Shehin.jpg",
    Name: "Muhammed Shehin S",
    Position: "Vice Chairperson",
    Department: "",
  },
  {
    img: "images/team/sooraj menon.jpg",
    Name: "Sooraj Menon",
    Position: "Secretary",
    Department: "",
  },

  {
    img: "images/team/Judy.jpg",
    Name: "Judy Teresa Zacharia",
    Position: "Treasurer",
    Department: ""
  },
  {
    img: "images/team/Anu.jpg",
    Name: "Anu Francis Alapatt",
    Position: "Documentation Head",
    Department: "",
  },
  {
    img: "images/team/Bhavya.jpg",
    Name: "Bhavya Nair",
    Position: "Design Head",
    Department: "",
  },

  {
    img: "images/team/Denis.jpg",
    Name: "Denis George Joseph",
    Position: "Media Head",
    Department: "",
  },
  {
    img: "images/team/Suhail.jpg",
    Name: "Muhammed Suhail K M",
    Position: "Event Head",
    Department: "",
  },
  {
    img: "images/team/Manu.jpg",
    Name: "Manu N S",
    Position: "Project Head",
    Department: "",
  },
  {
    img: "images/team/Arjun.jpg",
    Name: "Arjun A I",
    Position: "Project Head",
    Department: "",
  },
  {
    img: "images/team/Aharon.jpg",
    Name: "Aharon Mathews",
    Position: "Web Admin",
    Department: "",
  },
  {
    img: "images/team/Irfaan.jpg",
    Name: "Mohammed Irfaan Rashid A M",
    Position: "Workshop Head",
    Department: "",
  },
  {
    img: "images/team/Sarang.jpg",
    Name: "Sarang S",
    Position: "Workshop Head",
    Department: "",
  },
  {
    img: "images/team/Aarsha.jpg",
    Name: "Aarsha Padmarajan",
    Position: "Women In Robotics",
    Department: "",
  },
  {
    img: "images/team/Rafi.jpg",
    Name: "Mohhamed Rafi K T",
    Position: "Event Team",
    Department: "",
  },
  {
    img: "images/team/Rahul.jpg",
    Name: "Rahul Sam",
    Position: "Event Team",
    Department: "",
  },
  {
    img: "images/team/Savan.jpg",
    Name: "Savan J Saji",
    Position: "Design Team",
    Department: "",
  },
  {
    img: "images/team/Anjana.png",
    Name: "Anjana Vijayakumar",
    Position: "Publicity Team",
    Department: "",
  },
  {
    img: "images/team/Ananthu.jpg",
    Name: "Ananthu V",
    Position: "Media Team",
    Department: "",
  },
  {
    img: "images/team/Jonahs.jpg",
    Name: "Jonahs George",
    Position: "Web Team",
    Department: "",
  },
  {
    img: "images/team/Suparna.jpg",
    Name: "Suparna R",
    Position: "Project Team",
    Department: "",
  },
  {
    img: "images/team/Afnan.jpg",
    Name: "Afnan Saleem P A",
    Position: "Project Team",
    Department: "",
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

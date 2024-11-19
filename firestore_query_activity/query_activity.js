// setup
let team1 = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwide_fans: 798,
};

let team2 = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  worldwide_fans: 738,
};

let team3 = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  worldwide_fans: 755,
};

let team4 = {
  team_name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  worldwide_fans: 537,
};

let team5 = {
  team_name: "Brazil National Team",
  city: "N/A",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwide_fans: 950,
};

let team6 = {
  team_name: "Argentina National Team",
  city: "N/A",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  worldwide_fans: 888,
};

let team7 = {
  team_name: "Atletico Madrdid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragones", "Griezmann", "Torez"],
  worldwide_fans: 400,
};

db.collection("teams")
  .doc("team1")
  .set({
    team_name: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    top_scorers: ["Ronaldo", "Benzema", "Hazard"],
    worldwide_fans: 798,
  });

db.collection("teams").doc("team2").set(team2);
db.collection("teams").doc("team2").set(team3);
db.collection("teams").doc("team2").set(team4);
db.collection("teams").doc("team2").set(team5);
db.collection("teams").doc("team2").set(team6);
db.collection("teams").doc("team2").set(team7);

var teamsRef = db.collection("teams");

// Part 2 Q1
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q2
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q3
db.collection("teams")
  .where("team_name", "==", "National")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q4
db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q5
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q6
db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q7
db.collection("teams")
  .where("fans", ">=", 500)
  .where("fans", "<=", 600)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q8
db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 2 Q9
db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

// Part 3 Part A
db.collection("teams").doc("team1").update({
  worldwide_fans: 811,
  team_name: "Real Madrid FC",
});

db.collection("teams").doc("team2").update({
  worldwide_fans: 747,
  team_name: "FC Barcelona",
});

db.collection("teams")
  .doc("team1")
  .update({
    top_scorers: ["Ronaldo", "Benzema", "Crispo"],
  });

db.collection("teams")
  .doc("team2")
  .update({
    top_scorers: ["Messi", "Suarez", "Deco"],
  });

// Part 3 Part B
let color = {
  home: "",
  away: "",
};

db.collection("teams")
  .doc("team1")
  .update({
    color: {
      home: "White",
      away: "Black",
    },
  });

db.collection("teams")
  .doc("team2")
  .update({
    color: {
      home: "Red",
      away: "Gold",
    },
  });

db.collection("teams").doc("team1").update({
  "color.away": "purple",
});

db.collection("teams").doc("team2").update({
  "color.away": "pink",
});

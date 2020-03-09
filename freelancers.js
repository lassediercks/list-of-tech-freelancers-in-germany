const data = {
  hamburg: {
    name: "hamburg",
    freelancer: [
      {
        name: "Linus Rogge",
        title: "FE Dev / UI/UX Design",
        website: "https://linuscodes.com",
        mail: "moin@linuscodes.com"
      },
      {
        name: "Karsten Buckstegge",
        title: "Illustration & Development",
        website: "https://karstenbuckstegge.de"
      },
      {
        name: "Hannes Diercks",
        title: "JavaScript architect",
        website: "https://xiphe.ne"
      }
    ]
  },
  leipzig: {
    name: "leipzig",
    freelancer: [
      {
        name: "Justin Schueler",
        title: "Digital Designer",
        website: "https://jschueler.com",
        mail: "hej@jschueler.com"
      }
    ]
  }
};

var app = new Vue({
  el: "#app",
  data() {
    return {
      data
    };
  }
});

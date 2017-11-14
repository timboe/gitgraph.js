/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/


var atlasMetroTemplate = {
  colors: ["#F00", "#D27100", "#D29D00", "#D20000", "#9F0086", "#0A428A", "#008967", "#97C800"],
  branch: {
    lineWidth: 10,
    spacingX: 50,
    labelRotation: 0
  },
  commit: {
    spacingY: -60,
    dot: {
      size: 14
    },
    message: {
      font: "normal 14pt Arial",
      displayAuthor: false
    },
    tooltipHTMLFormatter: function (commit) {
      return "<b>" + commit.sha1 + "</b>" + " " + commit.date + ": " + commit.message;
    }
  }
};

// var myTemplateConfig = {
//   colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
//   branch: {
//     lineWidth: 8,
//     // Dash segments, see:
//     // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
//     lineDash: [5, 3],
//     spacingX: 50
//   },
//   commit: {
//     spacingY: -80,
//     dot: {
//       size: 12,
//       lineDash: [4]
//     },
//     message: {
//       displayAuthor: true,
//       displayBranch: false,
//       displayHash: false,
//       font: "normal 12pt Arial"
//     },
//     shouldDisplayTooltipsInCompactMode: false, // default = true
//     tooltipHTMLFormatter: function (commit) {
//       return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
//     }
//   }
// };
var atlasMetro = new GitGraph.Template(atlasMetroTemplate);

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: atlasMetro, // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
  reverseArrow: false, // to make arrows point to ancestors, if displayed
  orientation: "vertical",
  author: ""
  // mode: "compact" // special compact mode: hide messages & compact graph
};
var gitGraph = new GitGraph(config);
gitGraph.template.commit.message.displayAuthor = false;

/************************
 * BRANCHES AND COMMITS *
 ************************/

// Create branch named "master"
var master = gitGraph.branch("master");

gitGraph.commit( { sha1: "a0143d0", message: "Initial Commit", date: "29-09-2004" } );

// commit 13edce9b98d624c2c700109ce75b4ac2fbfbfc0e
// Date:   Fri Apr 8 19:20:24 2016 +0200
var b21_9 = gitGraph.branch({
  parentBranch: master,
  name: "21.9",
  column: 7
});

// commit 538634e06f547403fe040cf37f2d7cc26be8b32a
// Date:   Thu Feb 2 22:21:30 2017 +0100
var b21_0 = gitGraph.branch({
  parentBranch: master,
  name: "21.0",
  column: 3
});

b21_0.commit( { sha1: "6c6ff410", message: "AthenaP1,21.1.1", date: "22-03-2017" } );

// commit 36a6a86d9ed381751ea2981330a3e073f5aa3cbf
// Date:   Fri Mar 31 07:14:59 2017 +0000
var b21_0_mc16a = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.0-mc16a",
  column: 1  
});

// commit 700869197f54a104ded01b876220071bafbf5448
// Date:   Mon Apr 10 21:11:26 2017 +0000
var b21_1 = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.1",
  column: 5  
});


b21_0.commit( { sha1: "90abcd5c", message: "Athena,21.0.21", date: "19-04-2017" } );

b21_1.commit( { sha1: "06f0a929", message: "AthenaP1,21.1.2", date: "22-04-2017" } );

// commit 71e44ed7e9c708e607098501e6f3e87f2954cab9
// Date:   Thu Apr 27 07:36:51 2017 +0000
var b21_2 = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.2",
  column: 6
});

b21_0.commit( { sha1: "193eac3c", message: "Athena,21.0.22", date: "03-05-2017" } );

// commit 8085cfbe8b7140af62fdb2f33c1601200da0b389
// Date:   Fri May 5 11:40:48 2017 +0000
var b21_3 = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.3",
  column: 7
});

b21_1.commit( { sha1: "aabe0d24", message: "AthenaP1,21.1.3", date: "10-05-2017" } );

b21_0.commit( { sha1: "a55926e1", message: "Athena,21.0.23", date: "11-05-2017" } );

b21_0.commit( { sha1: "d9688ceb", message: "Athena,21.0.24", date: "18-05-2017" } );

b21_1.commit( { sha1: "ad420c0b", message: "AthenaP1,21.1.4", date: "18-05-2017" } );

b21_0.merge( b21_3, { sha1: "fc67820d", message: "Merge 21.0", date: "23-05-2017" } );

b21_0.commit( { sha1: "d77bce35", message: "Athena,21.0.25", date: "23-05-2017" } );

b21_0.commit( { sha1: "7419e6a1", message: "Athena,21.0.26", date: "29-05-2017" } );

b21_0.commit( { sha1: "6cb4dff9", message: "Athena,21.0.27", date: "31-05-2017" } );

b21_1.commit( { sha1: "adff07bd", message: "AthenaP1,21.1.5", date: "07-06-2017" } );

b21_1.commit( { sha1: "ce3d4c32", message: "AthenaP1,21.1.6", date: "07-06-2017" } );

b21_0.commit( { sha1: "2ba02d22", message: "Athena,21.0.28", date: "08-06-2017" } );

b21_0.merge( b21_3, { sha1: "cd42d5aa", message: "Merge 21.0", date: "09-06-2017" } );

// commit afeec93a6d3403936b0913117bbadd42e38353f8
// Date:   Mon Jun 12 09:34:51 2017 +0000
var b21_0_TrigMC = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.0-TrigMC",
  column: 4  
});

b21_0.merge( b21_3, { sha1: "ed5c6604", message: "Merge 21.0", date: "15-06-2017" } );

b21_0.merge( b21_2, { sha1: "8f853101", message: "Merge 21.0", date: "22-06-2017" } );

b21_0.commit( { sha1: "6774319f", message: "Athena,21.0.29", date: "22-06-2017" } );

b21_1.commit( { sha1: "0c5a9562", message: "AthenaP1,21.1.7", date: "22-06-2017" } );

b21_0.commit( { sha1: "63843575", message: "Athena,21.0.30", date: "27-06-2017" } );

b21_1.commit( { sha1: "979f7537", message: "AthenaP1,21.1.8", date: "01-07-2017" } );

b21_0.merge( b21_2, { sha1: "ec04da54", message: "Merge 21.0", date: "04-07-2017" } );

b21_2.commit( { sha1: "ac04da72", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.0", date: "05-07-2017" } );

b21_1.merge( b21_0_TrigMC, { sha1: "3e5b7bb4", message: "Merge 21.1.10", date: "07-07-2017" } );

b21_0.merge( b21_3, { sha1: "9dbbbfc1", message: "Merge 21.0", date: "11-07-2017" } );

b21_1.commit( { sha1: "e9e9e517", message: "AthenaP1,21.1.9", date: "18-07-2017" } );

b21_0.merge( b21_3, { sha1: "9dbbbfc1", message: "Merge 21.0", date: "25-07-2017" } );

b21_0.merge( b21_2, { sha1: "95dbab3c", message: "Merge 21.0", date: "25-07-2017" } );

b21_0.commit( { sha1: "02b10f49", message: "Athena,21.0.31", date: "26-07-2017" } );

b21_0.commit( { sha1: "335db58f", message: "Athena,21.0.32", date: "31-07-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "abad2da3", message: "Merge 21.0.31", date: "31-07-2017" } );

b21_1.commit( { sha1: "e866ded0", message: "AthenaP1,21.1.10", date: "31-07-2017" } );

b21_2.commit( { sha1: "2a4ed78a", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.1", date: "02-08-2017" } );

b21_0.merge( b21_3, { sha1: "b5021128", message: "Merge 21.0", date: "03-08-2017" } );

b21_0.commit( { sha1: "7c735e7c", message: "Athena,21.0.33", date: "09-08-2017" } );

b21_2.commit( { sha1: "20ddecb4", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.2", date: "13-08-2017" } );

b21_1.commit( { sha1: "11022889", message: "AthenaP1,21.1.11", date: "14-08-2017" } );

b21_0.commit( { sha1: "7ceed61b", message: "Athena,21.0.34", date: "16-08-2017" } );

b21_0.merge( b21_2, { sha1: "5aba5859", message: "Merge 21.0", date: "23-08-2017" } );

b21_0.merge( b21_3, { sha1: "ec4a9d62", message: "Merge 21.0.34", date: "23-08-2017" } );

b21_0.commit( { sha1: "516a3ec8", message: "Athena,21.0.35", date: "23-08-2017" } );

b21_2.commit( { sha1: "abe1b510", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.3", date: "24-08-2017" } );

b21_0_TrigMC.commit( { sha1: "33fa9d31", message: "Athena,21.5.0", date: "25-08-2017" } );

b21_1.commit( { sha1: "58e507b8", message: "AthenaP1,21.1.12", date: "28-08-2017" } );

b21_0.commit( { sha1: "0ec0d1ed", message: "Athena,21.0.36", date: "30-08-2017" } );

b21_0.merge( b21_3, { sha1: "50760ce5", message: "Merge 21.0.35", date: "04-09-2017" } );

b21_1.commit( { sha1: "83e8dff2", message: "AthenaP1,21.1.13", date: "05-09-2017" } );

b21_2.commit( { sha1: "4c6b64d4", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.4", date: "05-09-2017" } );

b21_2.commit( { sha1: "1d5099cf", message: "AthDerivation,21.2.0.0", date: "06-09-2017" } );

b21_0_mc16a.commit( { sha1: "575f73f8", message: "Athena,21.0.20.2", date: "06-09-2017" } );

b21_0.commit( { sha1: "90f6f915", message: "Athena,21.0.37", date: "11-09-2017" } );

b21_2.commit( { sha1: "8f174959", message: "AthDerivation,21.2.1.0", date: "11-09-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "9e4c714b", message: "Merge 21.0.32", date: "13-09-2017" } );

b21_3.commit( { sha1: "312cb3e3", message: "Athena,21.3.0", date: "15-09-2017" } );

b21_1.commit( { sha1: "fc7cd309", message: "AthenaP1,21.1.14", date: "16-09-2017" } );

b21_2.commit( { sha1: "25d35038", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.5", date: "19-09-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "819a3c25", message: "Merge 21.0.37", date: "20-09-2017" } );

b21_1.commit( { sha1: "ecdeee23", message: "AthenaP1,21.1.15", date: "25-09-2017" } );

b21_2.commit( { sha1: "a13af627", message: "AthDerivation,21.2.2.0", date: "25-09-2017" } );

b21_0.commit( { sha1: "51de9e06", message: "Athena,21.0.38", date: "28-09-2017" } );

b21_2.commit( { sha1: "d3f20989", message: "AthDerivation,21.2.3.0", date: "29-09-2017" } );

b21_1.merge( b21_0_TrigMC, { sha1: "5049176e", message: "Merge 21.1.14", date: "03-10-2017" } );

b21_0_TrigMC.commit( { sha1: "a40fac29", message: "Athena,21.5.1", date: "03-10-2017" } );

b21_0_mc16a.commit( { sha1: "c2c641c5", message: "Athena,21.0.20.3", date: "04-10-2017" } );

b21_0.merge( b21_3, { sha1: "5f41293f", message: "Merge 21.0.38", date: "04-10-2017" } );

b21_0.commit( { sha1: "f71c4f2b", message: "Athena,21.0.39", date: "05-10-2017" } );

b21_1.commit( { sha1: "2e6c3bd3", message: "AthenaP1,21.1.16", date: "05-10-2017" } );

b21_1.commit( { sha1: "c841264f", message: "AthenaP1,21.1.17", date: "10-10-2017" } );

b21_2.commit( { sha1: "23c207f3", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.6", date: "11-10-2017" } );

b21_0.merge( b21_3, { sha1: "40fcbfcd", message: "Merge 21.0.39", date: "13-10-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "17d8683a", message: "Merge 21.0.39", date: "17-10-2017" } );

b21_2.commit( { sha1: "155ba69f", message: "AthDerivation,21.2.4.0", date: "17-10-2017" } );

b21_1.merge( b21_0_TrigMC, { sha1: "11d32ee2", message: "Merge 21.1.17", date: "19-10-2017" } );

b21_0.merge( b21_2, { sha1: "abbb79b7", message: "Merge 21.0", date: "20-10-2017" } );

b21_0.commit( { sha1: "75cc17e5", message: "Athena,21.0.40", date: "20-10-2017" } );

b21_2.commit( { sha1: "94b857d1", message: "AthDerivation,21.2.5.0", date: "23-10-2017" } );

b21_2.commit( { sha1: "fe475abd", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.7", date: "24-10-2017" } );

b21_1.commit( { sha1: "7e747f54", message: "AthenaP1,21.1.18", date: "25-10-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "cb1fff18", message: "Merge 21.0.40", date: "25-10-2017" } );

b21_1.merge( b21_0_TrigMC, { sha1: "9c49fa56", message: "Merge 21.1.18", date: "26-10-2017" } );

b21_0.merge( b21_3, { sha1: "521fee0c", message: "Merge 21.0.40", date: "30-10-2017" } );

b21_0.commit( { sha1: "e39ed9d9", message: "Athena,21.0.41", date: "30-10-2017" } );

b21_2.commit( { sha1: "9d59f930", message: "AnalysisBase/AnalysisTop/AthAnalysis,21.2.8", date: "30-10-2017" } );

// commit c16fb064ee19c8fd6de31944e282739ce7d6a54f
// Date:   Tue Oct 31 10:49:23 2017 +0000
var b21_0_mc16d = gitGraph.branch({
  parentBranch: b21_0,
  name: "21.0-mc16d",
  column: 2  
});

b21_2.commit( { sha1: "401420c2", message: "AthDerivation,21.2.6.0", date: "31-10-2017" } );

b21_1.commit( { sha1: "1478db72", message: "AthenaP1,21.1.19", date: "03-11-2017" } );

b21_0.merge( b21_0_TrigMC, { sha1: "547d4e0a", message: "Merge 21.0.41", date: "07-11-2017" } );

b21_0.merge( b21_3, { sha1: "7cb17ffb", message: "Merge 21.0.41", date: "07-11-2017" } );

b21_0.commit( { sha1: "82754279", message: "Athena,21.0.42", date: "08-11-2017" } );

b21_1.commit( { sha1: "4601c2b5", message: "AthenaP1,21.1.20", date: "08-11-2017" } );

b21_2.commit( { sha1: "9161b9aa", message: "AthDerivation,21.2.7.0", date: "08-10-2017" } );

b21_0_TrigMC.commit( { sha1: "02b8a13c", message: "Athena,21.5.2", date: "09-11-2017" } );

b21_0_mc16d.commit( { sha1: "dc88ba7d3e", message: "Athena,21.0.50", date: "09-11-2017" } );

b21_0_TrigMC.merge( b21_0_mc16d, { sha1: "cc3cd116", message: "Merge 21.0-TrigMC", date: "10-11-2017" } );

b21_0.merge( b21_3, { sha1: "58bc2304", message: "Merge 21.0.42", date: "11-11-2017" } );





// // Add few commits on master
// gitGraph.commit("My second commit").commit("Add awesome feature");

// // Create a new "dev" branch from "master" with some custom configuration
// var dev = master.branch({
//   name: "dev",
//   color: "#F00",
//   // lineDash: [5],
//   commitDefaultOptions: {
//     color: "#F00"
//   }
// });
// dev.commit("Youhou \\o/");

// // Commit again on "master"
// master.commit("I'm the master !");

// // Advanced commit method with style and specific author (HEAD)
// var commitConfig = {
//   dotColor: "white",
//   dotSize: 10,
//   dotStrokeWidth: 10,
//   messageHashDisplay: false,
//   messageAuthorDisplay: true,
//   message: "Alors c'est qui le papa ?",
//   tooltipDisplay: false,
//   author: "Me <me@planee.fr>"
// };
// gitGraph.commit(commitConfig);

// // Create another from "master"
// var feature3 = master.branch("feature3")
// feature3.commit().commit();

// /***********************
//  *      CHECKOUT       *
//  ***********************/

// // Checkout to create "test" from "master" branch
// // master.checkout();

// /***********************
//  *       DETAILS       *
//  ***********************/

// var commitWithDetailsConfig = {
//   message: "A commit with detailed message",
//   detailId: "detail"
// };
// gitGraph.commit(commitWithDetailsConfig).commit();
// dev.commit().commit(); // 2 default commits on "dev"

// /***********************
//  *    CUSTOMIZATION    *
//  ***********************/

// gitGraph.author = "Fabien0102 <fabien0102@planee.fr>";
// master.commit();

// /***********************
//  *       MERGES        *
//  ***********************/

// master.checkout();

// // Merge "dev" branch into HEAD (which is "master"), with a default message
// dev.merge();

// // Create a "test" branch and merge it into "master" with a custom message and tag
// var test = gitGraph.branch("test");
// test.commit("Final commit");
// test.merge(master, "My special merge commit message");

// // Then, continue committing on the "test" branch
// test.commit({
//   message: "It works !"
// });

// var fastForwardBranch = test.branch("fast-forward");
// fastForwardBranch.commit("First commit on FF branch");
// fastForwardBranch.commit("Second commit on FF branch");

// // If not commented, it will prevent fast-forward
// // test.commit("Make Fast Forward impossible");

// fastForwardBranch.merge(test, {
//   fastForward: true
// });

// /***********************
//  *        TAGS         *
//  ***********************/

// // Add a tag to a commit
// test.commit({
//   message: "Here you can see something",
//   tag: "a-tag"
// });

// // Don't display tag box
// test.commit({
//   message: "Here is a fresh new tag",
//   tag: "my-tag",
//   displayTagBox: false
// });

// // Tag current HEAD
// test.commit("Tag this commit").tag("b-tag");
// gitGraph
//   .commit("This one has no tag")
//   .commit("Tag this one")
//   .tag({
//     tag: "c-tag",
//     tagColor: "green",
//     displayTagBox: false
//   });

// // Perform a merge, with a tag
// test.merge(master, {
//   message: "New release",
//   tag: "v1.0.0"
// });

// // Create different branches from an empty one and do some commits
// var features = master.branch("features")
// var feature1 = features.branch("feature1")
// var feature2 = features.branch("feature2")
// feature2.commit().commit();
// feature1.commit();

// /***********************
//  *       EVENTS        *
//  ***********************/

// gitGraph.canvas.addEventListener("graph:render", function (event) {
//   console.log(event.data.id, "has been rendered with a scaling factor of", gitGraph.scalingFactor);
// });

// gitGraph.canvas.addEventListener("commit:mouseover", function (event) {
//   console.log("You're over a commit.", "Here is a bunch of data ->", event.data);
//   this.style.cursor = "pointer";
// });

// gitGraph.canvas.addEventListener("commit:mouseout", function (event) {
//   console.log("You just left this commit ->", event.data);
//   this.style.cursor = "auto";
// });

// // Attach a handler to the commit
// test.commit({
//   message: "Click me!",
//   author: "Nicolas <me@planee.fr>",
//   onClick: function (commit, isOverCommit, event) {
//     console.log("You just clicked my commit.", commit, event);
//   }
// });

// // Display WIP-like commit
// test
//   .commit({
//     lineDash: [3, 2],
//     dotStrokeWidth: 5,
//     dotColor: "white",
//     messageHashDisplay: false,
//     messageAuthorDisplay: false,
//     message: "Current WIP",
//     tag: "HEAD",
//     displayTagBox: false
//   });

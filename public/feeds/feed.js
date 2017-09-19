var database = firebase.database().ref('/');
var body = document.getElementById('body');

var loggedIN = JSON.parse(localStorage.getItem('loggedInUser'))

database.child('post').on('child_added', function(snap){
    var obj = snap.val();
    obj.id = snap.key;
    console.log(obj);


var container = document.createElement("DIV");
container.setAttribute("class","container");
var div1 = document.createElement("DIV");
div1.setAttribute("class","card");
div1.setAttribute("id", obj.id)
div1.setAttribute("style","margin-bottom:10px");
var div2 = document.createElement("DIV");
div2.setAttribute("class","card-body");
var h4 = document.createElement("H4");
h4.setAttribute("class","card-title");
var p = document.createElement("P");
p.setAttribute("class","card-text");

var input = document.createElement("INPUT");
input.setAttribute("placeholder","comment here");
input.setAttribute("id","input");
var btn = document.createElement("BUTTON");
btn.setAttribute("class","btn btn-primary")

var textBtn = document.createTextNode("Comment");
btn.appendChild(textBtn);
btn.addEventListener('click',function(){
     var commentObj = {
            sender: loggedIN.firstName + loggedIN.lastName,
            comment: input.value,
            postId: obj.id
        }
        // console.log(commentObj)
        database.child('comments').push(commentObj)
})

var commentList = document.createElement("DIV");

var textH4 = document.createTextNode("PostedBy : " + obj.userName);
var textP = document.createTextNode("Pray : " +obj.pray);

h4.appendChild(textH4)
p.appendChild(textP)
div2.appendChild(h4)
div2.appendChild(p)
div2.appendChild(input)
div2.appendChild(btn)
container.appendChild(div2)
div1.appendChild(container)
div1.appendChild(commentList)

body.appendChild(div1);

})

database.child("comments").on('child_added', function (data) {
    var comment = data.val();
    renderComment(comment);
})

function renderComment(comment) {

    var cardHeader = document.createElement("DIV");
    cardHeader.setAttribute("class", "card-header")
    var headerTxt = document.createTextNode("Comments");
    cardHeader.appendChild(headerTxt);
    var mainDiv = document.createElement("DIV");
    mainDiv.appendChild(cardHeader)    
    var bodyDiv = document.createElement("DIV");
    mainDiv.setAttribute("class", "card");
    bodyDiv.setAttribute("class", "card-body");
    bodyDiv.setAttribute("class", "container");
    mainDiv.appendChild(bodyDiv);
    var h5 = document.createElement("H5");
    var p = document.createElement("P");
    
    var txtH5 = document.createTextNode("Sender: " + comment.sender)
    var txtP = document.createTextNode("Comment: " + comment.comment)
    h5.appendChild(txtH5)
    p.appendChild(txtP)
    var commentText = document.createTextNode("Sender: " + comment.sender + " " + "Comment: " + comment.comment)
    bodyDiv.appendChild(h5)
    bodyDiv.appendChild(p)
    var postDiv = document.getElementById(comment.postId);
    console.log(postDiv)
    var commentDiv = postDiv.lastElementChild;
    commentDiv.appendChild(mainDiv);
}

function logOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
       window.location = '../login/login.html';
       localStorage.clear()
        console.log("LoggedOut")
    }).catch(function (error) {
        // An error happened.
        console.log(error)
    });
}
$("#btn").click(function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      success: function(data) {
        var k = function(){
        console.log('hi');
        users = [];
      var len = data.length;
       for(i=0;i<data.length;i++){
        users.push(data[i]);
      }
      console.log("value "+ data[0]['name']);
      localStorage.setItem('users', JSON.stringify(users));
      // return true;
    }
    // if(localStorage.getItem('users') === null){
    //       return k();
    //   }
       },
      error: function(result) {
        alert('error');
      }
    });


    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      success: function(data) {
        console.log(data[1]);
          posts = [];
          for(i=0;i<data.length;i++){
          posts.push(data[i]);
        }
        localStorage.setItem('posts',JSON.stringify(posts));
        },
      error: function(result) {
        alert('error');
      }
    });

    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
      success: function(data) {
        // if(localStorage.getItem('comments') === null){
          comments = [];
          for(i=0;i<data.length;i++){
          comments.push(data[i]);
        }
          localStorage.setItem('comments',JSON.stringify(comments));
        },
      error: function(result) {
        alert('error');
      }
    });
  toggle_visibility('btn');
    showdetails();
    // comment();
  });


  function toggle_visibility(id) {
         var e = document.getElementById(id);
         e.style.display = ((e.style.display!='none') ? 'none' : 'block');
      };



function showdetails(){

var users = JSON.parse(localStorage.getItem('users'));
var posts = JSON.parse(localStorage.getItem('posts'));
var comments = JSON.parse(localStorage.getItem('comments'));

var postResults = document.getElementById('postResults');
postResults.innerHTML = '';

for(var i = 0; i < posts.length; i++){
  var name = users[posts[i].userId - 1].name;
  // console.log(name);
    var title = posts[i].title;
  var desc = posts[i].body;
  var id = posts[i].id;
  // console.log(title);
  // console.log(desc);



  postResults.innerHTML += `<div class="well">`+
                                `<div id="dv_${i}">` +
                                '<p>   USERNAME   '+    name    +
                                '<p>   TITLE   '+    title     +
                                '<p>   DESCRIPTION     '+   desc  +
                                `<p id="like_${i}">   LIKES  <a id="clicks">0</a></p>`+
                                `<button type="button" onclick="hello()" id="btn_${i}" class="btn btn-danger">LIKE</button>`+
                                // ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                ` <button id="cmt_btn_${i}"onclick="comment(\''+id+'\')" class="btn btn-danger" href="#">Comment</button> ` +
                                ' <button onclick="deletepost(\''+id+'\')" class="btn btn-danger" href="#">Delete</button> ' +
                                // '</h3>'+
                                '</div> '+
                                '</div>';
}

}


jQuery(document).on('click','button[id^="cmt_btn_"]',function(){
  var dv_id = (jQuery(this).attr('id').replace('cmt_btn_','dv_'));

  jQuery('#'+dv_id).after('<br/>' +
  '<div class="well">'+
  '<p >data to be displayed here</p>' +
  '</div>'
    );
});


var click = 0;
function hello(){

  // for(i=0;i<posts.length;i++){
  click++;
  document.getElementById('clicks').innerHTML = click;
// }
}



function deletepost(id){
  var posts = JSON.parse(localStorage.getItem('posts'));
  for(var i =0;i < posts.length;i++){
    if(posts[i].id == id){
      posts.splice(i, 1);
    }
  }
  localStorage.setItem('posts', JSON.stringify(posts));
  showdetails();
}

// function comment(){
// console.log('hi');
//   var posts = JSON.parse(localStorage.getItem('posts'));
//   var comments = JSON.parse(localStorage.getItem('comments'));
//   // console.log(posts[0]);
//
// var comments  = document.getElementById('comments');
// console.log(comments);
//
//   // comments.innerHTML = '';
//
// for(i=0;i<posts.length;i++){
//   for(j=0;j<comments.length;j++){
//   if(posts[i].id == comments[j].postId)
//   {
//     // show the comment block here
//
//
//   }
// }
// }
// }


function showdiv(){
  console.log(hi);
  var posts = JSON.parse(localStorage.getItem('posts'));
  var comments = JSON.parse(localStorage.getItem('comments'));
  document.getElementById("comments").style.display = "";

  for(i=0;i<posts.length;i++){
    for(j=0;j<comments.length;j++){
    if(posts[i].id == comments[j].postId)
    {

      console.log(hi);
      // show the comment block here


    }
  }
  }

}

// document.getElementById('comment').addEventListener()
//
// if()


//
// var comments = JSON.parse(localStorage.getItem('comments'));
// for(i=0;i<comments.length;i++){
//   var comments_object = {};
//   var comments_object['id'] = comments[i].id;
//   var comments_object['body'] = comments[i].body;
//     console.log(comments_object);
// }

//
// var users = JSON.parse(localStorage.getItem('users'));
// var posts = JSON.parse(localStorage.getItem('posts'));
//
// console.log(users);
// console.log(posts);
// var users_object = new Object();
//
// for(i=0;i<users.length;i++){
//   users_object[users[i].id] = users[i].name;
//   // users_object[users[i].] =
// }
// console.log(users_object);

// users[posts[0][userId]]


// u want a comment block in which u have 5 comments for each posts that u need to show.
//comment block should pop up after u click on that button

var btn_reply = document.querySelectorAll(".btn_reply");

console.log(btn_reply);

btn_reply.forEach((reply) => {

    reply.addEventListener("click", function(e) {

        var replies = document.querySelectorAll(".hide_show");
        replies.forEach((hide_show)=>{
            hide_show.classList.toggle("hide_show_replies")
        });

    });

});


var likes = document.querySelectorAll(".btn_like");

likes.forEach((like)=>{
    like.addEventListener("click", function(e) {
        this.innerHTML = "✓ Liked";
    });
})

var replies = document.querySelectorAll(".hide_show");

replies.forEach((reply) => {
    reply.classList.add("hide_show_replies");
});

function HideShowReplies(id) {

    var hide_show = document.getElementById(id);
    hide_show.classList.toggle("hide_show_replies");

}

var likes = document.querySelectorAll(".btn_like");

likes.forEach((like) => {

    like.addEventListener("click", function (e) {
        this.innerHTML = "✓ Liked";
    });

})
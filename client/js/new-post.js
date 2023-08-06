const API_URL = "http://localhost:4000/api/post"

const submitNewPost = () => {
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    const image = document.getElementById("form-post-image");
    let data = new FormData();
    data.append("title", title)
    data.append("content", content)
    data.append("image", image.files[0])
    
    fetch(API_URL, {
        method: "POST",
        body: data
    }).then((response) => {
        console.log('response', response)
        // setTimeout(() => {
        //     console.log('this get called')
        //     window.location.href = "/client/index.html"
        // }, 3000)
    }).catch((err) => {
        console.log(err)
    })
}
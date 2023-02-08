function loadScript(src, callback) {
    // tao 1 the <script></script>
    const script = document.createElement("script");
    // trong the script do src bang link
    script.src = src;
    script.onload = function () {
        callback(script);
    };
    // dua script do trong vao trong header
    document.head.append(script);
}

loadScript("fb.com", function(script){
    console.log("script loader", script);
});
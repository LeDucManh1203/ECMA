function loadScript(src) {
    return new Promise((resolve, reject)=>{
        const script = document.createElement("script"); // tạo thẻ script
        script.src = src;//<script src="fb.com"></script>
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("load failed"));
        document.head.append(script);//<head><script src="fb.com"></script></head>
    })
}

loadScript("fb.com")
.then((script) => console.log(script))
.catch((error) => console.log(error));
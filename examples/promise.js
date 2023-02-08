function loadScript(src) {
    return new Promise((resolve, reject)=>{
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("load failed"));
        document.head.append(script);
    })
}

loadScript("fb.com")
.then((script) => console.log(script))
.catch((error) => console.log(error));
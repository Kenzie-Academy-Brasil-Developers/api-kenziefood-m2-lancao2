class Url{
    static goHome(){
        let url = document.URL
        window.location.replace(`${this.retrievePatch(url)}/index.html`)
    }
    static retrievePatch(url){
        let path = url.split("/");
        path.pop()
        path.pop()
        path.pop()
        url = path.join("/")
        return url
    }
}

export {Url}
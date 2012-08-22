KISSY.add({
    "gallery/browsercache/1.0/":{
        requires:["gallery/local-storage/1.0/"]
    }
});
KISSY.use("gallery/browsercache/1.0/", function () {
    alert("browsercache is loaded!");
});
   function init(){

        function on_region_update(e) {
            var container, section;
            if (e.target.overset) {
                section = document.createElement("section");
                section.className = "myregions";
                container = document.getElementById("container");
                container.appendChild(section);
            }
        }

        var flow = document.getNamedFlow("article");
        flow.addEventListener("regionfragmentchange", on_region_update);
        on_region_update({target:flow});

    }

    window.addEventListener('load', init)

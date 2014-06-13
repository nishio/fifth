$(function(){
    console.log('loaded');
    var paper = Raphael(410, 0, 400, 400);
    paper.add([
        {
            type: "rect",
            x: 0,
            y: 0,
            width: 400,
            height: 400,
            fill: "#eee"
        }]);

    var center_x = 200;
    var center_y = 200;
    // Wolfram: solve(r1 + r2 = 200, sin(15 deg) * r2 = r1 )
    var r1 = 41.121;
    var r2 = center_x - r1;
    // Wolfram: solve(r1 + r2 = 200 - 41.121 * 2, sin(15 deg) * r2 = r1 )
    var r3 = 24.2116;
    var r4 = r2 - r1 - r3;

    var chord_names = [
        // major
        "C", "G", "D", "A", "E", "B", "F#", "C#", "Ab", "Eb", "Bb", "F",
        // minor
        "Am", "Em", "Bm", "F#m", "C#m", "Abm", "Ebm", "Bbm", "Fm", "Cm", "Gm", "Dm"];
    var name_to_circle = [];

    // major
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r2;
        var y = center_y - Math.cos(th) * r2;
        var name = chord_names[i];
        name_to_circle[name] = paper.circle(x, y, r1);
        paper.text(x, y, name).attr('font-size', r1);
    }

    // minor
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r4;
        var y = center_y - Math.cos(th) * r4
        var name = chord_names[i + 12];
        name_to_circle[name] = paper.circle(x, y, r3);
        paper.text(x, y, name).attr('font-size', r3);

    }

    var prev = null;
    window.showFifth = function(chord){
        if(prev != null){
            prev.attr("fill", "#eee");
        }
        console.log(chord);
        if(chord == "N"){
            prev = null;
            return;
        }
        var canonical_name = chord.match(/^([A-Gb#]{1,2}m?)/)[1] || null;
        console.log(canonical_name);
        prev = name_to_circle[canonical_name];
        prev.attr("fill", "#fcc");
    }
});
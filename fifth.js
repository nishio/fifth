$(function(){
    console.log('loaded');
    var paper = Raphael(410, 0, 400, 400);

    var center_x = 200;
    var center_y = 200;
    // Wolfram: solve(r1 + r2 = 200, sin(15 deg) * r2 = r1 )
    var r1 = 41.121;
    var r2 = center_x - r1;
    // Wolfram: solve(r3 + r4 = 200 - 41.121 * 2 + 20, sin(15 deg) * r4 = r3 ) 20はめり込み量
    var merikomi = 20;
    var r3 = 28.323;
    var r4 = r2 - r1 + merikomi - r3;

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
        name_to_circle[name] = paper.circle(x, y, r1).attr("fill", "#eee");
        paper.text(x, y, name).attr('font-size', r1);
    }

    // minor
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r4;
        var y = center_y - Math.cos(th) * r4
        var name = chord_names[i + 12];
        name_to_circle[name] = paper.circle(x, y, r3).attr("fill", "#eee");
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
        prev = name_to_circle[canonical_name];
        if(prev == null){
            console.log(canonical_name + " not found, ignored(FIXME)");
            return;
        }
        prev.attr("fill", "#fcc");
    }
});
$(function(){
    // GETパラメータをsongleのURLとして使う
    var songle_url = location.search.substring(1);
    if(songle_url == ""){
        // 地上の星にフォールバック
        songle_url = "http://songle.jp/songs/www.youtube.com%2Fwatch%3Fv=v2SlpjCz7uE";
    }
    $("#songle-embedded-player").attr("data-url", songle_url);
    $("#songle-link").attr("href", songle_url);
    $('body').append('<script src="http://assets.songle.jp/assets/embedded_v2.js" type="text/javascript"></script>')
    .append('<script src="http://assets.songle.jp/assets/songle_api_v2.js" type="text/javascript"></script>')
    .append('<script src="api_example.js" type="text/javascript"></script>');

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
        "C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#", "F",
        // minor
        "Am", "Em", "Bm", "F#m", "C#m", "G#m", "D#m", "A#m", "Fm", "Cm", "Gm", "Dm"];
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

    // alias
    name_to_circle['Eb'] = name_to_circle['D#'];
    name_to_circle['Bb'] = name_to_circle['A#'];
    name_to_circle['Ebm'] = name_to_circle['D#m'];
    name_to_circle['Bbm'] = name_to_circle['A#m'];

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
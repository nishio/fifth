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
    // Wolfram: solve(r1 + r2 = 200, sin(15 deg) * r2 = r1, r3 + r4 = 200 - r1 * 2 + 20, sin(15 deg) * r4 = r3 ) 20はめり込み量
    var r1 = 41.121;
    var r2 = center_x - r1;
    var merikomi = 20;
    var r3 = 28.323;
    var r4 = r2 - r1 + merikomi - r3;
    var r5 = 10.0;
    var r6 = r4 - r3;
    // Wolfram: solve(r1 + r2 = 200 - 41.121 * 2 + 20, sin(15 deg) * r2 = r1 ) 20はめり込み量

    var chord_names = [
        // major
        "C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#", "F",
        // minor
        "Am", "Em", "Bm", "F#m", "C#m", "G#m", "D#m", "A#m", "Fm", "Cm", "Gm", "Dm"];
    var name_to_circle = [];

    // コード構成音表示用マーカー
    var marker = [];
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r6;
        var y = center_y - Math.cos(th) * r6
        var c = paper.circle(x, y, r5);
        c.attr("stroke", "none");
        c.attr("fill", "none");
        marker.push(c);
    }

    // major
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r2;
        var y = center_y - Math.cos(th) * r2;
        var name = chord_names[i];
        var c = paper.circle(x, y, r1);
        c.attr("fill", "#eee");
        c.intcode = i;
        c.major = true;
        name_to_circle[name] = c;
        paper.text(x, y, name).attr('font-size', r1);
    }

    // minor
    for(var i=0; i < 12; i++){
        var th = 30 * i * 2 * 3.14 / 360;
        var x = center_x + Math.sin(th) * r4;
        var y = center_y - Math.cos(th) * r4
        var name = chord_names[i + 12];
        var c = paper.circle(x, y, r3);
        c.attr("fill", "#eee");
        c.intcode = i;
        c.major = false;
        name_to_circle[name] = c;
        paper.text(x, y, name).attr('font-size', r3);
    }

    // alias
    name_to_circle['Ab'] = name_to_circle['G#'];
    name_to_circle['Eb'] = name_to_circle['D#'];
    name_to_circle['Bb'] = name_to_circle['A#'];
    name_to_circle['Abm'] = name_to_circle['G#m'];
    name_to_circle['Ebm'] = name_to_circle['D#m'];
    name_to_circle['Bbm'] = name_to_circle['A#m'];

    chord_text = paper.text(center_x, center_y, "").attr('font-size', 50);

    var prev = null;
    window.showFifth = function(chord){
        if(prev != null){
            prev.attr("fill", "#eee");
        }
        console.log(chord);
        if(chord == "N"){
            chord_text.attr('text', '');
            marker.forEach(function(x){x.attr("fill", "none")});;
            prev = null;
            return;
        }
        chord_text.attr('text', chord);
        var canonical_name = chord.match(/^([A-Gb#]{1,2}m?)/)[1] || null;
        prev = name_to_circle[canonical_name];
        if(prev == null){
            console.log(canonical_name + " not found, ignored(FIXME)");
            return;
        }
        prev.attr("fill", "#fcc");

        // chordの構成音の可視化
        marker.forEach(function(x){x.attr("fill", "none")});;
        var i = prev.intcode;
        marker[i].attr("fill", "red");
        if(prev.major){
            marker[(i + 4) % 12].attr("fill", "red"); // 半音の4は五度圏の4 (7 * 4 mod 12 == 4)
        }else{
            marker[(i + 9) % 12].attr("fill", "red"); // 半音の3は五度圏の9 (7 * 9 mod 12 == 3)
        }
        marker[(i + 1) % 12].attr("fill", "red"); // 半音の7は五度圏の1 (7 * 1 mod 12 == 7)
        // TODO: seventhのサポート、augやdimのサポート？
    }
});

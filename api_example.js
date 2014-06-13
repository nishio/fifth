/**
 * SONGLE EMBEDDED PLAYER API v2.0.0 ドキュメント
 * ----
 *  "window.onSongleEmbeddedPlayerReady" メソッドは、プレーヤが利用可能になると呼び出されます。
 * このメソッドは、ユーザ側で定義（宣言）しておく必要があります。
 *
 * ```html:貼り付け例
 * <!-- player 1 -->
 * <div>
 *   <div data-api="player1" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
 *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
 * </div>
 * <!-- player 2 -->
 * <div>
 *   <div data-api="player2" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
 *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
 * </div>
 * <!-- player 3 -->
 * <div>
 *   <div data-api="player3" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
 *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
 * </div>
 * ```
 *
 * ```javascript:プレーヤが利用可能になったことを通知する例
 * var onSongleEmbeddedPlayerReady =
 *   function(apiKey, player)
 *   {
 *     alert("準備完了！");
 *   };
 * ```
 *
 * 第二引数には、プレーヤインスタンスが与えられます。
 *
 * ```javascript:プレーヤ準備完了後に自動再生する例（mp3 のみ）
 * var onSongleEmbeddedPlayerReady =
 *   function(apiKey, player)
 *   {
 *     player.play(); // NOTE: プレーヤ制御に関するサンプルプログラムも参照してください。
 *   };
 * ```
 *
 * ```javascript:プレーヤ準備完了後にサビ（橙色）区間再生する例（mp3 のみ）
 * var onSongleEmbeddedPlayerReady =
 *   function(apiKey, player)
 *   {
 *     player.seekToNextChorus(); // NOTE: プレーヤ制御に関するサンプルプログラムも参照してください。
 *   };
 * ```
 *
 * ```javascript:プレーヤ準備完了後にサビ（青色）区間再生する例（mp3 のみ）
 * var onSongleEmbeddedPlayerReady =
 *   function(apiKey, player)
 *   {
 *     player.seekToNextRepeat(); // NOTE: プレーヤ制御に関するサンプルプログラムも参照してください。
 *   };
 * ```
 *
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license (C) 2012-2013 AIST
 */

var onSongleEmbeddedPlayerReady =
  function(apiKey, player)
  {
    var initialize =
      function(dom)
      {
        var progress = 0;

        /**
         * "apiKey" は、貼り付けタグの "data-api" 属性（識別子）が保存されています。
         *
         * ```javascript:プレーヤ毎の処理を振り分ける例
         * if(apiKey == "player1") // "player1" の "data-api" 属性を持つプレーヤを制御します。
         *   // do something ...
         *
         * if(apiKey == "player2") // "player2" の "data-api" 属性を持つプレーヤを制御します。
         *   // do something ...
         *
         * if(apiKey == "player3") // "player3" の "data-api" 属性を持つプレーヤを制御します。
         *   // do something ...
         * ```
         */
        switch(apiKey)
        {
          /**
           * プレーヤ制御に関するサンプルプログラム
           *
           * ```html:サンプルプログラム実行
           * <!-- "プレーヤ制御に関するサンプルプログラム" を実行する場合は、次のコードを貼り付けてください。 -->
           * <div>
           *   <div data-api="songle-embedded-player-api-example1" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
           *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2_example.js"></script>
           * </div>
           * ```
           */
          case "songle-embedded-player-api-example1":
            loadExample1Libraries(dom,
              function()
              {
                if((++ progress) == 1)
                  runSongleEmbeddedPlayerAPIExample1(apiKey, player);
              });
            break;

          /**
           * イベント制御に関するサンプルプログラム
           *
           * ```html:サンプルプログラム実行
           * <!-- "イベント制御に関するサンプルプログラム" を実行する場合は、次のコードを貼り付けてください。 -->
           * <div>
           *   <div data-api="songle-embedded-player-api-example2" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
           *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2_example.js"></script>
           * </div>
           * ```
           */
          case "songle-embedded-player-api-example2":
            loadExample2Libraries(dom,
              function()
              {
                if((++ progress) == 1)
                  runSongleEmbeddedPlayerAPIExample2(apiKey, player);
              });
            break;

          /**
           * 可視化サンプルプログラム（その１）
           *
           * ```html:サンプルプログラム実行
           * <!-- "可視化サンプルプログラム（その１）" を実行する場合は、次のコードを貼り付けてください。 -->
           * <div>
           *   <div data-api="songle-embedded-player-api-example3" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
           *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2_example.js"></script>
           * </div>
           * ```
           */
          case "songle-embedded-player-api-example3":
          case "songle-visualizer-type1":
            loadExample3Libraries(dom,
              function()
              {
                if((++ progress) == 4)
                  runSongleEmbeddedPlayerAPIExample3(apiKey, player);
              });
            break;

          /**
           * 可視化サンプルプログラム（その２）
           *
           * ```html:サンプルプログラム実行
           * <!-- "可視化サンプルプログラム（その２）" を実行する場合は、次のコードを貼り付けてください。 -->
           * <div>
           *   <div data-api="songle-embedded-player-api-example4" data-url="http://songle.jp/songs/<楽曲アドレス>" id="songle-embedded-player"></div>
           *   <script src="//assets.songle.jp/assets/embedded_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2.js"></script>
           *   <script src="//assets.songle.jp/assets/songle_api_v2_example.js"></script>
           * </div>
           * ```
           */
          case "songle-embedded-player-api-example4":
          case "songle-visualizer-type2":
            loadExample4Libraries(dom,
              function()
              {
                if((++ progress) == 4)
                  runSongleEmbeddedPlayerAPIExample4(apiKey, player);
              });
            break;
        };
      };

    /**
     * 外部ライブラリを読込みます。
     */
    var loadExample1Libraries =
      function(dom, onImport)
      {
        var jquery = document.createElement("script");

        // jquery.min.js (2.0.0)
        jquery.addEventListener("load", onImport);
        jquery.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";

        dom.appendChild(jquery);
      };

    /**
     * 外部ライブラリを読込みます。
     */
    var loadExample2Libraries =
      function(dom, onImport)
      {
        var jquery = document.createElement("script");

        // jquery.min.js (2.0.0)
        jquery.addEventListener("load", onImport);
        jquery.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";

        dom.appendChild(jquery);
      };

    /**
     * 外部ライブラリを読込みます。
     */
    var loadExample3Libraries =
      function(dom, onImport)
      {
        var easeljs = document.createElement("script");
        var jquery  = document.createElement("script");
        var tweenjs = document.createElement("script");
        var underscorejs = document.createElement("script");

        // easeljs.min.js (0.7.0)
        easeljs.addEventListener("load", onImport);
        easeljs.src = "//code.createjs.com/easeljs-0.7.0.min.js";

        dom.appendChild(easeljs);

        // jquery.min.js (2.0.0)
        jquery.addEventListener("load", onImport);
        jquery.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";

        dom.appendChild(jquery);

        // tweenjs.min.js (0.5.0)
        tweenjs.addEventListener("load", onImport);
        tweenjs.src = "//code.createjs.com/tweenjs-0.5.0.min.js";

        dom.appendChild(tweenjs);

        // underscore.min.js (1.5.2)
        underscorejs.addEventListener("load", onImport);
        underscorejs.src = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js";

        dom.appendChild(underscorejs);
      };

    /**
     * 外部ライブラリを読込みます。
     */
    var loadExample4Libraries =
      function(dom, onImport)
      {
        var easeljs = document.createElement("script");
        var jquery  = document.createElement("script");
        var tweenjs = document.createElement("script");
        var underscorejs = document.createElement("script");

        // easeljs.min.js (0.7.0)
        easeljs.addEventListener("load", onImport);
        easeljs.src = "//code.createjs.com/easeljs-0.7.0.min.js";

        dom.appendChild(easeljs);

        // jquery.min.js (2.0.0)
        jquery.addEventListener("load", onImport);
        jquery.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";

        dom.appendChild(jquery);

        // tweenjs.min.js (0.5.0)
        tweenjs.addEventListener("load", onImport);
        tweenjs.src = "//code.createjs.com/tweenjs-0.5.0.min.js";

        dom.appendChild(tweenjs);

        // underscore.min.js (1.5.2)
        underscorejs.addEventListener("load", onImport);
        underscorejs.src = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js";

        dom.appendChild(underscorejs);
      };

    initialize(document.getElementsByTagName("body")[ 0 ]);
  };
/**
 * プレーヤ制御に関するサンプルプログラム
 *
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license (C) 2012-2013 AIST
 */

var runSongleEmbeddedPlayerAPIExample1 =
  function(apiKey, player)
  {
    var dom = $("[id*=songle-embedded-player]");

    /**
     * 一時停止します。
     */
    var pauseButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">一時停止</a></p>")
        .on("click",
          function()
          {
            player.pause();
          });

    /**
     * 再生します。
     */
    var playButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">再生</a></p>")
        .on("click",
          function()
          {
            player.play();
          });

    /**
     * 停止します。
     */
    var stopButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">停止</a></p>")
        .on("click",
          function()
          {
            player.stop();
          });

    /**
     * 前のサビへシークします。
     */
    var seekToPrevChorusButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">前のサビへシーク</a></p>")
        .on("click",
          function()
          {
            player.seekToPrevChorus();
          });

    /**
     * 次のサビへシークします。
     */
    var seekToNextChorusButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">次のサビへシーク</a></p>")
        .on("click",
          function()
          {
            player.seekToNextChorus();
          });

    /**
     * 前の繰り返しへシークします。
     */
    var seekToPrevRepeatButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">前の繰り返しへシーク</a></p>")
        .on("click",
          function()
          {
            player.seekToPrevRepeat();
          });

    /**
     * 次の繰り返しへシークします。
     */
    var seekToNextRepeatButton =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">次の繰り返しへシーク</a></p>")
        .on("click",
          function()
          {
            player.seekToNextRepeat();
          });

    /**
     * ランダムシークします。
     */
    var seekToRandom =
      $("<p style=\"margin:0px;\"><a href=\"javascript:void(0)\" style=\"color:#e17\">ランダムシーク</a></p>")
        .on("click",
          function()
          {
            player.seekTo(player.song.duration * Math.random()); // 単位はミリ秒です。
          });

    dom.append($("<p id=\"song-analysis\" style=\"margin:0px;\"></p>"));
    dom.append($("<p id=\"song-duration\" style=\"margin:0px;\"></p>"));
    dom.append($("<p id=\"song-position\" style=\"margin:0px;\"></p>"));
    dom.append(pauseButton);
    dom.append(playButton);
    dom.append(stopButton);
    dom.append(seekToPrevChorusButton);
    dom.append(seekToNextChorusButton);
    dom.append(seekToPrevRepeatButton);
    dom.append(seekToNextRepeatButton);
    dom.append(seekToRandom);

    setInterval(
      function()
      {
        // 解析情報＆楽曲情報の取得
        $("[id*=song-analysis]").text("サビの数: " + (player.song.analysis.segments[ 0 ].repeats.length)); // イベント制御に関するサンプルプログラムも参照してください。
        $("[id*=song-duration]").text("再生時間: " + (player.song.duration & 0x7fffffff)); // 単位はミリ秒です。
        $("[id*=song-position]").text("再生位置: " + (player.song.position & 0x7fffffff)); // 単位はミリ秒です。
      }, 1000 / 20); // 20 [FPS]
  };
/**
 * イベント制御に関するサンプルプログラム
 *
 * ```javascript:イベントの捕捉例
 * var onSongleEmbeddedPlayerReady =
 *   function(apiKey, player)
 *   {
 *     //  "on" メソッドを利用して、関数を登録することができます。
 *     player.on("beatPlay",
 *       function(e)
 *       {
 *         // do something ...
 *       });
 *
 *     // 複数登録もできます（実行順序は、登録順になります）。
 *     player.on("beatPlay",
 *       function(e)
 *       {
 *         console.log("- SONGLE A");
 *       });
 *
 *     // 複数登録もできます（実行順序は、登録順になります）。
 *     player.on("beatPlay",
 *       function(e)
 *       {
 *         console.log("- SONGLE B");
 *       });
 *
 *     // 実行結果
 *     // - SONGLE A
 *     // - SONGLE B
 *     // ... 以降ビート毎に続く
 *     // - SONGLE A
 *     // - SONGLE B
 *     // ... 以降ビート毎に続く
 *   };
 * ```
 *
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license (C) 2012-2013 AIST
 */

var runSongleEmbeddedPlayerAPIExample2 =
  function(apiKey, player)
  {
    // onBeatPlay
    player.on("beatPlay",
      function(e)
      {
        console.log("%c- onBeatPlay", "color: blue");
      });

    player.on("beatPlay",
      function(e)
      {
        console.log(e);
      });

    // onChordPlay
    player.on("chordPlay",
      function(e)
      {
        console.log("%c- onChordPlay", "color: blue");
      });

    player.on("chordPlay",
      function(e)
      {
        console.log(e);
      });

    // onChorusEnter
    player.on("chorusEnter",
      function(e)
      {
        console.log("%c- onChorusEnter", "color: blue");
      });

    player.on("chorusEnter",
      function(e)
      {
        console.log("%c-- サビ区間に入りました！", "color: red");
        console.log(e);
      });

    // onChorusLeave
    player.on("chorusLeave",
      function(e)
      {
        console.log("%c- onChorusLeave", "color: blue");
      });

    player.on("chorusLeave",
      function(e)
      {
        console.log("%c-- サビ区間を出ました！", "color: red");
        console.log(e);
      });

    // onFinish
    player.on("finish",
      function(e)
      {
        console.log("%c- onFinish", "color: blue");
      });

    player.on("finish",
      function(e)
      {
        console.log("%c-- 最後まで再生されました！", "color: red");
      });

    // onPause
    player.on("pause",
      function(e)
      {
        console.log("%c- onPause", "color: blue");
      });

    player.on("pause",
      function(e)
      {
        console.log("%c-- 一時停止！", "color: red");
      });

    // onPlay
    player.on("play",
      function(e)
      {
        console.log("%c- onPlay", "color: blue");
      });

    player.on("play",
      function(e)
      {
        console.log("%c-- 再生開始！", "color: red");
      });

    // onRepeatEnter
    player.on("repeatEnter",
      function(e)
      {
        console.log("%c- onRepeatEnter", "color: blue");
      });

    player.on("repeatEnter",
      function(e)
      {
        console.log("%c-- 繰り返し区間に入りました！", "color: red");
        console.log(e);
      });

    // onRepeatLeave
    player.on("repeatLeave",
      function(e)
      {
        console.log("%c- onRepeatLeave", "color: blue");
      });

    player.on("repeatLeave",
      function(e)
      {
        console.log("%c-- 繰り返し区間を出ました！", "color: red");
        console.log(e);
      });

    // onSeek
    player.on("seek",
      function(e)
      {
        console.log("%c- onSeek", "color: blue");
      });

    player.on("seek",
      function(e)
      {
        console.log("%c-- シーク！", "color: red");
      });

    // onStop
    player.on("stop",
      function(e)
      {
        console.log("%c- onStop", "color: blue");
      });

    player.on("stop",
      function(e)
      {
        console.log("%c-- 再生停止！", "color: red");
      });
  };
/**
 * 可視化サンプルプログラム（その１）
 *
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license (C) 2012-2013 AIST
 */

var runSongleEmbeddedPlayerAPIExample3 =
  function(apiKey, player)
  {
    var COLORS =
    {
      "A" : { r: 0xcc, g: 0xcc, b: 0xee }, // コード進行 A  のカラー
      "A#": { r: 0xcc, g: 0xcc, b: 0xff }, // コード進行 A# のカラー
      "B" : { r: 0xcc, g: 0xee, b: 0xcc }, // コード進行 B  のカラー
      "C" : { r: 0xcc, g: 0xee, b: 0xee }, // コード進行 C  のカラー
      "C#": { r: 0xcc, g: 0xff, b: 0xff }, // コード進行 C# のカラー
      "D" : { r: 0xee, g: 0xcc, b: 0xcc }, // コード進行 D  のカラー
      "D#": { r: 0xff, g: 0xcc, b: 0xcc }, // コード進行 D# のカラー
      "E" : { r: 0xee, g: 0xcc, b: 0xee }, // コード進行 E  のカラー
      "F" : { r: 0xee, g: 0xee, b: 0xcc }, // コード進行 F  のカラー
      "F#": { r: 0xff, g: 0xff, b: 0xcc }, // コード進行 F# のカラー
      "G" : { r: 0xee, g: 0xee, b: 0xee }, // コード進行 G  のカラー
      "G#": { r: 0xff, g: 0xff, b: 0xff }, // コード進行 G# のカラー
      "N" : { r: 0xff, g: 0xff, b: 0xff }
    };

    /**
     * 利用ライブラリについて
     *
     * @function
     * @see http://github.com/CreateJS/EaselJS
     * @see http://github.com/CreateJS/TweenJS
     * @see http://underscorejs.org
     */
    var run =
      function()
      {
        var stage = new createjs.Stage($("canvas")[ 0 ]);

        createjs.Ticker.addEventListener("tick",
          function(e)
          {
            stage.update(e);
          });

        // NOTE: コメントアウトした場合、図形連動によるエフェクトを止めることができます。
        player.on("beatPlay",
          function(e)
          {
            switch(e.beat.position)
            {
              case 1: // 1 拍目
                switch(Math.floor(Math.random() * (4 - 1 + 1)) + 1)
                {
                  case 1:
                    drawCircle(stage);
                    break;

                  case 2:
                    drawSquare(stage);
                    break;

                  case 3:
                    drawStar(stage);
                    break;

                  case 4:
                    drawTriangle(stage);
                    break;
                }
                break;

              case 2: // 2 拍目
                break;

              case 3: // 3 拍目
                break;

              case 4: // 4 拍目
                break;
            }
          });
        // ---- ここまで ----

        // NOTE: コメントアウトした場合、背景連動によるエフェクトを止めることができます。
        player.on("chordPlay",
          function(e)
          {
            var prevChord = e.chord.prev.name.match(/^([A-G#]{1,2})/) || []; // 前のコード
            var currentChord = e.chord.name.match(/^([A-G#]{1,2})/) || []; // 現在のコード
            var nextChord = e.chord.next.name.match(/^([A-G#]{1,2})/) || []; // 次のコード

            prevChord = prevChord[ 1 ] || "N";
            currentChord = currentChord[ 1 ] || "N";
            nextChord = nextChord[ 1 ] || "N";

            prevColor = COLORS[ prevChord ]
            currentColor = COLORS[ currentChord ]
            nextColor = COLORS[ nextChord ]

            window.showFifth(e.chord.name);

            createjs.Tween.get(prevColor).to(currentColor, 250)
              .addEventListener("change",
                function(e)
                {
                  var color = e.target.target;

                  color.r = (color.r & 0x7fffffff);
                  color.g = (color.g & 0x7fffffff);
                  color.b = (color.b & 0x7fffffff);

                  $("canvas").css("background-color", "rgb(" + color.r + "," + color.g + "," + color.b + ")");
                });
          });
        // ---- ここまで ----

        // NOTE: コメントアウトした場合、サビ（橙色）区間のエフェクトを止めることができます。
        player.on("chorusEnter",
          function(e)
          {
            drawWaveOfChorus(stage);
          });
        // ---- ここまで ----

        player.on("finish",
          function(e)
          {
            $("canvas").css("background-color", "transparent");
            stage.removeAllChildren();
          });

        // NOTE: コメントアウトした場合、サビ（青色）区間のエフェクトを止めることができます。
        player.on("repeatEnter",
          function(e)
          {
            drawWaveOfRepeat(stage);
          });
        // ---- ここまで ----

        player.on("seek",
          function(e)
          {
            stage.removeAllChildren();
          });

        player.on("stop",
          function(e)
          {
            $("canvas").css("background-color", "transparent");
            stage.removeAllChildren();
          });
      };

    /**
     * @function
     */
    var drawCircle =
      function(stage)
      {
        var geometry = new createjs.Shape();

        geometry.graphics.beginStroke("#e17").drawPolyStar(0, 0, 20, 100, 0.00, Math.random() * 360);
        geometry.x = Math.random() * getScreenW();
        geometry.y = Math.random() * getScreenH();

        createjs.Tween.get(geometry)
          .to({ alpha: 0, scaleX: 20, scaleY: 20 }, 1500);

        stage.addChild(geometry);
      };

    /**
     * @function
     */
    var drawSquare =
      function(stage)
      {
        var geometry = new createjs.Shape();

        geometry.graphics.beginStroke("#e17").drawPolyStar(0, 0, 20,   4, 0.00, Math.random() * 360);
        geometry.x = Math.random() * getScreenW();
        geometry.y = Math.random() * getScreenH();

        createjs.Tween.get(geometry)
          .to({ alpha: 0, scaleX: 20, scaleY: 20 }, 1500);

        stage.addChild(geometry);
      };

    /**
     * @function
     */
    var drawStar =
      function(stage)
      {
        var geometry = new createjs.Shape();

        geometry.graphics.beginStroke("#e17").drawPolyStar(0, 0, 20,   5, 0.25, Math.random() * 360);
        geometry.x = Math.random() * getScreenW();
        geometry.y = Math.random() * getScreenH();

        createjs.Tween.get(geometry)
          .to({ alpha: 0, scaleX: 20, scaleY: 20 }, 1500);

        stage.addChild(geometry);
      };

    /**
     * @function
     */
    var drawTriangle =
      function(stage)
      {
        var geometry = new createjs.Shape();

        geometry.graphics.beginStroke("#e17").drawPolyStar(0, 0, 20,   3, 0.50, Math.random() * 360);
        geometry.x = Math.random() * getScreenW();
        geometry.y = Math.random() * getScreenH();

        createjs.Tween.get(geometry)
          .to({ alpha: 0, scaleX: 20, scaleY: 20 }, 1500);

        stage.addChild(geometry);
      };

    /**
     * @function
     */
    var drawWave =
      function(stage, options)
      {
        for(var index=1; index<=10; ++index)
        {
          (
            function(index)
            {
              var circle = new createjs.Shape();

              circle.graphics.beginStroke(options.color).drawCircle(0, 0, 20);

              if(options.direction === "L")
              {
                circle.x = getScreenW() / 10 *      (index);
                circle.y = getScreenH() / 2 - 25;
              }
              else
              if(options.direction === "R")
              {
                circle.x = getScreenW() / 10 * (10 - index);
                circle.y = getScreenH() / 2 + 25;
              }

              _.delay(
                function()
                {
                  createjs.Tween.get(circle)
                    .to({ alpha: 0, scaleX: 20, scaleY: 20 }, 1500);

                  stage.addChild(circle);
                }, index * 200);
            }
          )(index);
        }
      };

    /**
     * @function
     */
    var drawWaveOfChorus =
      function(stage)
      {
        drawWave(stage, { color: "#f84", direction: "L" });
      };

    /**
     * @function
     */
    var drawWaveOfRepeat =
      function(stage)
      {
        drawWave(stage, { color: "#48f", direction: "R" });
      };

    /**
     * @function
     */
    var getScreenW =
      function()
      {
        if(getVisualizerPosition() === "fixed")
          var screenW = $(window).width()
        else
          var screenW = getVisualizerTarget().width();

        if(screenW >= window.screen.availWidth)
          screenW = window.screen.availWidth;

        return screenW;
      };

    /**
     * @function
     */
    var getScreenH =
      function()
      {
        if(getVisualizerPosition() === "fixed")
          var screenH = $(window).height()
        else
          var screenH = getVisualizerTarget().height();

        if(screenH >= window.screen.availHeight)
          screenH = window.screen.availHeight;

        return screenH;
      };

    /**
     * @function
     */
    var getVisualizerPosition =
      function()
      {
        if($("[data-songle-visualizer-target]").size() == 1)
          return "absolute";
        else
        if($("body").size() == 1)
          return "fixed";
        else
        if($("html").size() == 1)
          return "fixed";
      };

    /**
     * @function
     */
    var getVisualizerTarget =
      function()
      {
        if($("[data-songle-visualizer-target]").size() == 1)
          return $("[data-songle-visualizer-target]");
        else
        if($("body").size() == 1)
          return $("body");
        else
        if($("html").size() == 1)
          return $("html");
      };

    /**
     * @function
     */
    var updateCanvas =
      function()
      {
        var canvas = $("canvas").size() != 0 ? $("canvas") : $("<canvas>");

        return canvas
          .attr({
            width:  getScreenW() + "px",
            height: getScreenH() + "px"
          })
          .css({
            position: getVisualizerPosition(), left: "0px", top: "0px", zIndex: -9999
          });
      };

    $(window).on("chagne", updateCanvas);
    $(window).on("resize", updateCanvas);

    getVisualizerTarget().append(updateCanvas);

    run();
  };
/**
 * 可視化サンプルプログラム（その２）
 *
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license (C) 2012-2013 AIST
 */

var runSongleEmbeddedPlayerAPIExample4 =
  function(apiKey, player)
  {
    // NOTE: Comming soon ... ;)
  };
(function() {


}).call(this);

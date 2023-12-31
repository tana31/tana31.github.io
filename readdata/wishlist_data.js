const data =`
優先度,順番,主な都道府県,行きたい場所・やりたいこと,難易度,精神的,地理的,アクセス,季節的,金銭的,日程調整,運命的要素
2,1,北海道,網走流氷、北浜駅、石北本線,4.4,4,4.5,5,5,4,4,4
,1,北海道,富良野ラベンダー、富良野線,4.0,4,4.5,5,4,4,3,3
6,1,北海道,稚内、宗谷岬、宗谷本線,4.0,4,5,5,3,4,3,3
,1,北海道,【世界遺産】知床、知床岬、知床五湖、オシンコシンの滝,4.0,4,5,5,3,4,3,3
,1,北海道,根室、納沙布岬、根室本線,4.0,4,5,5,3,4,3,3
,1,北海道, ,4.0,4,5,5,3,4,3,3
,1,北海道,阿寒湖、釧網本線、ノロッコ号,3.9,4,4.5,5,3,4,3,3
,1,北海道,日高本線～襟裳岬～帯広 バス移動,3.6,4,4.5,5,2,4,2,3
,1,北海道,留萌本線,3.5,4,4.5,5,2,4,2,2
,1,北海道,登別温泉,3.5,4,4.5,5,2,4,2,2
,2,青森県,弘前城の桜,3.5,3,4,3,5,3,2,4
,2,青森県,八戸、朝市,2.7,3,4,3,2,3,2,1
,3,岩手県,TOHOKU EMOTION,3.2,3,4,3,2,4,3,3
,3,岩手県,八戸線～三陸鉄道乗り通し、奇跡の一本松,3.1,3,4,3,2,4,3,2
,4,宮城県,松島,2.4,3,3,2,2,3,2,1
,5,秋田県,大曲花火,3.6,3,4,3,5,4,2,4
,5,秋田県,秋田内陸縦貫鉄道,3.0,3,4,3,2,4,3,1
,6,山形県,銀山温泉 (冬),3.7,3,4,4,4,4,4,3
,7,福島県,只見線,3.2,3,4,4,2,4,3,2
3,7,福島県,とれいゆつばさ,3.0,3,3,4,1,3,4,3
,7,福島県,常磐線乗り通し,2.3,2,3,3,1,3,3,1
,8,茨城県,日立駅,2.3,2,2,2,2,3,3,2
,8,茨城県,ひたち海浜公園,2.3,2,2,2,3,2,3,2
,9,栃木県,東武～野岩鉄道～会津鉄道、スペーシア,2.4,2,3,3,2,3,2,1
,10,群馬県,土合駅,2.8,3,3,4,2,3,2,2
,10,群馬県,信越線(高崎～横川)、碓氷峠廃線ウォーク、鉄道文化むら,2.8,3,3,4,2,3,2,2
,10,群馬県,草津温泉、草津～軽井沢バス移動、吾妻線,2.3,2,2,2,2,3,3,2
,10,群馬県,【世界遺産】富岡製糸場,1.8,2,2,1,1,3,2,1
,11,埼玉県,ラビュー、秩父鉄道、秩父、あの花聖地巡礼,2.4,2,3,3,2,3,2,1
,13,東京都,【世界遺産】小笠原諸島,4.4,5,5,5,3,4,4,4
,13,東京都,北陸新幹線 (東京～富山),1.6,2,1,1,1,3,2,1
,13,東京都,東京湾アクアライン、海ほたる,1.5,2,1,2,1,2,1,1
,13,東京都,上野周辺の博物館、美術館、【世界遺産】 (ル・コルビュジエの建築作品等),1.2,1,1,1,1,2,1,1
,14,神奈川県,サフィール踊り子,1.6,1,1,1,2,2,2,3
,15,新潟県,Shu*Kura,2.9,3,3,3,2,3,3,3
,16,富山県,立山黒部アルペンルート (大町～富山地鉄),3.0,3,3,3,3,3,3,3
,16,富山県,宇奈月温泉～黒部峡谷鉄道,2.9,3,3,3,2,3,3,3
,19,山梨県,【世界遺産】本栖湖,3.4,4,3,4,3,3,3,3
,19,山梨県,富士山の見えるキャンプ場,3.2,4,3,4,2,3,3,3
,19,山梨県,ほったらかし温泉,3.2,3,3,4,3,3,3,3
8,19,山梨県,身延,1.8,2,2,2,1,2,2,1
,20,長野県,平湯温泉、上高地(かっぱ橋、田代池、明神池),3.2,4,3,3,3,3,4,2
,20,長野県,長野電鉄、湯田中、渋温泉,3.0,4,3,3,2,3,3,2
,20,長野県,ナイトビュー姨捨,2.6,3,1,3,2,3,3,3
7,20,長野県,小海線、HIGH RAIL 1375、野辺山、星を見る,2.5,2,2,2,3,2,3,4
,21,岐阜県,【世界遺産】白川郷,2.5,3,3,3,2,2,2,2
,21,岐阜県,長良川鉄道、ながら,2.3,3,1,3,2,3,1,2
,22,静岡県,伊豆半島西側,3.0,3,3,4,2,3,3,3
,22,静岡県,富士～河口湖バス、富士急行,2.5,3,1,4,2,2,2,3
,22,静岡県,三島スカイウォーク,2.4,3,1,3,2,2,3,3
,22,静岡県,大井川鉄道,2.3,3,1,4,2,2,1,2
,22,静岡県,御前崎,2.0,3,1,3,2,2,1,1
,22,静岡県,【世界遺産】三保の松原,1.7,2,1,2,1,2,1,3
,22,静岡県,沼津,1.6,2,1,1,2,2,2,1
,23,愛知県,日間賀島、篠島、佐久島,1.5,2,1,2,1,1,1,2
,24,三重県,【世界遺産】紀伊山地、熊野古道,2.9,4,3,4,2,2,2,2
,24,三重県,西青山駅,1.3,1,1,3,1,1,1,1
,25,滋賀県,マキノのメタセコイア並木,1.7,2,1,2,3,1,1,1
,25,滋賀県,【世界遺産】坂本～延暦寺～叡山電鉄,1.5,2,1,2,2,1,1,1
,25,滋賀県,近江鉄道、京セラ前駅、信楽高原鉄道,1.4,2,1,2,1,1,1,1
,25,滋賀県,三井寺,1.2,1,1,1,1,1,1,3
,25,滋賀県,近江八幡,1.0,1,1,1,1,1,1,1
,26,京都府,京都(行きたい場所多すぎて省略),1.2,1,1,1,2,1,1,1
,27,大阪府,WEST EXPRESS 銀河,2.6,3,1,4,1,3,2,4
1000,27,大阪府,【世界遺産】百舌鳥古市古墳群(仁徳天皇陵),1.2,1,1,2,1,1,1,1
1000,27,大阪府,阪堺電気軌道、堺市,1.2,1,1,2,1,1,1,1
1000,27,大阪府,富田林,1.2,1,1,2,1,1,1,1
,28,兵庫県,六甲山リベンジ,2.0,3,1,1,2,2,2,3
,28,兵庫県,淡路島,1.7,2,1,2,1,2,2,2
,28,兵庫県,須磨海浜公園,1.4,1,1,1,2,1,2,2
,28,兵庫県,舞子公園、橋の科学館、舞子海上プロムナード,1.4,1,1,1,2,1,2,2
1000,28,兵庫県,有馬温泉 チケット (2/20まで),1.3,1,1,1,1,1,4,1
,28,兵庫県,明石、明石海峡大橋、明石市立天文科学館,1.2,1,1,1,1,1,2,2
,28,兵庫県,六甲ライナー,1.0,1,1,1,1,1,1,1
,28,兵庫県,異人館,1.0,1,1,1,1,1,1,1
,28,兵庫県,旧居留地,1.0,1,1,1,1,1,1,1
,29,奈良県,奈良(同上),1.2,1,1,1,2,1,1,1
,30,和歌山県,高野山、こうや、南海高野線,2.0,2,1,2,3,2,1,3
,32,島根県,【世界遺産】石見銀山,3.0,3,3,4,2,3,3,3
,32,島根県,奥出雲おろち号,3.0,3,3,3,2,3,3,4
,32,島根県,サンライズ出雲(上り),2.9,3,3,4,1,3,2,4
,34,広島県,福塩線,2.8,3,3,4,2,3,2,2
,35,山口県,角島、角島大橋、山陰線(長門市～幡生),3.0,3,3,4,2,3,2,4
,35,山口県,SLやまぐち、山口線,2.9,3,3,4,1,3,2,4
,35,山口県,仙崎,2.8,3,3,4,1,3,2,3
,36,徳島県,徳島～牟岐線～阿佐海岸鉄道～室戸岬～土佐くろしお鉄道～高知,3.5,4,4,4,2,4,3,3
,36,徳島県,坪尻駅,3.5,4,4,5,2,3,3,3
,36,徳島県,祖谷のかずら橋,3.4,4,4,4,2,3,3,3
,38,愛媛県,下灘(平日),3.5,3,4,3,4,4,3,3
,38,愛媛県,松山市街散策 (松山城、路面電車),3.0,3,4,3,2,4,3,1
,38,愛媛県,大洲城,2.8,3,4,3,1,4,3,1
,40,福岡県,【世界遺産】宗像・沖ノ島,3.8,4,5,4,2,4,4,3
,40,福岡県,36ぷらす3,3.4,3,3,4,2,4,4,4
,41,佐賀県,嬉野温泉,3.1,3,4,3,2,4,3,2
,42,長崎県,長崎本線 (新幹線できる前に)、かもめ,3.2,3,4,4,2,4,3,2
,43,熊本県,三角線、A列車で行こう、【世界遺産】三角西港,3.4,4,4,4,2,4,3,2
,43,熊本県,【世界遺産】天草,3.4,4,4,4,2,4,3,2
,44,大分県,湯平温泉,3.2,3,4,4,2,4,3,2
,44,大分県,豊後森機関庫,3.2,3,4,4,2,4,3,2
,45,宮崎県,にちりんシーガイア グリーン、日豊本線,3.3,4,4,4,1,4,3,2
,46,鹿児島県,【世界遺産】屋久島,4.2,5,5,5,2,4,4,4
,46,鹿児島県,奄美大島,4.0,5,5,5,2,4,3,3
,46,鹿児島県,大阪～志布志港～志布志線、志布志市役所志布志支所,3.2,3,4,4,1,4,4,2
,47,沖縄県,石垣島,3.7,4,5,4,2,4,3,3
`

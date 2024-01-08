const dataGroup1 = [
  {
    question: "'draaien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["dinlemek", "bakmak", "koşmak"],
    correctAnswers: "döndürmek",
  },
  {
    question: "('zich) haasten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gecikmek", "beklemek", "koşmak"],
    correctAnswers: "acele etmek",
  },
  {
    question: "'aanraken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["çalmak", "kaçmak", "sormak"],
    correctAnswers: "dokunmak",
  },
  {
    question: "'aanvaarden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["reddetmek", "göz ardı etmek", "talep etmek"],
    correctAnswers: "kabul etmek",
  },
  {
    question: "'abonneren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["izlemek", "takip etmek", "bağlamak"],
    correctAnswers: "abone olmak",
  },
  {
    question: "'adapteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["reddetmek", "değiştirmek", "dönüştürmek"],
    correctAnswers: "uyum sağlamak",
  },
  {
    question: "'afdrukken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["silmek", "kopyalamak", "kesmek"],
    correctAnswers: "bastırmak",
  },
  {
    question: "'annuleren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kabul etmek", "onaylamak", "devam etmek"],
    correctAnswers: "iptal etmek",
  },
  {
    question: "'antwoorden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["soru sormak", "konuşmak", "duymak"],
    correctAnswers: "cevap vermek",
  },
  {
    question: "'arresteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kaçmak", "saklanmak", "kaçınmak"],
    correctAnswers: "gözaltına almak",
  },
  {
    question: "'bakken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["yemek", "temizlemek", "koklamak"],
    correctAnswers: "kızartmak",
  },
  {
    question: "'bedanken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["beklemek", "sormak", "alay etmek"],
    correctAnswers: "teşekkür etmek",
  },
  {
    question: "'bedoelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["anlamak", "sormak", "düşünmek"],
    correctAnswers: "kastetmek",
  },
  {
    question: "'bedroeven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["mutlu etmek", "güldürmek", "sevindirmek"],
    correctAnswers: "üzgün etmek",
  },
  {
    question: "'beloven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["reddetmek", "göz ardı etmek", "talep etmek"],
    correctAnswers: "söz vermek",
  },
  {
    question: "'benijden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["anlamak", "sormak", "kıskanmak"],
    correctAnswers: "kıskanmak",
  },
  {
    question: "'berichten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gözlemlemek", "araştırmak", "keşfetmek"],
    correctAnswers: "bildirmek",
  },
  {
    question: "'beslissen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["seçmek", "düşünmek", "değerlendirmek"],
    correctAnswers: "karar vermek",
  },
  {
    question: "'bestellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["göndermek", "almak", "talep etmek"],
    correctAnswers: "sipariş vermek",
  },
  {
    question: "'betalen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["ödünç almak", "tahsil etmek", "vermek"],
    correctAnswers: "ödemek",
  },
  {
    question: "'bevredigen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bozmak", "kaçmak", "çiğnemek"],
    correctAnswers: "tatmin etmek",
  },
  {
    question: "'bloeien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["solmak", "büyümek", "kırılmak"],
    correctAnswers: "çiçek açmak",
  },
  {
    question: "'boeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["konuşmak", "gezmek", "gülümsemek"],
    correctAnswers: "çiftçilik yapmak",
  },
  {
    question: "'borgen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["satin almak", "kaçmak", "satmak"],
    correctAnswers: "garanti etmek",
  },
  {
    question: "'borstelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["boyamak", "temizlemek", "yıkamak"],
    correctAnswers: "fırçalamak",
  },
  {
    question: "'bouwen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["yıkmak", "temizlemek", "vurmak"],
    correctAnswers: "inşa etmek",
  },
  {
    question: "'bukken zich' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koşmak", "sormak", "oturmak"],
    correctAnswers: "eğilmek",
  },
  {
    question: "'completeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["karıştırmak", "eksik brakmak", "devam etmek"],
    correctAnswers: "tamamlamak",
  },
  {
    question: "'dansen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koşmak", "atlamak", "gulmek"],
    correctAnswers: "dans etmek",
  },
  {
    question: "'detineren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["saklamak", "kaçmak", "saldırmak"],
    correctAnswers: "tutuklamak",
  },
  {
    question: "'disputeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["anlaşmak", "kavga etmek", "saldırmak"],
    correctAnswers: "tartışmak",
  },
  {
    question: "'dromen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["unutmak", "uyumak", "küçümsemek"],
    correctAnswers: "rüya görmek",
  },
  {
    question: "'drukken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["serbest bırakmak", "güç uygulamak", "sarsmak"],
    correctAnswers: "bastırmak",
  },
  {
    question: "'duren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bitmek", "sabretmek", "güç uygulamak"],
    correctAnswers: "sürmek",
  },
  {
    question: "'durven te' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["oturmak", "beklemek", "yurumek"],
    correctAnswers: "cesaret etmek",
  },
  {
    question: "'duwen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["çekmek", "koşmak", "sürüklemek"],
    correctAnswers: "itmek",
  },
  {
    question: "'dweilen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["parlatmak", "kurulamak", "temizlemek"],
    correctAnswers: "süpürmek",
  },
  {
    question: "'eindigen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["başlamak", "sürekli olmak", "süpürmek"],
    correctAnswers: "bitirmek",
  },
  {
    question: "'ergeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["mutlu etmek", "gülümsemek", "hoşlanmak"],
    correctAnswers: "sinirlenmek",
  },
  {
    question: "'feliciteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["hüzünlenmek", "üzülmek", "kabul etmek"],
    correctAnswers: "tebrik etmek",
  },
  {
    question: "'ﬁetsen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koşmak", "yürümek", "güç uygulamak"],
    correctAnswers: "bisiklet sürmek",
  },
  {
    question: "'ﬂoppen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["başarılı olmak", "güç uygulamak", "sarsmak"],
    correctAnswers: "başarısız olmak",
  },
  {
    question: "'gebeuren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bilmek", "güç uygulamak", "gelişmek"],
    correctAnswers: "olmak",
  },
  {
    question: "'gebruiken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["unutmak", "atlamak", "göz ardı etmek"],
    correctAnswers: "kullanmak",
  },
  {
    question: "'gelden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gelmek", "sürmek", "gezmek"],
    correctAnswers: "başvurmakc",
  },
  {
    question: "'geloven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["anlamak", "güvenmek", "ruya gormek"],
    correctAnswers: "inanmak",
  },
  {
    question: "'glimlachen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["ağlamak", "sinirlenmek", "gülmek"],
    correctAnswers: "gülümsemek",
  },
  {
    question: "'gooien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koymak", "koymak", "kesmek"],
    correctAnswers: "fırlatmak",
  },
  {
    question: "'groeien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["düşmek", "azalmak", "sürmek"],
    correctAnswers: "büyümek",
  },
  {
    question: "'groeten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["hoşça kal", "vermek", "kucakla"],
    correctAnswers: "selam vermek",
  },
  {
    question: "'hakken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koymak", "atmak", "kesmek"],
    correctAnswers: "doğramak",
  },
  {
    question: "'halen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bırakmak", "sürmek", "gezmek"],
    correctAnswers: "getirmek",
  },
  {
    question: "'haten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güvenmek", "sevmek", "saygı göstermek"],
    correctAnswers: "nefret etmek",
  },
  {
    question: "'herkennen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["unutmak", "görmezden gelmek", "fark etmemek"],
    correctAnswers: "tanımak",
  },
  {
    question: "'hoeven te' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bağışlamak", "beklemek", "istemek"],
    correctAnswers: "gerek kalmamak",
  },
  {
    question: "'hopen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güvenmek", "talep etmek", "beklemek"],
    correctAnswers: "umut etmek",
  },
  {
    question: "'horen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["unutmak", "görmezden gelmek", "duymamak"],
    correctAnswers: "duymak",
  },
  {
    question: "'huilen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gülmek", "nefret etmek", "kıskanmak"],
    correctAnswers: "ağlamak",
  },
  {
    question: "'inademen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["nefes almak", "durmak", "gezmek"],
    correctAnswers: "derin nefes almak",
  },
  {
    question: "'interesseren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["karışmak", "ilgilenmemek", "aldırmamak"],
    correctAnswers: "ilgilenmek",
  },
  {
    question: "'invullen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["boş bırakmak", "karalamak", "imzalamak"],
    correctAnswers: "doldurmak",
  },
  {
    question: "'juichen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["üzülmek", "sakinleşmek", "hüzünlenmek"],
    correctAnswers: "sevinmek",
  },
  {
    question: "'kammen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kazımak", "fırçalamak", "temizlemek"],
    correctAnswers: "saç taramak",
  },
  {
    question: "'kennen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["anlamak", "tanımak", "duymak"],
    correctAnswers: "bilmek",
  },
  {
    question: "'klagen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["tebrik etmek", "gülmek", "sevinmek"],
    correctAnswers: "şikayet etmek",
  },
  {
    question: "'kloppen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sarsmak", "bölmek", "kırmak"],
    correctAnswers: "vurmak",
  },
  {
    question: "'knippen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kırmak", "bölmek", "koparmak"],
    correctAnswers: "kesmek",
  },
  {
    question: "'koken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["soğutmak", "yiyecek hazırlamak", "donmak"],
    correctAnswers: "pişirmek",
  },
  {
    question: "'kosten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["almak", "sürmek", "vermek"],
    correctAnswers: "mal olmak",
  },
  {
    question: "'kuchen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["konuşmak", "gülmek", "çağırmak"],
    correctAnswers: "öksürmek",
  },
  {
    question: "'lachen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["ağlamak", "sinirlenmek", "gülümsemek"],
    correctAnswers: "gülmek",
  },
  {
    question: "'leiden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kurtarmak", "yanıltmak", "sevindirmek"],
    correctAnswers: "çekmek",
  },
  {
    question: "'lenen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["uzatmak", "kısaltmak", "güçlendirmek"],
    correctAnswers: "uzunlamasına uzanmak",
  },
  {
    question: "'leren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kısaltmak", "unutmak", "bilmemek"],
    correctAnswers: "öğrenmek",
  },
  {
    question: "'leven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["ölü", "hasta", "uykulu"],
    correctAnswers: "yaşamak",
  },
  {
    question: "'luisteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["konuşmak", "duymak", "görmek"],
    correctAnswers: "dinlemek",
  },
  {
    question: "'maaien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sulamak", "duymak", "temizlemek"],
    correctAnswers: "biçmek",
  },
  {
    question: "'maken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["duymak", "silmek", "temizlemek"],
    correctAnswers: "yapmak",
  },
  {
    question: "'markeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["görmek", "tanımak", "fark etmek"],
    correctAnswers: "işaretlemek",
  },
  {
    question: "'melden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["saklamak", "görmek", "söylemek"],
    correctAnswers: "bildirmek",
  },
  {
    question: "'niezen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gülmek", "ağlamak", "hıçkırmak"],
    correctAnswers: "sneezing",
  },
  {
    question: "'noemen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["unutmak", "görmek", "tanımak"],
    correctAnswers: "adlandırmak",
  },
  {
    question: "'ontdekken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gizlemek", "unutmak", "duymamak"],
    correctAnswers: "keşfetmek",
  },
  {
    question: "'ontkennen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kabul etmek", "onaylamak", "gizlemek"],
    correctAnswers: "inkar etmek",
  },
  {
    question: "'ontwikkelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["geri çekmek", "durmak", "onaylamak"],
    correctAnswers: "geliştirmek",
  },
  {
    question: "'opbellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["geri aramak", "saklamak", "duymak"],
    correctAnswers: "aramak",
  },
  {
    question: "'openen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kapatmak", "geri çekmek", "unutmak"],
    correctAnswers: "açmak",
  },
  {
    question: "'participeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["izlemek", "geri çekmek", "engellemek"],
    correctAnswers: "katılmak",
  },
  {
    question: "'passen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kıyaslama yapmak", "saklamak", "duymak"],
    correctAnswers: "uygun olmak",
  },
  {
    question: "'passeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["olmak", "durmak", "saklamak"],
    correctAnswers: "geçmek",
  },
  {
    question: "'planten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sulamak", "biçmek", "temizlemek"],
    correctAnswers: "dikmek",
  },
  {
    question: "'ploffen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["doğmak", "düşmek", "sarsmak"],
    correctAnswers: "patlamak",
  },
  {
    question: "'praten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sessiz olmak", "beklemek", "dinlenmek"],
    correctAnswers: "konuşmak",
  },
  {
    question: "'presenteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["saklamak", "görmemek", "beklemek"],
    correctAnswers: "sunmak",
  },
  {
    question: "'proberen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["vazgeçmek", "saklamak", "gizlemek"],
    correctAnswers: "denemek",
  },
  {
    question: "'procederen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gizlemek", "unutmak", "geri çekmek"],
    correctAnswers: "devam etmek",
  },
  {
    question: "'rebelleren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sakinleşmek", "uyumak", "katılmak"],
    correctAnswers: "isyan etmek",
  },
  {
    question: "'redden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["terk etmek", "saklamak", "unutmak"],
    correctAnswers: "kurtarmak",
  },
  {
    question: "'regenen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güneşlenmek", "kararmak", "açmak"],
    correctAnswers: "yağmak",
  },
  {
    question: "'reinigen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kirlenmek", "bozmak", "yağmak"],
    correctAnswers: "temizlemek",
  },
  {
    question: "'reizen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["otostop çekmek", "sakinleşmek", "gezmek"],
    correctAnswers: "seyahat etmek",
  },
  {
    question: "'rekenen op' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["geri saymak", "hesaplamak", "düşünmek"],
    correctAnswers: "üzerine hesap yapmak",
  },
  {
    question: "'rennen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["yürümek", "saymak", "sürmek"],
    correctAnswers: "koşmak",
  },
  {
    question: "'roven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["dövmek", "çalmak", "parçalamak"],
    correctAnswers: "soymak",
  },
  {
    question: "'rusten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gerginleşmek", "sakinleşmek", "çalışmak"],
    correctAnswers: "dinlenmek",
  },
  {
    question: "'schamen zich' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["utandırmak", "gülmek", "sakinleşmek"],
    correctAnswers: "utanmak",
  },
  {
    question: "'schoppen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sallamak", "çarpmak", "kesmek"],
    correctAnswers: "tekmelemek",
  },
  {
    question: "'schrappen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["yazmak", "boyamak", "çizmek"],
    correctAnswers: "silmek",
  },
  {
    question: "'slenteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koşmak", "sallanmak", "gezmek"],
    correctAnswers: "sallanmak",
  },
  {
    question: "'slepen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["sürmek", "gezmek", "itmek"],
    correctAnswers: "çekmek",
  },
  {
    question: "'spelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["alıştırmak", "çalışmak", "gezmek"],
    correctAnswers: "oynamak",
  },
  {
    question: "'spellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["tekrar etmek", "kendini ifade etmek", "gezmek"],
    correctAnswers: "oynamak",
  },
  {
    question: "'stallen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["koymak", "sürmek", "gizlemek"],
    correctAnswers: "park etmek",
  },
  {
    question: "'stoppen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["başlamak", "hızlanmak", "çalışmak"],
    correctAnswers: "durmak",
  },
  {
    question: "'strooien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["temizlemek", "kullanmak", "gezmek"],
    correctAnswers: "serpmek",
  },
  {
    question: "'studeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["oyun oynamak", "gezmek", "dinlenmek"],
    correctAnswers: "çalışmak",
  },
  {
    question: "'sturen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["çalmak", "sürmek", "gezmek"],
    correctAnswers: "göndermek",
  },
  {
    question: "'tanken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["doldurmak", "boşaltmak", "çıkarmak"],
    correctAnswers: "benzin almak",
  },
  {
    question: "'tekenen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["boyamak", "gezmek", "kesmek"],
    correctAnswers: "çizmek",
  },
  {
    question: "'teleurstellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["mutlu etmek", "sevindirmek", "beklemek"],
    correctAnswers: "hayal kırıklığına uğratmak",
  },
  {
    question: "'tellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["düşmek", "sürmek", "çıkarmak"],
    correctAnswers: "saymak",
  },
  {
    question: "'terugkeren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["ileri gitmek", "uyumak", "gezmek"],
    correctAnswers: "geri dönmek",
  },
  {
    question: "'testen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bozmak", "sınamak", "gezmek"],
    correctAnswers: "test etmek",
  },
  {
    question: "'toevoegen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["çıkarmak", "geri çekmek", "doldurmak"],
    correctAnswers: "eklemek",
  },
  {
    question: "'tonen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gizlemek", "unutmak", "gezmek"],
    correctAnswers: "göstermek",
  },
  {
    question: "'twijfelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güvenmek", "inanmak", "karar vermek"],
    correctAnswers: "şüphe etmek",
  },
  {
    question: "'uitademen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güç uygulamak", "nefes almak", "sakinleşmek"],
    correctAnswers: "nefes vermek",
  },
  {
    question: "'uitstallen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["göstermek", "gizlemek", "gezmek"],
    correctAnswers: "sergilemek",
  },
  {
    question: "'veranderen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["aynı kalmak", "düzenlemek", "unutmak"],
    correctAnswers: "değiştirmek",
  },
  {
    question: "'verbazen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gezmek", "gülmek", "sevinmek"],
    correctAnswers: "şaşırtmak",
  },
  {
    question: "'verbeteren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bozmak", "kötüleştirmek", "gezmek"],
    correctAnswers: "iyileştirmek",
  },
  {
    question: "'verbranden' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["parlatmak", "soğutmak", "gezmek"],
    correctAnswers: "yanmak",
  },
  {
    question: "'verdelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["toplamak", "gezmek", "alıkoymak"],
    correctAnswers: "dağıtmak",
  },
  {
    question: "'verdienen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["vermek", "beklemek", "sakinleşmek"],
    correctAnswers: "kazanmak",
  },
  {
    question: "'verdienen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["vermek", "beklemek", "sakinleşmek"],
    correctAnswers: "kazanmak",
  },
  {
    question: "'vergissen zich' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["hatırlamak", "gezmek", "düşünmek"],
    correctAnswers: "unutmak",
  },
  {
    question: "'verhuizen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["yerleşmek", "gezmek", "kalabalık olmak"],
    correctAnswers: "taşınmak",
  },
  {
    question: "'verlangen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["beklemek", "sakinleşmek", "gezmek"],
    correctAnswers: "istemek",
  },
  {
    question: "'vernietigen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["korumak", "güçlendirmek", "gezmek"],
    correctAnswers: "yok etmek",
  },
  {
    question: "'vertellen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["göstermek", "gezmek", "unutmak"],
    correctAnswers: "söylemek",
  },
  {
    question: "'vertrouwen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["korkmak", "kuşkulanmak", "gezmek"],
    correctAnswers: "güvenmek",
  },
  {
    question: "'verven' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["silmek", "temizlemek", "gezmek"],
    correctAnswers: "boyamak",
  },
  {
    question: "'verwachten' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gezmek", "sakinleşmek", "umut etmek"],
    correctAnswers: "beklemek",
  },
  {
    question: "'verwarren' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["açıklamak", "sakinleşmek", "gezmek"],
    correctAnswers: "karıştırmak",
  },
  {
    question: "'verzaken' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["kabul etmek", "unutmak", "gezmek"],
    correctAnswers: "vazgeçmek",
  },
  {
    question: "'verzamelen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["saklamak", "düzenlemek", "gezmek"],
    correctAnswers: "toplamak",
  },
  {
    question: "'voelen zich' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["gezmek", "düşünmek", "kalmak"],
    correctAnswers: "hissetmek",
  },
  {
    question: "'volgen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["güçlendirmek", "gezmek", "kaçmak"],
    correctAnswers: "takip etmek",
  },
  {
    question: "'voltooien' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["bozmak", "sonlandırmak", "gezmek"],
    correctAnswers: "tamamlamak",
  },
  {
    question: "'waarderen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["küçümsemek", "değerini düşürmek", "sevmemek"],
    correctAnswers: "değerini bilmek",
  },
  {
    question: "'waarschuwen' kelimesinin Türkçe karşılığı nedir?",
    incorrectAnswers: ["desteklemek", "güvenmek", "uyarmak"],
    correctAnswers: "uyarmak",
  },
];

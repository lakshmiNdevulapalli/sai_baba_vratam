import saiBabaAartiImage from "../../public/assets/sai-baba-aarti.jpg";

export interface ParagraphContent {
  image: string;
  title: string;
  description: string;
  content: {
    subtitle: string;
    text: string;
  }[];
}

export const paragraphs: ParagraphContent[] = [
  {
    image: saiBabaAartiImage,
    title: "Kakad Aarti (Morning Aarti)",
    description: "Joduniyaa kara charanee...",
    content: [
      {
        subtitle: "Bhupali",
        text: `
          Joduniyaa kara charanee ttevilaa mathaa<br>
          Parisawee vinanthee maajzee Sadgurunaathaa<br><br>
          Aso naso bhaava aalo tujziyaa ttaayaa<br>
          Kripaa drishtee paahe majzakade Sadgururaayaa<br><br>
          Akhandeeta asaave aise vaatate paayee<br>
          Sandoonee sankoch ttaava todaasaa deyee.<br><br>
          Tukaahmane Devaa maajzee vedeevaakudee<br>
          Naame bhavapaasaa haathee aapulyaa thondi<br><br>
        `,
      },
      {
        subtitle: "Bhupali",
        text: `
          Uttaa Paandurangaa aataa prabhaatasamayo paatalaa<br>
          Vaishnawaancha melaa garudapaaree daatalaa<br><br>
          Garuda paaraapaasunee mahaadwaaraa payanta<br>
          Suravaraanchee maandee ubhee jodooniyaa haat<br><br>
          Suka anakaadika naarada tumbara bhaktanchyaa kotee<br>
          Trisool damaroo ghewooni wubhaa girijechaa patee<br><br>
          Kaleeyugeechaa bhakta Namaa ubhaa keertanee<br>
          Paatteemaage wubhee dolaa laavuniyaa Janee<br><br>
          `,
      },
      {
        subtitle: "Bhupali",
        text: `
          Utta utta Sri Sainaathaguru charana kamala daavaa<br>
          Aadhivyaadhi bhavataapa vaarunee taaraa jadajeevaa<br><br>
          Gelee tumha soduniyaa bhava tama rajanee vilayaa<br>
          Pareehi agnaanaasee tumachee bhulavi yogamaayaa<br><br>
          Sakthi na amhaa yatkinchitahee tijalaa saaraya<br>
          Tumheecha teete saaruni daavaa mukha jana taaraayaa<br><br>
          Bho Sainaatha Maharaaja bhava timiranaasaka ravee<br>
          Agnanee aamhee kitee tumhicha varnaava thoravee<br><br>
          Thee varnitaa bhaagale bahuvadani sesvidhi kavee<br>
          Sakripa howuni mahimaa tumachaa tumheecha vadavaava Adhi… Utha…<br><br>
          Bhakta manee sadbhaava dharooni je tumha anusarale,<br>
          Dhyaanyasthawa te darsana tumache dwwari ubhe ttele<br><br>
          Dhyaanasthaa tumha asa paahunee mana amuche ghaale,<br>
          Paree thwadvachanaamrith praasaayaate aatura jzhaale<br><br>
          Wughadoonee netrakamalaa deenabandhu Ramakaanta,<br>
          Paahi baa kripadrishtee baalakaa jashee maaataa<br><br>
          Ranjavee madhuravaanee haree taapa Sainaatha<br>
          Aamhceecha aapule karyaasthava tuja kashtavito Deva<br><br>
          Sahana karisil te aikuni dyaavee bhett Krishna daava Utha... adhivyadhi<br>
          `,
      },
      {
        subtitle: "Bhupali",
        text: `
          Utta Panduranga aataa darash dhya sakala<br>
          Jzhala arunodaya sarali nidrechi vela<br><br>
          Sant sadhu muni avaghe jhaleti ghola<br>
          Soda sheje sukhe aata bagdu ghya mukha kamala<br><br>
          Rang mandapi mahadwari jzzaalise daati<br>
          Man utaaveel roop pahawaya drishti.<br><br>
          Rahee rakhumabai tumha yewoo dya daya<br>
          Sheje haalawunee jage kara Dev raya<br><br>
          Garud Hanumant ubhe paahatee wat<br>
          Swargiche surwar ghewuni aale bobhat<br><br>
          Zhale muktha dwar laabha zhala rokada<br>
          Vishnudas naama ubha ghewooni kakada.<br><br>
          `,
      },
      {
        subtitle: "Abhang",
        text: `
          Ghewuniya panchaarati, karoo Babansi aarati<br>
          Utta utta ho bandhawa. Owaaloo ha Ramadhava.<br><br>
          Karooniya sthira man, pahu gambhirira he dhyan<br>
          Sayeeche he dhyan pahu gambhirira he dhyan<br><br>
          Krishnanatha Datt Sai jado chitta tujze paayee<br>
          Chitta Deva paayee Jado chitta tuzhe paayee<br><br>
          `,
      },
      {
        subtitle: "Kakad Aarti",
        text: `
          Kaakad aarati kareeto Sainatha deva<br>
          Chinmaya roop daakhavee ghewuni balak laghu seva<br><br>
          Kaam krodh mad matsar aattunee kaakada kela<br>
          Vairagyache toop ghaaluni mee to bhijaveela<br><br>
          Sainath Guru bakti jwalane to mee petawila<br>
          Tad vryitti jaluni guroo ne prakash paadila<br><br>
          Dwaita tama naasooni milavi tatswaroopi jeewa<br>
          Chinmaya… Kaakad… Aarati…<br><br>
          Bhoochar khechar vyaapooni awaghe hritkamali raahasee<br>
          Tochi dattaadev tu shridi raahuni paawasee<br><br>
          Rahooni yethe anayatrahitoo baktaastava dhavasee<br>
          Nirasooniyaa sankata daasaa anubhawa daavisee<br><br>
          Na kale twalleelahee konyaa devaa waaa maanavaa<br>
          Chinmaya… Kaakad… Aarati…<br><br>
          Twat yasha dundubheene saare ambar he kondale<br>
          Sagun murti paahanyaa aatur jan Shirdee aale<br><br>
          Proshuni twadvachanaamrita aamuche dehabhaan haarpale<br>
          Sodooniyaa durabhimaan maanas twaccharanee waahile<br><br>
          Kripa karooniya Sai maawle daas padari ghyaawaa<br>
          Chinmaya… Kaakad… Aarati…<br><br>
          Bhaktaachiya potee bodh kaakada jyoti<br>
          Pancha prana jeevebhave owaaloo aarthi<br><br>
          Owaaloo aaratee maajyza pandhareenaatha majyza Sainathaa<br>
          Donhi kara jodonee charanee ttevilaa mathaa<br><br>
          Kaay mahima varnoo aataa sangane kitee<br>
          Kotee brahma haiyaa makha pahataa jaatee<br><br>
          Rahee rakhmaabaayee ubhya doghee do baahee<br>
          Mayur pincha chaamara dhaaliti thaayee che thaayee<br><br>
          Tuka mhane deep ghewuni unmaneet shobhaa<br>
          Vittevaree ubha dise laawanya gaabhaa.<br><br>
          Owaaloo aaratee…..<br>
          `,
      },
      {
        subtitle: "Padh",
        text: `
          Utta utta saadhu sant aapulale hit<br>
          Jaaeel jaaeel ha nardeh mag kaincha bhagawant<br><br>
          Uttoniya pahaante baba ubha ase vitte<br>
          Charan tayaache gomate amrit drishti awalokaa<br><br>
          Utta utta ho vegesee chalaa jaawoonya raawulaasee<br>
          Jalatil patakaanchya raashi kaakad aarati dekhliyaa<br><br>
          Jaage karaa rukhminivar, dev aahe nijasuraant<br>
          Vege limbalon karaa drisht hoeel tayasee<br><br>
          Daaree waajantree vaajatee dhol damaame garijatee<br>
          Hote kaakad aarati maazhyaa Sadguru rayaanchee<br><br>
          Simhanaad shankabheree aanand hoto mahaa dwaaree<br>
          Keshawaraaj vittewaree naamaa charan vandito<br><br>
          `,
      },
      {
        subtitle: "Shlok",
        text: `
          Sainath Guru maajhe aaee<br>
          Majlaa thaav dhyaavaa paayeen<br><br>
          Datta raaja Guru majhe aaee<br>
          Majlaa thaav dhyaavaa paayeen<br><br>
          `,
      },
      {
        subtitle: "Phabhatastak",
        text: `
          Prabhaat samayeen nabhaa shubh ravi prabha phaankalee<br>
          Smare guru sadaa ashaa samayin tya chhale naa kalee<br><br>
          Monhoni kar jodoonee karoon ataa Guru praarthanaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br><br>
          Tamaa nirasi bhaanu ha Guruhi naasi agnyaanataa<br>
          Parantu Suruchee karaa na ravihee kadhee saamyathaa<br><br>
          Punhaa thimir janm ghe Gurukrupeni agnaan naa<br>
          Samartha Guru Sainath puravee manovaasanaa<br><br>
          Ravi pragat howuni twarita ghaalawee aalasaa<br>
          Tasa guruhi sodawee sakal dushkriti laalasaa<br><br>
          Haroni abhimaanahee jadwi tatpadee bhavanaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Guroosi upama dise vidhi hareeharaanchi unee<br>
          Kuttoni mag yeie tee kavaniyaa ugee paahunee<br><br>
          Tuzheech upama tulaa baravi shobhate sajjanaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Samaadhi uthroniyaa Guru chalaa mashidee kade<br>
          Twadeeya vachnokti tee madhur vaaritee saankhade<br><br>
          Ajaataripu Sadguro akhil pathkaa bhanjanaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Ahaa susamayaasi yaa Guru uttoniyaa baisale<br>
          Vilokuni padaashrithaa tadiya aapade naasile<br><br>
          Asaa suhithkaaree yaa jagati konihee anya naa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Asa bahut shaahanaaa pari na jyaa Guroochi kripaa<br>
          Na tatswahit tyaa kalae karitase rikamya gapaa<br><br>
          Jari Gurupada dhari sudhrid bhaktineh tho manaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Guro vinati mee karee hridayamandiree yaa basaa<br>
          Samasth jag he guruswaroopee ttaso maanasaa<br><br>
          Ghado satat sathkrutee matihi deh jagatjpaavanaa<br>
          Samartha Guru Sainath puravee manovaasanaa<br>
          <br>
          Preme yaa asthakaashi paduni Guruvaraa<br>
          Praarthitee je prabhaatee<br><br>
          Tyaanche chittasee deto akhilharooniyaan<br>
          Braanti mee nitya shaantee<br><br>
          Aise he Sainathe kathuneesuchvileh jevee yaa baalakaasee<br>
          Tevee tyaa Krishnapaayee namuni<br><br>
          Savinayeh arpito ashtakaasee<br>
          `,
      },
      {
        subtitle: "Padh",
        text: `
          Sai raham nazar karnaa Bachonkaa paalan karnaa <br>
          Sai raham nazar karnaa Bachonkaa paalan karnaa<br>
          <br>
          Jaanaatumneh jagat pasaaraa Sabahee jzhoott jamaanaa<br>
          Jaanaatumneh jagat pasaaraa Sabahee jzhoott jamaanaa Sai raham…….<br>
          <br>
          Mein andhaa hoon bandaa aabkaa Mujhse prabhu dikhlaanaa<br>
          Mein andhaa hoon bandaa aabkaa Mujhse prabhu dikhlaanaa Sai raham…….<br>
          <br>
          Daas ganu kahe ab kyaa boloo Thak gayi meree rasnaa<br>
          Daas Ganu kahe ab kyaa boloo Thak gayi meree rasnaa Sai raham……..<br>
          <br>
          Raham nazar karo, ab more Sayee Tumbin naheen mujze maa baap bhaayee<br>
          Raham nazar karo Raham nazar karo<br>
          <br>
          Mein andhaa hoon banda tumhaaraa Mein andhaa hoon banda tumhaaraa<br>
          Mein naa jaanoon Mein naa jaanoon Mein naa jaanoon Allaah ilaahee Raham…….<br>
          <br>
          Khalee jamaanaa meineh gamaayaa Khalee jamaanaa meineh gamaayaa<br>
          Saathee aakhar kaa Saathee aakhar kaa Saathee aakhar kaa kiyaa na koyee Raham……..<br>
          <br>
          Apne maszhid ka zhaadoo Ganoo hai Apne maszhid ka zhaadoo Ganoo hai<br>
          Maalik hamaare Maalik hamaare Maalik hamaare tum Baabaa Sayee Raham……..<br>`,
      },
      {
        subtitle: "Padh",
        text: `
          Tujze kai devoon Saawalyaa mee khaayaa taree hoo<br>
          Tujze kai devoon Sadguru mee khaayaa taree<br>
          Mee dubalee batik Naamyaachee jaan Shreeharee<br>
          Mee dubalee batik Naamyaachee jaan Shreeharee<br>
          <br>
          Uchishta tulaa denen hee ghosht naa baree hoo<br>
          Uchishta tulaa denen hee ghosht naa baree<br>
          Toon jagannaath tujze deoon kashire bhaakaree<br>
          Toon jagannaath tujze deoon kashire bhaakaree<br>
          <br>
          Nako ant madeeya pahoon sakhya bhagwantaa, Shrikaantaa<br>
          Maadhyaahnraatra vultoni gaelee hee aatan aan chittaa<br>
          <br>
          Ja hoieel tujha re kaakadaa hee raolaantaree hoo<br>
          Ja hoieel tujha re kaakadaa hee raolaantaree<br>
          Aanateel bhakt naivedya hi naanaaparee<br>
          Aanateel bhakt naivedya hi naanaaparee<br>
          `,
      },
      {
        subtitle: "Padh",
        text: `
          Shreesadguru Baabaa Saayee hoo Shreesadguru Baabaa Saayee<br>
          Tujh waanchuni aashraya naahi bhutalee, Tujh waanchuni aashraya naahi bhutalee<br>
          <br>
          Mee paapee patit dheemanda hoo Mee paapee patit dheemanda<br>
          Taarane malaa Gurunathaa jhadkari Taarane malaa Sainathaa jhadkari<br>
          <br>
          Toon shaantikshamechaa meroo hoo Toon shaantikshamechaa meroo<br>
          Toon bhavaarnaveeche taaru Guruvaraa Toon bhavaarnaveeche taaru Guruvaraa<br>
          <br>
          Guruvaraa majzasi paamaraa ataan udharaa<br>
          Tvarit lavlaahee tvarit lavlaahee<br>
          Mee budato bhavbhaya dohee udharaa Mee budato bhavbhaya dohee udharaa<br>
          Shreesadguru Babaa…….
          `,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
  {
    image: saiBabaAartiImage,
    title: "Madhyan Aarti (Afternoon Aarti)",
    description: "Ghewuniya panchaarati...",
    content: [
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: "",
      },
      {
        subtitle: "Abhang",
        text: `
        Ghewuniya panchaarati, karoo Babansi aarati<br>
		Karoo Sai see aarati Karoo Babansi arat<br><br>

		Utta utta ho bandhawa. Owaaloo ha Ramadhava<br>
		Sayee Ramadhava. Owaloo ha Ramadhava<br><br>

		Karooniya sthira man, pahu gambhirira he dhyan<br>
		Sayeeche he dhyan pahu gambhirira he dhyan<br><br>

		Krishnanatha Datt Sai jado chitta tujze paayee<br>
		Chitta Baba paayee Jado chitta tuzhe paayee<br>
        `,
      },
      {
        subtitle: "Aarati Sai",
        text: `
        Aarti Sai Baba, saukhyadaataara jeeva. Charana rajaatalee<br>
		Dhyaava daasaan visaawaa, bhaktaa visaawaa Aarti Sai Baba<br><br>
		
		Jaaluniyaan aananng swaswaroopee raahe dhanga<br>
		Mumukshu janaan daavee nija dolaan Sreeranga, dolaan Sreeranga Aarti Sai Baba<br><br>
		
		Jayaa manee jaisaa bhaava tayaa taisaa anubhava<br>
		Daawisee dayaaghanaa aisee tujzee hee maava tujzeeheemaava Aarti Sai Baba<br><br>
		
		Tumache naama dhyaataan hare sansrithi vyathaa<br>
		Agaadha tava karanee maarga daawisee anaadhaa,daawisee anaadhaa Aarti Sai Baba<br><br>
		
		Kaliyugee avataara saguna parabrahm saachara<br>
		Avateerna jhaalase swami Datta digambara, Datta digambara Aarti Sai Baba<br><br>
		
		Aattan divasaan guruwaaree bhakta karitee waaree<br>
		Prabhupada pahaavayaa bhavabhaya niwaree, bhaya niwaree Aarti Sai Baba<br><br>
		
		Maajan nija dravya tteewaa tav charan rajasevaa<br>
		Maagane hechiyaataa tumhan devaadhideva, Devaadhideva Aarti Sai Baba<br><br>
		
		Ichchita deena chaatak nirmala toya nijasookha<br>
		Paajaawe maadhavaa yaa saambhal aapulee bhaaka, aapulee bhaaka Aarti....<br>
        `,
      },
      {
        subtitle: "Aarati Jaya Deva",
        text: `
        Jaya Deva Jaya Deva Datta avadhutaa, O Sayee avadhutaa<br>
		Jodoonikara tava charanee ttevito maathaa, Jaya Deva Jaya Dev<br><br>
		
		Avataraseen too yaetaan dharmaante glanee, Naastheekaanaahee too laavisi nijabhajanee<br>
		Daavisi naanaa leela asankhya roopaanee, Harisee dheenanche too sankata dinarajanee<br>
		Jaya Deva Jaya Deva....<br><br>
		
		Yavana swaroopee aikhyaa darshana twaan dhidhale, Samsaya nirsuniyaan thathdwaitaa ghaalavile<br>
		Gopichandaa mandaa twaanchee uddharile, Momina vamsee janmuni lokaan taariyale<br>
		Jaya Deva Jaya Deva....<br><br>
		
		Bhed na tathwee hindoo yavananchaa kaanhee Daawayaansee jzaalaa punarapi naradehee<br>
		Paahasin premaane too Hindu yavanaanhee, Daavisi aatmatwaane vyaapaka haa sayee<br>
		Jaya Deva Jaya Deva...<br><br>
		
		Devaa Sayeenaathaa twatpadanata vhaahe, paramaayaamohita janamochana jhanin vhaave<br>
		Twakripayaa sakalaanche sankata nirasaawe, deshila tari de twadhyash krishnaane gaave<br>
		Jaya Deva Jaya Deva...<br>
        `,
      },
      {
        subtitle: "Abhang",
        text: `
        Shirdee maajze Pandharapura Saibaba Ramaavara<br>
		Baba Ramaavara, Sai Baba Ramaavara<br><br>
		
		Shuddha bhaktee chandrabhaabagaa, Bhaava pundaleeka jaagaa<br>
		pundaleeka jaagaa. Bhaava pundaleeka jaagaa<br><br>
		
		Yaa ho yaa ho avaghe jana karaa Babaansee vandana<br>
		Saisi vandana karoo Babaansee vandana<br><br>
		
		Ganu mhane Baba Sayee. Dhaava paava maajze aayee<br>
		paava maajze aayee. Dhaava paava maajze aayee<br>
        `,
      },
      {
        subtitle: "Naman Ghaaleena",
        text: `
        Ghaaleena lotaangana vandeen charana Dolyanee paaheen roop tujze<br>
		Preme aalingana aanande poojin, Bhave oowaalina mhane Naamaa<br><br>
		
		Tvameva maataa cha pitaa tvameva Tvameva bandhuscha sakhaa tvameva<br>
		Tvameva vidyaa dravinam tvameva, Tvameva servam mama Devadeva<br><br>
		
		Kaayena vaachaa manasrendriyaiarwan Budhyatmanaa vaa prakriti swabhavaat<br>
		Karomi yadyatsakalam parasmai, Narayanaayeti samarpayaami<br><br>
		
		Acyutam Keshavam Raamanaaraayanam Krishnadaamodaram Vaasudevam Harim<br>
		Shreedharam Maadhavam Gopikaa Vallabham, Jaanakeenaayakam Raamachandram Bhaje<br><br>
		
		Hare Rama, Hare Rama. Rama Rama Hare Hare<br>
		Hare Krishna, Hare Krishna. Krishna Krishna Hare Hare<br><br>
		
		Shri Gurudeva Datta<br>
        `,
      },
      {
        subtitle: "Mantra Pushpam",
        text: `
        Hari he OM...<br><br>
		yagnena yagnamayajanta devaastaani dharmaani prathamaabyaasan<br>
		Tehanakam mahimaanah sachanta yatra poorve sadhyaa santi Devaaha<br><br>
		
		Om rajaadhiraajaaya prasahya saahine namo vayam Vaishravanaaya kurmahe<br>
		Sa me kaaman kaama kaamaya mahyam kameswaro Vaishravano tathatu<br>
		Kuberaraya Vaishravanaaya Mahaaraajaaya namah<br><br>
		
		Om swasti saamrajyam bhojyam swaaraajyam vairaajyam, paarameshtyam<br>
		Raajyam mahaarajya maadhi patya mayam Samantaparyaa yeesyat<br>
		Saarvabhoumah saarvayushya aantaadaaparaaraadhaat prithivyai<br>
		Samudraparyanthaayaa ekaraalithi<br><br>
		
		Tadapyesha slokobhigeeto marutah parivestaaro marutah pariveshtaaro<br>
		maruttasyaavasan gruhe Avikshitasya kamaprer Visvedevaah sabhaa sada ithi<br><br>
		
		Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki Jaya<br>
        `,
      },
      {
        subtitle: "Namaskara Astakam ",
        text: `
        Anantaa tulaa ten kase re sthavaave, Anantaa tulaa ten kase re namaave<br>
		Anantaa mukhaanchaa shine shesh gaataan, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Smaraave hmanee twatpadaa nitya bhaave, Wurave taree bhaktisaattee swabhaave<br>
		Tarave jagaa taarunee maaya taataa,Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Vase jo sadaa daavayaa santleela, Dise agna lokaanparee jo janaalaa<br>
		Paree antaree gnaana kaiwalya daataa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Baraa laadhalaa janma haa maanvaachaa Naraa saarthakaa saadhaneebhuta saacha<br>
		Dharoon Sayeepremaa galaayaa ahantaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Dharave karee saana alpagna baala, Karaave amhaa dhanya chumboni gaalaa<br>
		Mukhee gala preme karaa graas aataan, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Suraadeeka jyaanchyaa padaa vanditaantee, Sukadeeka jyaante samaanatva detee<br>
		Prayagaadi teerthen padee nasmra hotaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Tujhyaa jhya padaa paahtan gopabaalee, Sadaa rangalee chitswaroopee milaalee<br>
		Karee raasakreedaa save Krishna naathaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Tulaa maahato maagane eka dhyaave, Karaa jodito deena atyanta bhaave<br>
		Bhavee mohaneeraaja haa taari aataan, Namaskaar saashtaang Shri Sainaatha<br><br>
        `,
      },
      {
        subtitle: "Aisaayee Baa",
        text: `
        Aisaa eyee baa –- Sayee digambaraa –- Akshyaya roopa avataara<br>
		Sarvahi vyapaka too –- Shrutisaara –- anusayaatrikumaaraa –- Aisaa eyee baa<br><br>
		
		Kaashee snaana japa –- pratidivashee –- Kolhapura bhikshesee –- nirmala nadi tungaa<br>
		Jala praasee –- Nidra maahur deshee -- Aisaa eyee baa<br><br>
		
		Jzholee lombatase vaamakaree -– trishoola damaroo dhari<br>
		Bhakta varada sadaa sukhakaaree Deseel mukti charee -- Aisaa eyee baa<br><br>
		
		Paayee paadukaa japamaala -– kamandaloo -– Mrigacchalaa -– dhaarana kariseebaa<br>
		Naagajataa -– Mukuta sobhato maathaa -- Aisaa eyee baa<br><br>
	
		Tatpara tujyaa je dhyaanee -– akshyaya Thyaanche sadhanee -– Lakshmeevasa karee<br>
		Dinarajanee -– Rakshisi sankat vaaruni -- Aisaa eyee baa<br><br>
		
		Yaa pari dhyaana tujze gururaayaa -– Drishya karee nayanaan yaa<br>
		Poornaananda sukhe hee kaayaa -– Laavise hariguna gaayaa -- Aisaa eyee....<br>
        `,
      },
      {
        subtitle: "Mahimna Stotrama ",
        text: `
        Sadaa satswaroopam chidaananda kandam<br>
		Jagat sambhavasthaana samhaara hetum<br>
		Swabhaktechhayaa maanusham darsayantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Bhavadwaantha vidhwamsa maarthaanda meeddyam<br>
		manovaagateetam munir dhyana gamyam<br>
		Jagadvyapakam nirmalam nirgunam twaam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		
		Bhawaambhodi magnaarthitaanaam lanaanaam<br>
		Swapaadaasritaanaam swabhakti priyaanaam<br>
		Samuddhaaranaartham kalow sambhavantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sadaa nimba vrikshasya mooladhivaasaat<br>
		Sudhaasravinam tiktamapya priyantam<br>
		Tarum kalpa vrikshaadhikam saadhayantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		
		Sadaa kalpavrikshyasya tasyaadhi moole<br>
		Bhawadbhava budhyaa saparyaadisevaam<br>
		Nrinaam kurwataam bhukti mukti pradantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Anekaashrutaa tarkya leelaa vilaasaeih<br>
		Samaavishkruteshaana bhaasvat prabhaavam<br>
		Ahambhaava heenam prasannathma bhaawam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sataam Vishramaaraama mevaabhiraamam<br>
		sadaa sajjanaih samsthutam sannamadbhih<br>
		Janaamodadam bhakta bhadrapradantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Ajanmaadhyamekam param brahma saakshaat<br>
		Swayam sambhavam raamamevaavateernam<br>
		Bhawadharshanaathsam puneetah praboham<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sree Sayeesa kripaanidhe akhilanrinaam sarwaartha siddhi prada<br>
		Yushmatpaadarajah prabahavamatulam dhaataapi vaktaakshhamah<br>
		Sadbhakthyaa saranam kritaan jali putah samprapthithosmi prabho<br>
		Shrimath Sayi paresa paada kamalaa naanya ccharanyam mama<br><br>
		
		
		Sayiroopadhara raaghavottamam, Bhakta kaama vibhuda dhrumam prabhum<br>
		Maayayopahata chitta shudhayae, Chintayaamyahamaharnisam mudaa<br><br>
		
		
		Sharat sudhaamsu pratrima prakaasam, kripatapaatram tava Sainaatha<br>
		Twadeeya paadaabja samaashritaanaam, Swachhaayayaa taapamapaa karothu<br><br>
		
		
		Upaasanaa Daivata Sainaatha, Sthavairmayopaasaninaasthu sthatwam<br>
		Ramenmaromne tava paadayugme bhrungo, Yathaabji makarmda lubdhah<br><br>
		
		Aneka janmaarjita paapasamkshayo, Bhavet bhawatpaada saroja darshanaat<br>
		Kshamaswa sarvaanaparaadha poonjakaan, praseeda Sayeesa Sadguro dayaanidhe<br><br>
		
		Sri Sainatha charanaamrita putachithaah, Sthwatpaada seva natrataah satatamcha bhaktyaa<br>
		Samsaara janya duritaagha vinirgataaste, kaivalya dhaama paramam samavaapnuvanti<br><br>
		
		Strotrame tatpatte bhakthyaa yonara athanmanaahsadaa<br>
		Sadguroh Sainaadhasya kripa paatram bhaveddhruham<br><br>
		
		Karacharanakritam vaakkaayajam karmajam vaa<br>
		Shravananayanajam vaa maanasam vaaparadham<br>
		Viditamaviditam vaa sarvame tatshkamasva<br><br>
		
		Jaya Jaya karunaabdhe shri pabho sainaatha<br><br>
        `,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
  {
    image: saiBabaAartiImage,
    title: "Dhup Aarti (Evening Aarti)",
    description: "Aarti Sai Baba, saukhyadaataara...",
    content: [
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: "",
      },
      {
        subtitle: "Aarati Sai",
        text: `
        Aarti Sai Baba, saukhyadaataara jeeva. Charana rajaatalee<br>
		Dhyaava daasaan visaawaa, bhaktaa visaawaa Aarti Sai Baba<br><br>
		
		Jaaluniyaan aananng swaswaroopee raahe dhanga<br>
		Mumukshu janaan daavee nija dolaan Sreeranga, dolaan Sreeranga Aarti Sai Baba<br><br>
		
		Jayaa manee jaisaa bhaava tayaa taisaa anubhava<br>
		Daawisee dayaaghanaa aisee tujzee hee maava tujzeeheemaava Aarti Sai Baba<br><br>
		
		Tumache naama dhyaataan hare sansrithi vyathaa<br>
		Agaadha tava karanee maarga daawisee anaadhaa,daawisee anaadhaa Aarti Sai Baba<br><br>
		
		Kaliyugee avataara saguna parabrahm saachara<br>
		Avateerna jhaalase swami Datta digambara, Datta digambara Aarti Sai Baba<br><br>
		
		Aattan divasaan guruwaaree bhakta karitee waaree<br>
		Prabhupada pahaavayaa bhavabhaya niwaree, bhaya niwaree Aarti Sai Baba<br><br>
		
		Maajan nija dravya tteewaa tav charan rajasevaa<br>
		Maagane hechiyaataa tumhan devaadhideva, Devaadhideva Aarti Sai Baba<br><br>
		
		Ichchita deena chaatak nirmala toya nijasookha<br>
		Paajaawe maadhavaa yaa saambhal aapulee bhaaka, aapulee bhaaka Aarti....<br>
        `,
      },
      {
        subtitle: "Abhang",
        text: `
        Shirdee maajze Pandharapura Saibaba Ramaavara<br>
		Baba Ramaavara, Sai Baba Ramaavara<br><br>
		
		Shuddha bhaktee chandrabhaabagaa, Bhaava pundaleeka jaagaa<br>
		pundaleeka jaagaa. Bhaava pundaleeka jaagaa<br><br>
		
		Yaa ho yaa ho avaghe jana karaa Babaansee vandana<br>
		Saisi vandana karoo Babaansee vandana<br><br>
		
		Ganu mhane Baba Sayee. Dhaava paava maajze aayee<br>
		paava maajze aayee. Dhaava paava maajze aayee<br>
        `,
      },
      {
        subtitle: "Naman Ghaaleena",
        text: `
        Ghaaleena lotaangana vandeen charana Dolyanee paaheen roop tujze<br>
		Preme aalingana aanande poojin, Bhave oowaalina mhane Naamaa<br><br>
		
		Tvameva maataa cha pitaa tvameva Tvameva bandhuscha sakhaa tvameva<br>
		Tvameva vidyaa dravinam tvameva, Tvameva servam mama Devadeva<br><br>
		
		Kaayena vaachaa manasrendriyaiarwan Budhyatmanaa vaa prakriti swabhavaat<br>
		Karomi yadyatsakalam parasmai, Narayanaayeti samarpayaami<br><br>
		
		Acyutam Keshavam Raamanaaraayanam Krishnadaamodaram Vaasudevam Harim<br>
		Shreedharam Maadhavam Gopikaa Vallabham, Jaanakeenaayakam Raamachandram Bhaje<br><br>
		
		Hare Rama, Hare Rama. Rama Rama Hare Hare<br>
		Hare Krishna, Hare Krishna. Krishna Krishna Hare Hare<br><br>
		
		Shri Gurudeva Datta<br>
        `,
      },
      {
        subtitle: "Namaskara Astakam ",
        text: `
        Anantaa tulaa ten kase re sthavaave, Anantaa tulaa ten kase re namaave<br>
		Anantaa mukhaanchaa shine shesh gaataan, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Smaraave hmanee twatpadaa nitya bhaave, Wurave taree bhaktisaattee swabhaave<br>
		Tarave jagaa taarunee maaya taataa,Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Vase jo sadaa daavayaa santleela, Dise agna lokaanparee jo janaalaa<br>
		Paree antaree gnaana kaiwalya daataa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Baraa laadhalaa janma haa maanvaachaa Naraa saarthakaa saadhaneebhuta saacha<br>
		Dharoon Sayeepremaa galaayaa ahantaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Dharave karee saana alpagna baala, Karaave amhaa dhanya chumboni gaalaa<br>
		Mukhee gala preme karaa graas aataan, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Suraadeeka jyaanchyaa padaa vanditaantee, Sukadeeka jyaante samaanatva detee<br>
		Prayagaadi teerthen padee nasmra hotaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Tujhyaa jhya padaa paahtan gopabaalee, Sadaa rangalee chitswaroopee milaalee<br>
		Karee raasakreedaa save Krishna naathaa, Namaskaar saashtaang Shri Sainaatha<br><br>
		
		Tulaa maahato maagane eka dhyaave, Karaa jodito deena atyanta bhaave<br>
		Bhavee mohaneeraaja haa taari aataan, Namaskaar saashtaang Shri Sainaatha<br><br>
        `,
      },
      {
        subtitle: "Aisaayee Baa",
        text: `
        Aisaa eyee baa –- Sayee digambaraa –- Akshyaya roopa avataara<br>
		Sarvahi vyapaka too –- Shrutisaara –- anusayaatrikumaaraa –- Aisaa eyee baa<br><br>
		
		Kaashee snaana japa –- pratidivashee –- Kolhapura bhikshesee –- nirmala nadi tungaa<br>
		Jala praasee –- Nidra maahur deshee -- Aisaa eyee baa<br><br>
		
		Jzholee lombatase vaamakaree -– trishoola damaroo dhari<br>
		Bhakta varada sadaa sukhakaaree Deseel mukti charee -- Aisaa eyee baa<br><br>
		
		Paayee paadukaa japamaala -– kamandaloo -– Mrigacchalaa -– dhaarana kariseebaa<br>
		Naagajataa -– Mukuta sobhato maathaa -- Aisaa eyee baa<br><br>
	
		Tatpara tujyaa je dhyaanee -– akshyaya Thyaanche sadhanee -– Lakshmeevasa karee<br>
		Dinarajanee -– Rakshisi sankat vaaruni -- Aisaa eyee baa<br><br>
		
		Yaa pari dhyaana tujze gururaayaa -– Drishya karee nayanaan yaa<br>
		Poornaananda sukhe hee kaayaa -– Laavise hariguna gaayaa -- Aisaa eyee....<br>
        `,
      },
      {
        subtitle: "Mahimna Stotrama ",
        text: `
        Sadaa satswaroopam chidaananda kandam<br>
		Jagat sambhavasthaana samhaara hetum<br>
		Swabhaktechhayaa maanusham darsayantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Bhavadwaantha vidhwamsa maarthaanda meeddyam<br>
		manovaagateetam munir dhyana gamyam<br>
		Jagadvyapakam nirmalam nirgunam twaam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		
		Bhawaambhodi magnaarthitaanaam lanaanaam<br>
		Swapaadaasritaanaam swabhakti priyaanaam<br>
		Samuddhaaranaartham kalow sambhavantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sadaa nimba vrikshasya mooladhivaasaat<br>
		Sudhaasravinam tiktamapya priyantam<br>
		Tarum kalpa vrikshaadhikam saadhayantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sadaa kalpavrikshyasya tasyaadhi moole<br>
		Bhawadbhava budhyaa saparyaadisevaam<br>
		Nrinaam kurwataam bhukti mukti pradantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Anekaashrutaa tarkya leelaa vilaasaeih<br>
		Samaavishkruteshaana bhaasvat prabhaavam<br>
		Ahambhaava heenam prasannathma bhaawam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sataam Vishramaaraama mevaabhiraamam<br>
		sadaa sajjanaih samsthutam sannamadbhih<br>
		Janaamodadam bhakta bhadrapradantam<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Ajanmaadhyamekam param brahma saakshaat<br>
		Swayam sambhavam raamamevaavateernam<br>
		Bhawadharshanaathsam puneetah praboham<br>
		Nameeswaram Sadgurum Sainaatham<br><br>
		
		Sree Sayeesa kripaanidhe akhilanrinaam sarwaartha siddhi prada<br>
		Yushmatpaadarajah prabahavamatulam dhaataapi vaktaakshhamah<br>
		Sadbhakthyaa saranam kritaan jali putah samprapthithosmi prabho<br>
		Shrimath Sayi paresa paada kamalaa naanya ccharanyam mama<br><br>
		
		
		Sayiroopadhara raaghavottamam, Bhakta kaama vibhuda dhrumam prabhum<br>
		Maayayopahata chitta shudhayae, Chintayaamyahamaharnisam mudaa<br><br>
		
		
		Sharat sudhaamsu pratrima prakaasam, kripatapaatram tava Sainaatha<br>
		Twadeeya paadaabja samaashritaanaam, Swachhaayayaa taapamapaa karothu<br><br>
		
		
		Upaasanaa Daivata Sainaatha, Sthavairmayopaasaninaasthu sthatwam<br>
		Ramenmaromne tava paadayugme bhrungo, Yathaabji makarmda lubdhah<br><br>
		
		Aneka janmaarjita paapasamkshayo, Bhavet bhawatpaada saroja darshanaat<br>
		Kshamaswa sarvaanaparaadha poonjakaan, praseeda Sayeesa Sadguro dayaanidhe<br><br>
		
		Sri Sainatha charanaamrita putachithaah, Sthwatpaada seva natrataah satatamcha bhaktyaa<br>
		Samsaara janya duritaagha vinirgataaste, kaivalya dhaama paramam samavaapnuvanti<br><br>
        `,
      },
      {
        subtitle: "Guru Yachnastakam",
        text: `
        Ruso mama priyaambikaa majavaree pitahee ruso<br>
		Ruso mama priyaangana priyasutaatmajaahee ruso<br>
		Ruso bhagini bandhuhee swasura saasubayee ruso<br>
		Na datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Puso na sunabayee tyaa maja na bhratrujaayaa puso<br>
		Puso na priya soyare priya sage na gnateen puso<br>
		Puso suhrida naa sakhaa swajana naapta bandhu puso<br>
		Paree na Guru Saayima majavaree ksdheenhee ruso<br>
		<br>
		Puso na abalaa mulen tarun vriddhahee naa puso<br>
		Puso na Guru Dhakute maja na thor saane puso<br>
		Puso nacha bhale bure sujan sadhuheen naa puso<br>
		Paree na Guru Saayima majavaree ksdheenhee ruso<br>
		<br>
		Ruso chatura tatwavit vibhudha praagna jnaanee ruso<br>
		Rusohi vidushee striyaa kushal panditaahee ruso<br>
		Ruso mahipatee yatee bhajak taapaseehe ruso<br>
		Na Datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Ruso kavi rishee munee anagha siddha yogee ruso<br>
		Ruso hi grihadevataa ni kula grama Devee ruso<br>
		Ruso khala pishaascahee malin dhakineehee ruso<br>
		Na Datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Ruso mriga khaga krimi akhila jeeva jantu ruso<br>
		Ruso vitap prastaraa achal aapagaabdhee ruso<br>
		Ruso kha pavan naagni vaar avani panchatathwe ruso<br>
		Na Datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Ruso vimal kinnaraa amala yakshineehee ruso<br>
		Ruso shashi khagaadihee gagani taarakaahee ruso<br>
		Ruso amararaajahee adaya dharmaraajaa ruso<br>
		Na Datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Ruso mana Saraawatee chapala chitta tehee ruso<br>
		Ruso vapu dishaakhilaa kattina kaal tohee ruso<br>
		Ruso sakal vishwahee mayi tu brahma golaaM ruso<br>
		Na Datta Guru Saayima majavaree kadheenhee ruso<br>
		<br>
		Vimoodha hmanoonee haso majana matsaraahee daso<br>
		Padaabhi ruchi ulhasoh janan kardamee naa phaso<br>
		Na durga dhriticha dhaso ashivbhaav maage khaso<br>
		Prapanchi manahe ruso dridda virakti chitee ttaso<br>
		<br>
		Kunaachihi grinaa naso na cha sprihaa kashaachee aso<br>
		Sadaiva hridayee vaso manasi dhyani Sayee vaso<br>
		Padee pranaya voraso nikhila drishya baabaa diso<br>
		Na Dattaguru Saayima upari yaachneela ruso<br>
        `,
      },
      {
        subtitle: "Mantra Pushpam",
        text: `
        Hari he OM...<br><br>
		yagnena yagnamayajanta devaastaani dharmaani prathamaabyaasan<br>
		Tehanakam mahimaanah sachanta yatra poorve sadhyaa santi Devaaha<br><br>
		
		Om rajaadhiraajaaya prasahya saahine namo vayam Vaishravanaaya kurmahe<br>
		Sa me kaaman kaama kaamaya mahyam kameswaro Vaishravano tathatu<br>
		Kuberaraya Vaishravanaaya Mahaaraajaaya namah<br><br>
		
		Om swasti saamrajyam bhojyam swaaraajyam vairaajyam, paarameshtyam<br>
		Raajyam mahaarajya maadhi patya mayam Samantaparyaa yeesyat<br>
		Saarvabhoumah saarvayushya aantaadaaparaaraadhaat prithivyai<br>
		Samudraparyanthaayaa ekaraalithi<br><br>
		
		Tadapyesha slokobhigeeto marutah parivestaaro marutah pariveshtaaro<br>
		maruttasyaavasan gruhe Avikshitasya kamaprer Visvedevaah sabhaa sada ithi<br><br>
		
		Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki Jay<br>
		
		Karacharanakritam vaakkaayajam karmajam vaa<br>
		Shravananayanajam vaa maanasam vaaparadham<br>
		Viditamaviditam vaa sarvame tatshkamasva<br><br>

		Jaya Jaya karunaabdhe shri pabho Sainaatha<br><br>

		Shri Naarayana Vaasudevaaya Sri saccidananda Sadguru Saiñatha Maharaja ki Jaya<br>
        `,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
  {
    image: saiBabaAartiImage,
    title: "Sej Aarti",
    description: "Owaloo aaratee mazhaa....",
    content: [
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: "",
      },
      {
        subtitle: "Aarti",
        text: `
        Owaloo aaratee mazhaa Sadgurunaathaa -– maazhaa Sainaatha<br>
		Paanchaahee tatwaanche deep laawilaa aataan<br><br>
		
		Nirgunaachee sthitee kaisee aakaaraa aalee –- Baba aakaaraa aalee<br>
		Sarvaa ghatee bharooni vuralee Sayee Maawoolee Owaloo aaratee….<br><br>
		
		RajaTamaSathwa tighe maayaa prasawalee –- Mazyawara maayaa prasawalee<br>
		Mayecheeye potee kaisee maayaa udbhavalee Owaloo aaratee….<br><br>
		
		SaptaSaagaree kaisa khel maandeelaa –- Baba khel maandeelaa<br>
		Khelooniyaa khel awagha visthaar kelaa Owaloo aaratee…..<br><br>
		
		Brahmaandeechee rachanaa keisee daakhavilee dolaa –- Baba daakhavilee dolaa<br>
		Tuka hmane maazhaa Swaamee kripaaloo bholaa Owaloo aaratee….<br>
        `,
      },
      {
        subtitle: "Jnaneswar",
        text: `
        Lopale jnaana jagin –- hita nenatee konee<br>
		Avataara Panduranga -– nam ttevile jnanee<br><br>
		
		Aaratee Jnaanaraaja –- mahaa kaivalya tejaa<br>
		Sevitee Saadhusanta –- hmanu vedhalaa maazha Aaratee Jnaanaraaja<br><br>
		
		Kanakachee tat kareen – Ubhyaa gopikaa naaree<br>
		Narada tumbaraho – samgaayan karee Aaratee Jnaanaraaja….<br><br>
		
		Pragata guhya bole –- vishwa brahmachi kele<br>
		Rama Janardanee –- payee masthak ttevile Aaratee Jnaanaraaja….<br>
        `,
      },
      {
        subtitle: "Tukaram",
        text: `
        Aaratee Tukaaraamaa –- Swamee Sadguru dhaamaa<br>
		Satchidaananda murtee –- paaya dakhavi aamhaa Aaratee Tukaaraamaa<br><br>
		
		Raaghave Saagaraat –- jaise paashaan taarile<br>
		Taise he tuko baache –- abhang rakshile Aaratee Tukaaraamaa....<br><br>
		
		Tukitaa tulanesee –- brahma tukasee aale<br>
		Hmanoni raamesware –- charanee mastak ttevile Aaratee Tukaaraamaa.....<br>
        `,
      },
      {
        subtitle: "Sej Aarti",
        text: `
        Jai jai Sainatha aataa pahudaave mandiree ho, Jai jai Sainatha aataa pahudaave mandiree ho<br>
		Aalavito sapreme tuzhala aaratee ghevuni kareeho, Jai jai Sainatha aataa pahudaave mandiree ho<br><br>
		
		Ranjavisee too madhura bulunee –- maaya jashi nija mulaa ho<br>
		Ranjavisee too madhura bulunee –- maaya jashi nija mulaa ho<br
		Bhogisi vyadhee tunch haruniyaa -– nijasevak dukhaalaa ho<br>
		Bhogisi vyadhee tunch haruniyaa -– nijasevak dukhaalaa ho<br>
		Dhavuni bhakta vyasana harisi –- darshan deshee tyaalaa ho<br>
		Dhavuni bhakta vyasana harisi –- darshan deshee tyaalaa ho<br>
		Jzhaale astil kasta ateesaya tumache yaa dehaalaa ho Jai jai Sainatha…..<br><br>
		
		Skhmaa shayana sundara hee shobhaa –- suman shej tyaavareen ho<br>
		Skhmaa shayana sundara hee shobhaa –- suman shej tyaavareen ho<br>
		Gdhyaavee todee bhakta jananchee –- pujan archan kareen ho<br>
		Gdhyaavee todee bhakta jananchee –- pujan archan kareen ho<br>
		Owaalito panchaprana -– jyotee sumatee kareen ho<br>
		Owaalito panchaprana -– jyotee sumatee kareen ho<br>
		Sevaa kinkara bhakta preetee –- attar parimala vaaree ho Jai jai Sainatha…..<br><br>
		
		Soduni jaayaa dukha waatate –- Baba tava charanaansee ho<br>
		Soduni jaayaa dukha waatate –- Sayee tava charanaansee ho<br>
		Agnesthavah aasi prasaada –- ghevuni nijasadanaasee ho<br>
		Agnesthavah aasi prasaada –- ghevuni nijasadanaasee ho<br>
		Jaato aata yevu punarapi –- twatcharanaanche paashee ho<br>
		Jaato aata yevu punarapi –- twatcharanaanche paashee ho<br>
		Uttavoon tujala Saimaavule -– nijahitasaadhaa yaasee ho<br>
		Uttavoon tujala Saimavule –- nijahitasaadhaa yaasee ho Jai jai Sainatha…..<br>
        `,
      },
      {
        subtitle: "Aataa Swaamy",
        text: `
        Aataa Swaamee sukhe nidraa karaa avadhutaa –- Baba karaa Sainathaa<br>
		Chinmaya he sukhfhaama jaawuni pahudaa ekaantaa<br><br>
		
		Vairaagyaachaa kunchaa ghewuni chowk jhadeela –- Baba chowk jhadeela<br>
		Tayaawaree supremaachaa shidakaavaa didhalaa Aataa Swaamee…..<br><br>
		
		Paayaghadadyaa ghatalyaa sundar navavidhaa bhakti — Baba navavidhaa bhakti<br>
		Jnaanaachyaa samayaa laawuni ujalalyaa jyotee Aataa Swaamee…..<br><br>
		
		Bhaavaarthaanchaa manchaka hridaya kaashee taangilaa – hridaya kaashee taangilaa<br>
		Manaachee sumane karunee kele sheejelaa Aataa Swaamee…..<br><br>
		
		waitaache kapaat laavuni ekatra kele –- Baba ekatra kele<br>
		Durbuddheenchyaa gatte soduni padade sodeele Aataa swaamee….<br><br>
		
		Aashaa trishnaa kalpanechaa Soonduni galabala –- Baba Saanduni galabala<br>
		Dayaa kshamaa shaantee daasee ubhyaa sewelaa Aataa Swaamee….<br>
		<br>
		Alakshya unmanee ghevunee Baba naajuk dusshaalaa -– Baba naajuk dusshaalaa<br>
		Niranjana Sadguru swamee nijavile shejelaa Aataa Swaamee….<br><br>
		
		Shri Satchitaanand Sadguru Sainaath Maharaaj ki<br>
		
		Shri Guru Deva Datta!`,
      },
      {
        subtitle: "Abhang",
        text: `
        Paahen prasadachee vaat ghyaave dhuvoniyaan taat<br>
		Sesh ghewoniaan taat Tumche jhaliyaan bhojan<br>
		Jhaalo aata eksavaa Tumha aadu niyaa devaa<br>
		Tuka hmane aatan chitt karooni raahilo nischint<br>
        `,
      },
      {
        subtitle: "Abhang",
        text: `
        Paawala prasaad aataa vitto nijaave –- Baba aataa nijaave<br>
		Apulaa to shrama kalo yetase bhaave<br><br>
		
		Aataan Swaamee sukhe nidraa karaa Gopala –- Baba Sai dayaalaa<br>
		Purale manorath jato aapule sthalaa<br><br>
		
		Tumhaasee jaagawoo aamhi aapulya chaada –- Baba aapulya chaada<br>
		Shubhashub karme dosh haraavayaa peedaa<br>
		Aataan Swaamee sukhe nidraa karaa Gopala – Baba Sai dayaalaa<br>
		Purale manorath jato aapule sthalaa….<br><br>
		
		Tuka hmane didhale utchistaache bhojan — utchistaache bhojan<br>
		Naahi nivadile aamha apulya bhinn<br>
		Aataan Swaamee sukhe nidraa karaa Gopala –- Baba Sai dayaalaa<br>
		Purale manorath jato aapule sthalaa<br><br>
		
		Aataan Swaamee sukhe nidraa karaa Gopala –- Baba Sai dayaalaa<br>
		Purale manorath jato aapule sthalaa<br>
		`,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
  {
    image: saiBabaAartiImage,
    title: "Mangala Aarti",
    description: "Aarti Sai Baba saukhyadaataara....",
    content: [
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: "",
      },
      {
        subtitle: "Aarati Sai",
        text: `
        Aarti Sai Baba, saukhyadaataara jeeva. Charana rajaatalee<br>
		Dhyaava daasaan visaawaa, bhaktaa visaawaa Aarti Sai Baba<br><br>
		
		Jaaluniyaan aananng swaswaroopee raahe dhanga<br>
		Mumukshu janaan daavee nija dolaan Sreeranga, dolaan Sreeranga Aarti Sai Baba<br><br>
		
		Jayaa manee jaisaa bhaava tayaa taisaa anubhava<br>
		Daawisee dayaaghanaa aisee tujzee hee maava tujzeeheemaava Aarti Sai Baba<br><br>
		
		Tumache naama dhyaataan hare sansrithi vyathaa<br>
		Agaadha tava karanee maarga daawisee anaadhaa,daawisee anaadhaa Aarti Sai Baba<br><br>
		
		Kaliyugee avataara saguna parabrahm saachara<br>
		Avateerna jhaalase swami Datta digambara, Datta digambara Aarti Sai Baba<br><br>
		
		Aattan divasaan guruwaaree bhakta karitee waaree<br>
		Prabhupada pahaavayaa bhavabhaya niwaree, bhaya niwaree Aarti Sai Baba<br><br>
		
		Maajan nija dravya tteewaa tav charan rajasevaa<br>
		Maagane hechiyaataa tumhan devaadhideva, Devaadhideva Aarti Sai Baba<br><br>
		
		Ichchita deena chaatak nirmala toya nijasookha<br>
		Paajaawe maadhavaa yaa saambhal aapulee bhaaka, aapulee bhaaka Aarti....<br>
        `,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
  {
    image: saiBabaAartiImage,
    title: "Sai Baba Shlok",
    description: "Sadaa nimba vrikshasya....",
    content: [
      {
        subtitle: "",
        text: `
		    Sadaa nimba vrikshasya mooladhivaasaat<br>
			Sudhaasravinam tiktamapya priyantam<br>
			Tarum kalpa vrikshaadhikam saadhayantam<br>
			Nameeswaram Sadgurum Sainaatham<br><br>
			
			Sadaa kalpavrikshyasya tasyaadhi moole<br>
			Bhawadbhava budhyaa saparyaadisevaam<br>
			Nrinaam kurwataam bhukti mukti pradantam<br>
			Nameeswaram Sadgurum Sainaatham<br><br>
		`,
      },
      {
        subtitle: "|| Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai ||",
        text: `
          <h4>Om Raajaadhiraaja Yogiraaja ParaBrahma Sainaath Maharaaj...<br>
          Shri Satchitaanand Sadguru Sainaath Maharaaj ki Jai...!!!</h4>
        `,
      },
    ],
  },
];

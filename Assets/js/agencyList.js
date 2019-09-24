const agencys = [
  {
    agent:'Messan',
    agency:"ETS TIONOS",
    city:"ABENGOUROU",
    location:"AU CHATEAU,EN FACE DU DISPENSAIRE DIOULAKRO",
    phone:22504229165
  },
  {
    agent:"Messan",
    agency:"SOURCE D'EAU VIVE",
    city:"ABIDJAN ABOBO DOUME",
    location:"ABOBO DOUME A LA GARE DE WORO WORO, BATEAU BUS",
    phone:22505710552
  },
  {
    agent:"Messan",
    agency:"MIMOYE FINANCES",
    city:"ABIDJAN COCODY",
    location:"DERRIERE LA RTI, VOIE INADES, ENTREE RT2",
    phone:"22557889344"
  },
  {
    agent:"Messan",
    agency:"BREHON SERVICES",
    city:"ABIDJAN KOUMASSI",
    location:"SICOGI 2, PETIT MARCHE, PHCIE BETHANIE AU TOURNANT DU GLACIER",
    phone:22504101857
  },
  {
    agent:"Messan",
    agency:"ELIKET MARKET",
    phone:"22508130524",
    city:"ABIDJAN RIVIERA BONOUMIN",
    location:"FACE A L'EGLISE REVEIL EN CONSTRUCTION",
    phone:"22577764589"
  },
  {
    agent:"Messan",
    agency:"MIMOYE FINANCES",
    phone:"22549262253",
    city:"TREICHVILLE",
    location:"TREICHVILLE AV 21 FACE A LA PHCIE ENTENTE, ROUTE DE NOTRE DAME",
    phone:"22506034653"
  },
  {
    agent:"Messan",
    agency:"MIMOYE FINANCES",
    city:"ABIDJAN YOPOUGON",
    location:"AU SEIN DU MARCHE DE SELMER",
    phone:22557796156
  },
  {
    agent:"Messan",
    agency:"SOUMAHORO ET FRE,RES",
    phone:"22523459434",
    location:"YOPOUGON SIDECI, APRES SAGUIDIBA",
    phone:"22566043214",
  },
  {
    agent:"Messan",
    agency:"EFAM",
    city:"EHIANIA",
    location:"AKAKRO",
    phone:22546018689
  },
  {
    agent:"Messan",
    agency:"KIEMA YACOUBA",
    city:"ATTIEKRO",
    location:"AU MARCHE D'ATTIEKRO",
    phone:22556200312
  },
  {
    agent:"Messan",
    agency:"LA FINANCIERE",
    city:"AYAME",
    location:"DERRIERE LA PHARMACIE",
    phone:22507829944
  },
  {
    agent:"Messan",
    agency:"TRANSCOM",
    city:"BETTIE",
    location:"AU  ROND POINT DE BETTIE , CASH EXPRESS",
    phone:22508027979
  },
  {
    agent:"Messan",
    agency:"OLIVE VOYAGE",
    city:"BINGERVILLE",
    location:"AU SEIN DE LA CITE CIE",
    phone:22548655429
  },
  {
    agent:"Messan",
    agency:"KIEMA YACOUBA",
    city:"DIAMARAKRO",
    location:"A LA GARE ROUTIERE DE DIAMARAKRO",
    phone:22504798912
  },
  {
    agent:"Messan",
    agency:"DESTINATION BASSAM",
    city:"GRAND BASSAM",
    location:"GRAND BASSAM PRES DU COMPLEXE, FACE A LA SGBCI",
    phone:22501719104
  },
  {
    agent:"Messan",
    agency:"ETS B A",
    city:"MAFERE",
    location:"FACE AU MARCHE DE MAFERE",
    phone:22508009282
  },
  {
    agent:"Messan",
    agency:"MIMOYE FINANCES",
    city:"ARRAH",
    location:"VOIE PRINCIPALE",
    phone:"22548985444"
  },
  {
    agent:"Messan",
    agency:"MIMOYE FINANCES",
    city:"M'BATTO",
    location:"QUARTIER COMMERCE, IMMEUBLE KPATABO",
    phone:22558468843
  },
  {
    agent:"Messan",
    agency:"MOAYE FINANCES",
    city:"N ZIANOUAN",
    location:"A LA PHARMACIE MOAYE",
    phone:22504004038
  },
  {
    agent:"Messan",
    agency:"INCH'ALLAH",
    city:"YAKASSE ATTOBROU",
    location:"A 100 METRES DU CARREFOUR DES IMPOT FACE A L'ESPACE LAURENT GBAGBO",
    phone:"22504893051",
    phone:"22504240179"
  },
  {
    agent:"Messan",
    agency:"AOUDI SERVICES",
    city:"SAMO",
    location:"ROUTE D'ASSOUINDE",
    phone:22505418233
  },
  {
    agent:"Messan",
    agency:"ETS TIONO",
    city:"EBILASSOKRO",
    location:"NON LOIN DU MARCHE",
    phone:22504063887
  },
  {
    agent:"Messan",
    agency:"ETS TIONO",
    city:"APOUESSOU",
    location:"VERS LE MARCHE",
    phone:22504240486
  },
  {
    agent:"Messan",
    agency:"ETOILE DISTRIBUTION",
    city:"NOUAMOU",
    location:"GARE DE NOUAMOU CABINE ORANGE MONEY",
    phone:22508124092
  },
  {
    agent:"Messan",
    agency:"ETS TIONO",
    city:"MANZANOUA",
    location:"ENTREE SANKADIOKRO, PRES DE L'HOPITAL",
    phone:22554648904
  },
  {
    agent:"Messan",
    agency:"MEDINA SERVICE",
    city:"SAMO",
    location:"SAMO route principale , pres de la station KLENZI",
    phone:22546819299
  },
  {
    agent:"Messan",
    agency:"SIKA",
    phone:"22503100444",
    city:"ABIDJAN II PLATEAUX",
    location:"CARREFOUR LES OSCARS , FACE A LA GRANDE ECOLE ISCM",
    phone:"22503895175"
  },
  {
    agent:"Messan",
    agency:"KIEMA YACOUBA",
    city:"BIANOUAN",
    location:"ROUTTE D'ABOISSO , pres de la boulangerie",
    phone:22556151538
  },
  {
    agent:"Messan",
    agency:"KIEMA YACOUBA",
    city:"ZARANOU",
    location:"ROUTE D'ABENGOUROU FACE AU MARCHE",
    phone:"22556720312",
    phone:"22507111590"
  },
  {
    agent:"Messan",
    agency:"ETS NAHAN",
    city:"ANYAMA",
    location:"ANYAMA, SOSSONKOI",
    phone:"22504609347",
    phone:"22509087959"
  },
  {
    agent:"Messan",
    agency:"AOUDI SERVICES",
    city:"SAMO",
    location:"ROUTE D'ASSOUINDE",
    phone:22505418233
  },
  {
    agent:"Messan",
    agency:"CKINAM.COM",
    city:"YOPOUGON WASSAKARA",
    location:"CARREFOUR KABADOUGOU,DERRIERE EGLISE UNIVERSELLE",
    phone:22507052486
  },
  {
    agent:"Messan",
    agency:"CPS",
    city:"TREICHVILLE  BELLE VILLE",
    location:"MARCHE BELLE VILLE FACE A LA CECP AU SEIN DE CAC",
    phone:22559123711
  },
  {
    agent:"Messan",
    agency:"SYLLA ALPHA",
    city:"AGNIBILEKRO",
    location:"PRES DE LA BACI,NON LOIN DE LA CNCE",
    phone:"2250877675",
    phone:"22557771136"
  },
  {
    agent:"Messan",
    agency:"SYLLA ALPHA",
    city:"DAME",
    location:"ROUTE DE LA SOUS PREFECTURE",
    phone:22547353135
  },
  {
    agent:"Messan",
    agency:"SYLLA ALPHA",
    city:"AKOBOISSUE",
    location:"AU MARCHE",
    phone:22549000555
  },
  {
    agent:"Messan",
    agency:"SYLLA ALPHA",
    city:"MANZANOUAN",
    location:"AU MARCHE",
    phone:22549063397
  },
  {
    agent:"Messan",
    agency:"HEN ISSA GEDEON",
    city:"DUFFEREBO",
    location:"PRES DE LA COUR DU CHEF DU VILLAGE",
    phone:22509365463
  },
  {
    agent:"Messan",
    agency:"HEN ISSA GEDEON",
    city:"AMOLIAKRO",
    location:"ROUTE DE DAOUKRO,PRES DE LA GRANDE MOSQUE",
    phone:22507211593
  },
  {
    agent:"Messan",
    agency:"PINDA DIALLO",
    city:"AGNIBILEKRO",
    location:"PRES DE LA PETITE MOSQUE,ROUTE ALI",
    phone:"22508696261",
    phone:"22507549304"
  },
  {
    agent:"Messan",
    agency:"THE OULAI GROUP",
    city:"COCODY 2 PLATEAU",
    location:"7 ème TRANCHE,NON LOIN DU CARREFOUR CI TELECOM",
    phone:22558001701
  },
  {
    agent:"Messan",
    agency:"ABISSA YAO",
    city:"AGNIBILEKRO",
    location:"APRES LE MARCHE , CARREFOUR PHILOMENE PRES DE SAM SONO",
    phone:22504656560
  },
  {
    agent:"Messan",
    agency:"TA BITHA",
    city:"DABOU",
    location:"MARCHE DE DABOU",
    phone:22557027566
  },
  {
    agent:"Messan",
    agency:"ETS ANEVA",
    city:"BONOUA",
    location:"ESPACE MOOV,ROND POINT POPO CARNAVAL",
    phone:22546342300
  },
  {
    agent:"Messan",
    agency:"ETS ANEVA",
    city:"BONOUA",
    location:"QUARTIER BRONOUKRO EN FACE DE L'EGLISE HARRISTE",
    phone:22501828399
  },
  {
    agent:"Messan",
    agency:"ETS ANEVA",
    city:"N'ZIKRO",
    location:"AU MARCHE EN BORDURE DE ROUTE(Voie Bonoua-Aboisso)",
    phone:22546342300
  },
  {
    agent:"Messan",
    agency:"NANA SERVICE",
    phone:"22542017371",
    city:"BINGERVILLE",
    location:"BINGERVILLE CIE,CARREFOUR DJAMA",
    phone:"22507535824"
  },
  {
    agent:"Messan",
    agency:"DECTA SERVICE",
    city:"SONGON AGBAN",
    location:"A LA GARE,FACE  A LA PHARMACIE DE SONGON",
    phone:22505613106
  },
  {
    agent:"Messan",
    agency:"ETS TEHILA",
    city:"RIVIERA PALMERAIE",
    location:"APRES LE ROND POINT PALMERAIE,MARCHE,FACE A LA PHARMACIE LE BONHEUR",
    phone:"22503104627",
    phone:"22502487815"
  },
  {
    agent:"Messan",
    agency:"ETS TEHILA",
    city:"YOPOUGON AZITO",
    location:"YOPOUGON AZITO,APRES EGLISE AD,ROUTE NON BITUMEE",
    phone:"22501197076",
    phone:"22540403634"
  },
  {
    agent:"Messan",
    agency:"AUREM'S SERVICES",
    city:"BINGERVILLE",
    location:"QUARTIER SICOGI 2 FACE A LA BOULANGERIE NON LOIN DU MAQUIS PROCUREUR",
    phone:"22509033386",
    phone:"22505408445"
  },
  {
    agent:"Messan",
    agency:"MAISSON D'AARON",
    city:"ATTECOUBE",
    location:"ATTECOUBE KOWEIT QUARTIER AWA PRES DE L'ECOLE STE ROSE",
    phone:22547335975
  },
  {
    agent:"Messan",
    agency:"MOHAMED SERVICES",
    city:"DABOU",
    location:"CARREFOUR COMMISSARIAT AU SEIN DE L'AGENCE ORANGE MONEY",
    phone:"22507485260"
    },
  {
    agent:"Messan",
    agency:"ETS ABC",
    city:"BIETRY ZONE 4",
    location:"FACE AU DEPOT VOIE TOUT DOITE A GAUCHE APRES LE GLACIER AMOR",
    phone:"22589487815",
    phone:"22556093550"
  },
  {
    agent:"Messan",
    agency:"KDO DISTRIBUTION",
    city:"PKOUEBO",
    location:"MARCHE DE PKOUEBO",
    phone:22508018179
  },
  {
    agent:"Messan",
    agency:"ALLA SERVICE",
    city:"KOUASSI KOUASSIKRO",
    location:"MARCHE FACE A LA CAISSE D'EPARGNE",
    phone:22545700139
  },
  {
    agent:"Messan",
    agency:"SOGOYERE COMMUNICATION",
    phone:"22508479400",
    city:"PRIKRO",
    location:"MARCHE DE PRIKRO,  AGENCE MOOV",
    phone:"22556989926"
  },
  {
    agent:"Messan",
    agency:"SOGOYERE COMMUNICATION",
    city:"KOUASSI DATEKRO",
    location:"AU MARCHE EN BORDURE DE ROUTE",
    phone:22548042614
  },
  {
    agent:"Messan",
    agency:"SOGOYERE COMMUNICATION",
    city:"NASSIAN",
    location:"A LA GARE ROUTIERE",
    phone:22548401036
  },
  {
    agent:"Messan",
    agency:"SOGOYERE COMMUNICATION",
    city:"SANDEGUE",
    location:"FACE A LA BOULAGERIE PRES DE MARCHE",
    phone:22548990261
  },
  {
    agent:"Messan",
    agency:"AHMED SERVICE",
    city:"BOCANDA",
    location:"SUR LA VOIE PRINCIPALE PRES DE LA PHARMACIE DE BOCANDA",
    phone:22508095431
  },
  {
    agent:"Messan",
    agency:"QUINCAILLERIE BOUA KEMA",
    city:"BOCANDA",
    location:"ROUTE PRINCIPALE DIMBOKRO-ANANDA FACE GARE KOUASSI-KOUASSIKRO",
    phone:22555969312
  },
  {
    agent:"Messan",
    agency:"MUTRA",
    city:"BONGOUANOU",
    location:"SITUE PRES DE LA GARE DE TAXI, DANS LES ANCIENS LOCAUX DE LA LONACI",
    phone:"ENCOURSDOUVERTURE"
  },
  {
    agent:"Messan",
    agency:"FCEC",
    city:"KOKOUMBO",
    location:"ROUTE PRINCIPE YAKRO-OUME A DROITE EN FACE DU MARCHE",
    phone:"22509011587",
    phone:"22545188173"
  },
  {
    agent:"Messan",
    agency:"ETS HAMED ET FRERES",
    city:"TOUMODI",
    location:"QUARTIER MOSSIKRO, PRES DE LA MOSQUEE DES MOSSI",
    phone:"22546682828"
  },
  {
    agent:"Messan",
    agency:"LEADERS CHRIST",
    city:"MORONOU",
    location:"ROUTE DE PKOUEBO A 300 M DU CARREFOUR",
    phone:"22544242426",
    phone:"22547044535"
  },
  {
    agent:"Messan",
    agency:"SEAD GROUP",
    city:"RIVIERA PALMERAIE",
    location:"RIVIERA PALMERAIE  FACE A SACRE CŒUR VOIE ROND POINT ADO",
    phone:"22555846436"
  },
  {
    agent:"Messan",
    agency:"SEAD GROUP",
    city:"ABIDJAN PALMERAIE",
    location:"RIVIERA PALMERAIE  FACE A SACRE CŒUR VOIE ROND POINT ADO",
    phone:"22555846436"
  },
  {
    agent:"Messan",
    agency:"ETABLISSEMENT KN",
    city:"BONOUA",
    location:"quartier Bronoukro en Face de l' église Harriste.",
    phone:22549215886
  },
  {
    agent:"Messan",
    agency:"E FORC",
    city:"RIVIERA ABATA",
    location:"QUARTIER EPHRATA , FACE AU CENTRE DE SANTE ST JOSEP",
    phone:"22509162027",
    phone:"22557419676"
  },
  {
    agent:"Messan",
    agency:"DIMBOKRO",
    city:"EZOLINE IMMOBILIERE",
    location:"QUARTIER COMMERCE PRES DE LA SITAB",
    phone:22557278085
  },
  {
    agent:"Messan",
    agency:"DIMBOKRO",
    city:"EDEN SERVICES",
    location:"FACE A LA POSTE DE COTE D'IVOIRE",
    phone:"22589432949"
  },
  {
    agent:"Messan",
    agency:"ARRAH",
    city:"KS SERVICES",
    location:"PRES DE LA COOPEC VOIE DE LA GENDARMERIE",
    phone:22557570657,
    phone:22541124897
  },
  {
    agent:"Messan",
    agency:"RIVIERA M'BADON",
    city:"ESPACE BK COMMUNCATION",
    location:"APRES L'EGLISE ARRISH , RUE ARRISH",
    phone:22509606474,
    phone:22558347037
  },
  {
    agent:"Messan",
    agency:"YAKASSE ATTOBROU",
    city:"SIDI SERVICES",
    location:"FACE A L'ESPACE LAURENT GBAGBO",
    phone:22586194794
  },
  {
    agent:"Messan",
    agency:"ISRAEL BOUTIQUE",
    city:"YOPOUGON Lievre rouge",
    location:"carrefour lièvre reouge près face au marche Bagnon point canal +",
    phone:"22508559742"
  },
  {
    agent:"Messan",
    agency:"ISRAEL BOUTIQUE",
    city:"YOPOUGON Kilomètre 17",
    location:"route de Dabou KLM 17 près de l'eglise MIEGA",
    phone:"22509671107"
  },
  {
    agent:"Messan",
    agency:"SIDI SERVICES",
    city:"YAKASSE ATTOBROU",
    location:"FACE AU STADE GBAGBO",
    phone:22586194794,
    phone:22548016839
  },
  {
    agent:"Messan",
    agency:"SOCIDIS-CI",
    city:"ADJAME LIBERTE",
    location:"Rond point du feu près de la cité universitaire route Agban",
    phone:22558905246,
    phone:22557245700
  },
  {
    agent:"Messan",
    agency:"LOUGUE SERVICES",
    city:"DAOUKRO",
    location:"MARCHE FACE A LA POISSONERIE LOUKOU",
    phone:22557835666,
    phone:22506296807
  },
  {
    agent:"Messan",
    agency:"RAMDE SERVICES",
    city:"DAOUKRO",
    location:"MARCHE FACE A LA COOPEC",
    phone:"22544443096"
  },
  {
    agent:"Messan",
    agency:"PROSPERITY",
    city:"GRAND BASSAM",
    location:"FACE AU ROND POINT DE LA LIBERTE",
    phone:"22503593769"
  },
  {
    agent:"Messan",
    agency:"ELISHEVA SERVICES",
    city:"RIVIERA FAYA",
    location:"NON LOIN DU MARCHE D'AKOUEDO PRES DE LA RESIDENCE ABIBATOU",
    phone:"22509094529"
  },
  {
    agent:"Messan",
    agency:"INOV 7 MULTISERVICES",
    city:"YOPOUGON SIPOREX",
    location:"AU SEIN DE GARE SIPOREX FACE A LA GARE UTB",
    phone:22588760582,
    phone:22556012573
  },
  {
    agent:"Messan",
    agency:"LA REVERENCE MONEY",
    city:"ADIAKE",
    location:"AU MARCHE FACE AU CHÂTEAU D'EAU PRES DE LA COOPEC",
    phone:"22508611336"
  },
  {
    agent:"Messan",
    agency:"SANDWIDI SERVICE",
    city:"BONOUA",
    location:"CARREFOUR A GAUCHE APRES LE ROND GRAND ROND POINT",
    phone:22541552872,
    phone:22508310202
  },
  {
    agent:"Messan",
    agency:"KI MULTISERVICES",
    city:"II PLATEAUX SOCOCE",
    location:"ANCIEN MARCHE NON LOIN DE LA PHARMACIE LE ROCHER",
    phone:22507060024,
    phone:22505647972
  },
  {
    agent:"Messan",
    agency:"TO AFEDIKO Transfert",
    city:"TREICHVILLE",
    location:"ARRAS 4 avenue 24 rue 24 derrière la mosquée",
    phone:22547716357,
    phone:22509405602
  },
  {
    agent:"Messan",
    agency:"TITAN CORPORATION",
    city:"TREICHVILLE MARCHE",
    location:"AU MARCHE; PRES DE LA MAIRIE, AU 2eme ETAGE",
    phone:"22547928376"
  },
  {
    agent:"Messan",
    agency:"AGAGIS SERVICES",
    city:"GONZAGUEVILLE",
    location:"APRES LE CORRIDOR",
    phone:22577397777,
    phone:22549163182
  },
  {
    agent:"Messan",
    agency:"PERFECT AGENCE",
    city:"ANGRE CHÂTEAU",
    location:"ANGRE CHÂTEAU FIN GOUDRON DERRIERE LAVOISIER",
    phone:22508839644,
    phone:22508698884
  },
  {
    agent:"Messan",
    agency:"ETS OUYA",
    city:"YOPOUGON SAINT ANDRE",
    location:"LAVAGE FACE A LA PHAMARCIE DU LAVAGE",
    phone:22558756920,
    phone:22507075244
  },
  {
    agent:"Messan",
    agency:"SAVANA SERVICES",
    city:"DIDIEVI",
    location:"NON LOIN DE LA GARE , FACE A LA PHARMACIE SAINT PAUL",
    phone:22509736245,
    phone:22508217121
  },
  {
    agent:"Messan",
    agency:"BINKA GIE",
    city:"PORT BOUET CENTRE",
    location:"AU SEIN DU CENTRE COMMERCIAL , FACE A LA MAIRIE",
    phone:"22555387145"
  },
  {
    agent:"Messan",
    agency:"YEMBONE SERVICES INTER",
    city:"PORT BOUET PHARE",
    location:"DERRIERE WHARF , CARREFOUR AEROPORT ALIGNEMENT DU 33ème ARRONDISSEMENT",
    phone:"22557743250"
  },
  {
    agent:"Messan",
    agency:"FICOGERE",
    city:"KOUMASSI ST ETIENNE",
    location:"PRES DE L'ECOLE SAINT ETIENNE",
    phone:"22579163841"
  },
  {
    agent:"Messan",
    agency:"AFRICISIKKA",
    city:"ANGRE 8ème TRANCHE",
    location:"Immeuble Maiko, Angré 8eme tranche, Cocody, Abidjan",
    phone:22508494649,
    phone:"22508366797//22507873725"
  },
  {
    agent:"Messan",
    agency:"GFM",
    city:"MARCORY HOPITAL",
    location:"PRES DE L'ENTREE DE L'ECOLE PRIMAIRE MEA KOUADIO APRES L'HOPITAL",
    phone:22507326796
  },
  {
    agent:"Messan",
    agency:"ETS AGBODJI ET CIE",
    city:"GONZAGUEVILLE",
    location:"GONZAGUEVILLE CARREFOUR I2T USINE",
    phone:22589976218,
    phone:22559694023
  },
  {
    agent:"Messan",
    agency:"CPS SAVEUR PRODUCTION",
    city:"YOPOUGON ASSONVON",
    location:"YOPOUGON ASSONVON PRES DE LA STATION PETROCI",
    phone:22556850885,
    phone:22523468612
  },
  {
    agent:"Messan",
    agency:"CPS EDEN PRESTIGE",
    city:"MARCORY RESIDENTIEL",
    location:"MARCORY RESIDENTIEL FACE A LA STATION TOTAL",
    phone:22589562128,
    phone:22509580611
  },
  {
    agent:"Messan",
    agency:"CPS ASSANA IMPRIM",
    city:"PORT BOUET CENTRE",
    location:"PORT BOUET CENTRE FACE A LA PHARMACIE BETHEL / CITE POLICIERE",
    phone:22547764244,
    phone:22521276127
  },
  {
    agent:"Messan",
    agency:"CPS EKA GROUP",
    city:"YOPOUGON ANANERAIE",
    location:"YOPOUGON ANNANERAIE CARR COOPEC FACE A L'IMM CITE DU BONHEUR",
    phone:"2257850535"
  },
  {
    agent:"Messan",
    city:"II PLATEAUX VALLON",
    location:"II PLATEAUX FACE AU 12 ARRONDISSEMENT",
    agency:"CPS ONE MART"
  },
  {
    agent:"Messan",
    agency:"AFRICSIKKA-BMI",
    city:"YOPOUGON SELMER",
    location:"PRES DU MARCHE , FACE A LA PHCIE AWALE",
    phone:22558297202,
    phone:"22547 18 08 12"
  },
  {
    agent:"Messan",
    agency:"AFRICSIKKA- ETS SHEKILAND",
    city:"RIVIERA II",
    location:"SAINTE FAMILLE , FACE A L'IMMEUBLE ALPHA BLONDY FM",
    phone:22555798696,
    phone:22540015383
  },
  {
    agent:"Messan",
    agency:"AFRICSIKKA-EST BALCK HOUSE",
    city:"GONZAGUEVILLE",
    location:"GONZAGUEVILLE CARREFOUR HABRAHAM AU SEIN DU MARCHE Français",
    phone:22579428458
  },
  {
    agent:"Messan",
    agency:"AFRICSIKKA- AYAEL ENTREPRISE",
    city:"II PLATEAU",
    location:"VGE CARREFOUR SONATT FACE A LA PHARMACIE SAINT GRABRIEL",
    phone:22507178033
  },
  {
    agent:"Messan",
    agency:"AFRICSIKKA-NG COMMUNICATION",
    city:"ANYAMA",
    location:"QUARTIER BELLE VILLE",
    phone:22507957690,
    phone:22505179972
  },

  // Marcel agent 

  {
    agent:"Marcel",
    agency:"GANAME ET FRERES",
    city:"BAGOLIEOUA",
    location:"A COTE DE L'AGENCE ORANGE MONEY",
    phone:22504195119
  },
  {
    agent:"Marcel",
    agency:"TEGAWENDE FINANCES",
    city:"BAKAYO",
    location:"LA MAISON BLANCHE DE BAKAYO",
    phone:22545974469
  },
  {
    agent:"Marcel",
    agency:"ISMO FINANCES",
    city:"BELLE VILLE",
    location:"A COTE DU MARCHE DE BELLEVILLE",
    phone:22554861358
  },
  {
    agent:"Marcel",
    agency:"AO SERVICES",
    city:"DJAPAGUI",
    location:"A LA DESCENTE DU MARCHE A COTE DE LA PHARMACIE DE DJAPAGUI",
    phone:22505542366
  },
  {
    agent:"Marcel",
    agency:"EBENEZ",
    city:"DJOUROUTOU",
    location:"A LA GARE DE DJOUROUTOU",
    phone:22505564374
  },
  {
    agent:"Marcel",
    agency:"LANTA TELECOM",
    city:"DOBA",
    location:"EN FACE DE L'ECOLE PRIMAIRE DE DOBA",
    phone:22505542366
  },
  {
    agent:"Marcel",
    agency:"ESPOIR SERVICE",
    city:"DOBRE",
    location:"AVANT LE MARCHE DE DOBRE",
    phone:22575100695
  },
  {
    agent:"Marcel",
    agency:"MAGNIFICA TOUMAN",
    city:"GABIADJI",
    location:"ENTRE LES STATION VINKO ET ANDA",
    phone:22506424584
  },
  {
    agent:"Marcel",
    agency:"ISMO FINANCES",
    city:"GLIBEAGUI",
    location:"EN FACE DU MARCHE MAGASIN ISMO",
    phone:22545064640
  },
  {
    agent:"Marcel",
    agency:"EBENEZ FINANCE",
    city:"GNATO",
    location:"AU MARCHE",
    phone:22505564374
  },
  {
    agent:"Marcel",
    agency:"YED SERVICES",
    city:"GNIPI CARRIERE 2",
    location:"SITUE A COTE DU MARCHE",
    phone:22506340253
  },
  {
    agent:"Marcel",
    agency:"SOPIE SERVICE",
    city:"GNOGBOYO",
    location:"AU SEIN DE L'ASSURANCE DE GNOGBOYO",
    phone:22575143252
  },
  {
    agent:"Marcel",
    agency:"MUTRA",
    city:"GRABO",
    location:"QUARTIER PLATEAU, FACE A LA MAISON SG DE LA MAIRIE",
    phone:22504195119
  },
  {
    agent:"Marcel",
    agency:"DN SERVICES",
    city:"GRAND BEREBY",
    location:"EN FACE DE LA MAIRIE  Après LE LABORATOIRE DE PHOTO",
    phone:22504198850
  },
  {
    agent:"Marcel",
    agency:"ETS TANSSEMBEDO",
    city:"GRAND ZATRY",
    location:"CARREFOUR INOUSSA AU QUARTIER DIOULABOUGOU",
    phone:22504194361
  },
  {
    agent:"Marcel",
    agency:"SEND CENTER",
    city:"KANGAGUI",
    location:"AU MARCHE PRES DE LA BOUTIQUE DE DIALLO",
    phone:22549595212
  },
  {
    agent:"Marcel",
    agency:"Y NOV",
    city:"LESSIRY",
    location:"SUR LA GRANDE VOIE, APRES LE MARCHE, AU CARREFOUR CHÂTEAU",
    phone:22554747457
  },
  {
    agent:"Marcel",
    agency:"SAINT ESPRIT SERVICE",
    city:"MEAGUI",
    location:"SITUE A L'OCPV DERRIERE LA GARE UTB",
    phone:22504295884
  },
  {
    agent:"Marcel",
    agency:"ELOIKA SERVICE",
    city:"MOUSSADOUGOU",
    location:"A 100 METRES DE LA PHARMACIE",
    phone:22554799244
  },
  {
    agent:"Marcel",
    agency:"YED SERVICES",
    city:"NANDO( 26 KM DE SAN PEDRO)",
    location:"A L'ENTRÉE DE NANDO",
    phone:22546018697
  },
  {
    agent:"Marcel",
    agency:"GRACE FINANCES",
    city:"OUPOYO",
    location:"SITUE A COTE DE LA SOUS PREFECTURE DE OUPOYO",
    phone:"22506340136",
    phone:"22508199699"
  },
  {
    agent:"Marcel",
    agency:"SEND CENTER",
    city:"PETIT TIEME",
    location:"A L'ENTRÉE A 50 M DU MAGASIN DE COLA",
    phone:22504037346
  },
  {
    agent:"Marcel",
    agency:"TDPF",
    city:"SANKARAKOUADIOKRO",
    location:"A COTE DE LA PHARMACIE SAINTE DELPHINE",
    phone:22505544712
  },
  {
    A:24,
    agency:"INCH'ALLAH",
    city:"SIPEF CI",
    location:"A LA GARE DE OTTAWA SIPEFCI",
    phone:22504240179
  },
  {
    agent:"Marcel",
    agency:"QUICKCASH SOUBRE",
    city:"SOUBRE",
    location:"RUE DES BANQUES AU COMMERCE",
    phone:22504295604
  },
  {
    agent:"Marcel",
    agency:"DN SERVICES",
    city:"TABOU",
    location:"SITUE A LA GARE DE GRABO, PRES DE L'AGENCE FST",
    phone:22506616043
  },
  {
    agent:"Marcel",
    agency:"ISMO FINANCES",
    city:"YABAYO",
    location:"SITUE EN FACE DE LA STATION OILIBYA DE YABAYO",
    phone:22504294643
  },
  {
    agent:"Marcel",
    agency:"KB SERVICE",
    city:"OUSSOUKRO",
    location:"AU MARCHE DE OUSSOUKRO",
    phone:22546095065
  },
  {
    agent:"Marcel",
    agency:"WENKOUMI FINANCES",
    city:"DOGBO",
    location:"SITUE A COTE DU MAGASIN DE BEBE",
    phone:22505564374
  },
  {
    agent:"Marcel",
    agency:"EBENEZ FINANCE",
    city:"PARA",
    location:"A LA GARE",
    phone:22505564374
  },
  {
    agent:"Marcel",
    agency:"EMMANUELA SERVICE",
    city:"NEKA",
    location:"ENTRE LE MAQUIS MOLO MOLO ET KONATE,A L'ENTREE DE LA GARE",
    phone:"22575154025",
    phone:"22575851072"
  },
  {
    agent:"Marcel",
    agency:"WENKOUMI FINANCES",
    city:"WATTE",
    location:"EN FACE DU MARCHE  DE WATTE",
    phone:22555406040
  },
  {
    agent:"Marcel",
    agency:"KB SERVICE",
    city:"LOBAKOUYA",
    location:"AU MARCHE",
    phone:22546095065
  },
  {
    agent:"Marcel",
    agency:"AS SERVICES",
    city:"PETIT GOA 2",
    location:"AU MARCHE DE PETIT GOA",
    phone:22508300931
  },
  {
    agent:"Marcel",
    agency:"ILBOUDO SERVICE",
    city:"DAPEOUA",
    location:"A LA GARE DE DAPEOUA A LA BOUTIQUE DE MOUMOUNI",
    phone:22504053193
  },
  {
    agent:"Marcel",
    agency:"GAMSORE SERVICE",
    city:"SAHOUA",
    location:"PRES DE LA PHARMACIE BALDE DE SAHOUA",
    phone:22555247313
  },
  {
    agent:"Marcel",
    agency:"BD FINANCES",
    city:"MEADJI",
    location:"20 M DE LA COOPEC DE MEADJI",
    phone:22575851072
  },
  {
    A:38,
    agency:"DR COM SERVICE",
    city:"MENEKE",
    location:"A L'ENTREE DU MARCHE DE MENEKE",
    phone:22546759397
  },
  {
    agent:"Marcel",
    agency:"INCH'ALLAH",
    city:"MEADJI",
    location:"EN FACE DE LA GARE UTB DE MEADJI",
    phone:22504240154
  },
  {
    agent:"Marcel",
    agency:"BENEWINDE FINANCE",
    city:"GRAND BEREBY",
    location:"CARREFOUR BEREBY SUR L AXE TABOU;FACE DE L ANCIEN CORRIDOR",
    phone:22540407763
  },
  {
    agent:"Marcel",
    agency:"ETS MOUSSA",
    city:"IBOKE",
    location:"A L ENTREE DU VILLAGE DE IBOKE(agence orange Money)",
    phone:22508954286
  },
  {
    agent:"Marcel",
    agency:"SAFI FINANCES",
    city:"TABOU",
    location:"100 M A GAUCHE APRES LA CNCE DE TABOU EN ALLANT AU MARCHE,",
    phone:22571001824
  },
  {
    agent:"Marcel",
    agency:"SAFI FINANCES",
    city:"OLODIO",
    location:"AU MARCHE DE OLODIO",
    phone:22571001824
  },
  {
    agent:"Marcel",
    agency:"CELINE FINANCE",
    city:"TOUIH",
    location:"AU SEIN DU BUREAU CONSULAIRE BFASO DE TOUIH",
    phone:22506961155
  },
  {
    agent:"Marcel",
    agency:"CELINE FINANCE",
    city:"DAGAGUI",
    location:"A LA GRANDE GARE DE DAGAGUI",
    phone:22506961155
  },
  {
    agent:"Marcel",
    agency:"OUED SERVICE",
    city:"ZAKEOUA",
    location:"AU SEIN DE L AGENCE ORANGE MONEY",
    phone:22505724738
  },
  {
    agent:"Marcel",
    agency:"AMOUR SERVICE",
    city:"OKROUYO",
    location:"EN FACE DE LA PHARMACIE D'OKROUYO",
    phone:22504036652
  },
  {
    agent:"Marcel",
    agency:"YABRE SERVICE",
    city:"LAZOUA",
    location:"AU MARCHE DE LAZOUA",
    phone:22506522550
  },
  {
    agent:"Marcel",
    agency:"BD FINANCES",
    city:"PROGREAGUI",
    location:"30 M DE LA GRANDE MOSQUEE DE PROGREAGUI",
    phone:22505802249
  },
  {
    agent:"Marcel",
    agency:"MAGNIFICA TOUMAN",
    city:"RAPIDE GRAH/GAGNY",
    location:"AU MARCHE DE GAGNY",
    phone:22546018690
  },
  {
    agent:"Marcel",
    agency:"DIVINE PROVIDENCE",
    city:"RAPIDE GRAH/GAGNY",
    location:"AU MARCHE DE GAGNY",
    phone:22505240694
  },
  {
    agent:"Marcel",
    agency:"RB FINANCES",
    city:"DJAPAGUI",
    location:"A LA SORTIE DE DJAPAGUI",
    phone:22575805640
  },
  {
    agent:"Marcel",
    agency:"SANFO SERVICES",
    city:"BANDIKRO",
    location:"PRES DU DELEGUE CONSULAIRE",
    phone:"22575241358",
    phone:"22505542610"
  },
  {
    agent:"Marcel",
    agency:"BAGRE SERVICE",
    city:"PETIT OUAGA",
    location:"A LA GARE DE PETIT OUAGA",
    phone:22504083056
  },
  {
    agent:"Marcel",
    agency:"ABDOULFINANCES",
    city:"KONEDOUGOU",
    location:"A LA BOUTIQUE DE SALAM OUEDRAOGO",
    phone:22578978149
  },
  {
    agent:"Marcel",
    agency:"SOCATOB",
    city:"GABIADJI",
    location:"A LA COOPERATIVE SOCATOB VERS L EGLISE CATHOLIQUE",
    phone:22576335419
  },
  {
    agent:"Marcel",
    agency:"SOCATOB",
    city:"KPOTE",
    location:"AU SEIN DU MAGASIN DE STOCKAGE DE LA COOPERATIVE",
    phone:22576335419
  },
  {
    agent:"Marcel",
    agency:"ETS GUEBRE ET FRERES",
    city:"IBOKE",
    location:"AU MARCHE D'IBOKE PRES DE LA BOUTIQUE DES MAURITANIENS",
    phone:"22509211649",
    phone:"22508643895"
  },
  {
    agent:"Marcel",
    agency:"ETS KABORE",
    city:"SAN PEDRO",
    location:"AU BARDOT Ex Agence Quickcash,20 m d'ECOOBANK BARDOT",
    phone:22504098151
  },
  {
    agent:"Marcel",
    agency:"LINDA SHOP",
    city:"SOUBRE",
    location:"RUE DES BANQUES AU COMMERCE,20 m DE NSIA en allant au commissariat",
    phone:22508354389
  },
  {
    agent:"Marcel",
    agency:"ENTREPRISE URIEL",
    city:"SOUBRE",
    location:"CARREFOUR DU GRAND MARCHE DE SOUBRE",
    phone:22508555941
  },
  {
    agent:"Marcel",
    agency:"DIVINE CENTER",
    city:"SOUBRE",
    location:"QUARTIER MADOU SAHOUA,20 m DE L ECOLE LIBANAISE",
    phone:22505265756
  },
  {
    agent:"Marcel",
    agency:"KRAGUI ANOKRO",
    city:"AKORA COMMUNICATION",
    location:"EN FACE DE LA GRANDE MOSQUEE D'ANOKRO",
    phone:"22557053025",
    phone:"22507915158/22577848624"
  },
  {
    agent:"Marcel",
    agency:"ETS KS&CO",
    city:"SOUBRE",
    location:"QUARTIER KENEDY,JUSTE DERRIERE LA SONATT",
    phone:22504042214
  },
  {
    agent:"Marcel",
    agency:"SANOU TRANSFERT",
    city:"BUYO",
    location:"20M DE LA STATION PETRO IVOIRE DE BUYO",
    phone:22547059951
  },
  {
    agent:"Marcel",
    agency:"KABORE SERVICE",
    city:"MEAGUI",
    location:"RUE DES BANQUES,ENTRE LA SIB ET ECOOBANK",
    phone:22509276350
  },
  {
    agent:"Marcel",
    agency:"OUATTA SERVICE",
    city:"MEAGUI",
    location:"QUARTIER COMMERCE,EN FACE DU MAGASIN NASCO",
    phone:22509276350
  },
  {
    agent:"Marcel",
    agency:"KB TELECOM",
    city:"MEAGUI",
    location:"QUARTIER NETRO,PRES DU TERRAIN KHALIFA",
    phone:22507154265
  },
  {
    agent:"Marcel",
    agency:"EL SHADDAI FINANCES",
    city:"MEAGUI",
    location:"PRES DE LA CNCE DE MEAGUI",
    phone:22505802249
  },
  {
    agent:"Marcel",
    agency:"ABC",
    city:"MEAGUI",
    location:"ENTRE LA PHARMACIE DU MARCHE ET LA MOSQUEE CEDEAO",
    phone:22507462195
  },
  {
    agent:"Marcel",
    agency:"DM SERVICE",
    city:"MEAGUI",
    location:"EN FACE DE LA STATION SHELL MEAGUI",
    phone:22507790872
  },
  {
    agent:"Marcel",
    agency:"ISMO FINANCES",
    city:"DAKPADOU",
    location:"A LA GARE DE DAKPADOU,PRES DU DEPOT DE PHARMACIE",
    phone:22545064640
  },
  {
    agent:"Marcel",
    agency:"AOF",
    city:"SAN PEDRO",
    location:"QUARTIER JB,PRES DU MARCHE KABLAN",
    phone:22544097716
  },
  {
    agent:"Marcel",
    agency:"PORGO SERVICE",
    city:"BUYO V16",
    location:"A LA GARE DE BUYO V16",
    phone:22557496103
  },
  {
    agent:"Marcel",
    agency:"SAWADOGO SERVICE",
    city:"TANOKRO",
    location:"A LA GARE DE TANOKRO",
    phone:22509861415
  },
  {
    agent:"Marcel",
    agency:"NASSE FINANCES",
    city:"OUSSOUKRO",
    location:"A LA GARE DE OUSSOUKRO",
    phone:22548703592
  },
  {
    agent:"Marcel",
    agency:"ISSOUF SERVICE",
    city:"GNATO",
    location:"AU MARCHE DE GNATO",
    phone:22575486404
  },
  {
    agent:"Marcel",
    agency:"NK TELECOM",
    city:"BUYO",
    location:"EN FACE DE LA CNCE DE BUYO",
    phone:22508853021
  },
  {
    agent:"Marcel",
    agency:"NK TELECOM",
    city:"BUYO MARCHE",
    location:"15 M DE L ANCIEN MARCHE DE POISSON",
    phone:22507666126
  },
  {
    agent:"Marcel",
    agency:"NK TELECOM",
    city:"SOUBRE",
    location:"AU CARREFOUR GRAND MARCHE 15 M DE PHARMACIE IMMACULEE",
    phone:22577053300
  },
  {
    agent:"Marcel",
    agency:"NK TELECOM",
    city:"MEAGUI",
    location:"A L ENTREE DE LA GARE DES MASSA DE MEAGUI VENANT DE SOUBRE",
    phone:22559078797
  },
  {
    agent:"Marcel",
    agency:"NK TELECOM",
    city:"ISSIA",
    location:"EN FACE DU GARAGE DIGNAGO PRES DU MAQUIS CACAO",
    phone:22577105110
  },
  {
    agent:"Marcel",
    agency:"ETS OZ",
    city:"DJAPAGUI",
    location:"MARCHE DE DJAPAGUI",
    phone:22507637389
  },
  {
    agent:"Marcel",
    agency:"SCOOP-PNS",
    city:"MEAGUI",
    location:"REZ DE CHAUSSE DE L'IMMEUBLE DE LA PHARMACIE DU MARCHE",
    phone:22507790872
  },
  {
    agent:"Marcel",
    agency:"BAGRE SERVICE",
    city:"SOUBRE",
    location:"EN FACE DE LA SONATT/SICTA",
    phone:22504083056
  },
  {
    agent:"Marcel",
    agency:"WINDINGOUDE FINANCES",
    city:"WATTE",
    location:"PRES DE LA PHARMACIE DE WATTE",
    phone:22555406040
  },
  {
    agent:"Marcel",
    agency:"AMOUR SERVICE",
    city:"GNOGBOYO",
    location:"GARE DE GNOBOYO",
    phone:22509281911
  },
  {
    agent:"Marcel",
    agency:"AO SERVICES",
    city:"DOBA",
    location:"MARCHE DE DOBA",
    phone:22504237204
  },
  {
    agent:"Marcel",
    agency:"YAO SERVICE",
    city:"PROGREAGUI"
  },
  {
    agent:"Marcel",
    agency:"G2A FINANCES",
    city:"MEADJI",
    location:"Pres de l'agence NSIA assurance de Meadji",
    phone:22578732839
  },
  {
    agent:"Marcel",
    agency:"G2A FINANCES",
    city:"SOUBRE",
    location:"au grand marche de soubre,immeuble en face du marche de poulet",
    phone:22571125968
  },
  {
    agent:"Marcel",
    agency:"G2A FINANCES",
    city:"BUYO",
    location:"A la rue des banques de buyo,10 m de la coopec",
    phone:22553156015
  },
  {
    agent:"Marcel",
    agency:"G2A FINANCES",
    city:"BAKAYO",
    location:"Voie principale en allant au grand marché de bakayo",
    phone:22551028906
  },
  {
    agent:"Marcel",
    agency:"BROU FINANCES",
    city:"WALLEBO",
    location:"AU MARCHE,A L'AGENCE ORANGE MONEY DE WALLEBO",
    phone:22544086758
  },
  {
    agent:"Marcel",
    agency:"TAHIROU COMMUNICATION",
    city:"SAFA CARREFOUR",
    location:"GARE DE TAXI BROUSSE DE SAFA CARREFOUR",
    phone:"22508303172",
    phone:"22509508699"
  },
  {
    agent:"Marcel",
    agency:"SANKARA COMMUNICATION",
    city:"SOUBRE VILLE",
    location:"GRANDE GARE DE SOUBRE,DEVANT EX GARE MANGALLA,20 M GARE ALINO",
    phone:22501940101
  },
  {
    agent:"Marcel",
    agency:"AFricsikka-Eden Pluriel",
    city:"San Pedro Lac Pavé",
    location:"Au quartier lac, juste à l’entrée de lac pavé en face des feux tricolores.",
    phone:22554606826
  },
  {
    agent:"Marcel",
    agency:"AFricsikka-Eden Pluriel",
    city:"San Pedro Bardot",
    location:"Au bardot 18,carrefour du dispensaire et du commissariat du quartier badot",
    phone:22556406256
  },
  {
    agent:"Marcel",
    agency:"AFricsikka-Eden Pluriel",
    city:"San Pedro Marché",
    location:"Au marché,15 m du magasin King Cash semi gros. Ex Local de Adiscom communication",
    phone:22546018850
  },
//  Ziega 

  {
    agent:"ZIEGA",
    agency:"NOURA FINANCE",
    city:"SASSANDRA",
    location:"NON LOIN DU COMMISSARIAT",
    phone:"22548208522"
  },
  {
    agent:"ZIEGA",
    agency:"AMBRO DISTRIBUTION",
    city:"ALPHONSEKRO",
    location:"AU MARCHE",
    phone:22555385177
  },
  {
    agent:"ZIEGA",
    agency:"ESPOIR SERVICES",
    city:"DABOUYO",
    location:"ROUTE PRINCIPALE NON LOIN DE LA GARE",
    phone:22576866947
  },
  {
    agent:"ZIEGA",
    agency:"ELLE SERVICE",
    city:"BONON",
    location:"ROUTE DALOA, CARREFOUR CIE",
    phone:"22554374349"
  },
  {
    agent:"ZIEGA",
    agency:"ALLIANCE SERVICES",
    city:"DIEGONEFLA",
    location:"EN FACE DE LA POSTE DE DIEGONEFLA, ROUTE OUME",
    phone:22546019231
  },
  {
    agent:"ZIEGA",
    agency:"ELLE SERVICE",
    city:"DIGNANGO",
    location:"EN FACE DE L'ANCIEN BUREAU DE POSTE",
    phone:22504009604
  },
  {
    agent:"ZIEGA",
    agency:"GRACE DISTRIBUTION",
    city:"FRESCO",
    location:"EN FACE DE LA PHARMACIE DE FRESCO AU QUARTIER COMMERCE",
    phone:22505934595
  },
  {
    agent:"ZIEGA",
    agency:"LA SOURCE DISTRIBUTION",
    city:"GBAGBAM",
    location:"EN FACE DE LA POISSONNERIE DOSSO, NON LOIN DE L'EPP",
    phone:"22504188300",
    phone:"22509635757"
  },
  {
    agent:"ZIEGA",
    agency:"WENDKOUNI FINANCES",
    city:"GNAPIDOU",
    location:"CARREFOUR BADJAN, PRES DE MTN MONEY",
    phone:22506614967
  },
  {
    agent:"ZIEGA",
    agency:"COMPAORE DISTRIBUTION",
    city:"GNAPIDOU",
    location:"A LA GARE DANS LE STUDIO PHOTO MADY",
    phone:22509385073
  },
  {
    agent:"ZIEGA",
    agency:"WENDKOUNI FINANCES",
    city:"GUEYO",
    location:"A COTE DU NOUVEAU MARCHE DE GUEYO, DOMICILE DU DELEGUE BF",
    phone:22504293558
  },
  {
    agent:"ZIEGA",
    agency:"ELLE SERVICE",
    city:"GUIBEROUA",
    location:"GUIBEROUA, ROUTE DIGNANGO, CARREFOUR GENDARMERIE, PRES DU MAQUIS CHOCCO",
    phone:22504064559
  },
  {
    agent:"ZIEGA",
    agency:"AMBRO DISTRIBUTION",
    city:"MEDON, sassandra",
    location:"EN FACE DE L'ECOLE PRIMAIRE PUBLIQUE",
    phone:22555385177
  },
  {
    agent:"ZIEGA",
    agency:"ABIGAEL FINANCES",
    city:"OURAGAHIO",
    location:"SITUE AU MARCHE DE OURAGAHIO, FACE A ORANGE MONEY",
    phone:22506616448
  },
  {
    agent:"ZIEGA",
    agency:"ENTREPRISE BOURO",
    city:"SASSANDRA",
    location:"SITUE SUR LA ROUTE DU MARCHE, PRES DU COMMISSARIAT DE POLICE",
    phone:"22576871501",
    phone:"22507553127"
  },
  {
    agent:"ZIEGA",
    agency:"GME FINANCES",
    city:"SERIYO",
    location:"NOUVEAU MARCHE",
    phone:22504000751
  },
  {
    agent:"ZIEGA",
    agency:"ETS LA SOURCE",
    city:"SINFRA",
    location:"CARREFOUR CNCE, PRES DE LA BOULANGERIE",
    phone:"22504064263",
    phone:"22508100853"
  },
  {
    agent:"ZIEGA",
    agency:"COMPAORE DISTRIBUTION",
    city:"DJAKOUAKOUKRO",
    location:"SITUE AU MARCHE",
    phone:22575225777
  },
  {
    agent:"ZIEGA",
    agency:"ZONGO SERVICE",
    city:"ADEBEM",
    location:"SITUE AU MARCHE",
    phone:22555193327
  },
  {
    agent:"ZIEGA",
    agency:"SAINTE MARIE",
    city:"LAKOTA",
    location:"SITUE NON LOIN DU ROND POINT DE LA STATION SHELL APRES LA SOUS PREFECTURE",
    phone:"22575225202",
    phone:"22546353703"
  },
  {
    agent:"ZIEGA",
    agency:"ZARA FINANCES",
    city:"DAKPADOU",
    location:"SITUE AU BUREAU DE DELEGUE BFASO",
    phone:22506109400
  },
  {
    agent:"ZIEGA",
    agency:"ETS AD",
    location:"MARCHE SUCRIVOIRE, EN FACE DE L'USINE",
    phone:"22555115591",
    phone:"22554554440",
  },
  {
    agent:"ZIEGA",
    agency:"O SERVICE PLUS",
    city:"DEMA",
    location:"EN FACE DE L'EPP 2",
    phone:"22575326447",
    phone:"22508878628"
  },
  {
    agent:"ZIEGA",
    agency:"PRESTIVOIRE",
    city:"ZUENOULA",
    location:"DERRIERE LA CNCE",
    phone:"22507722227",
    phone:"22501697476"
  },
  {
    agent:"ZIEGA",
    agency:"BETHEL SERVICE",
    city:"ZAGIETTA/BONON",
    location:"AU MARCHE",
    phone:"22555055436",
    phone:"22558686833"
  },
  {
    agent:"ZIEGA",
    agency:"COMPAORE DISTRIBUTION",
    city:"BALEKO",
    location:"GRAND CARREFOUR ROUTE GUEYO",
    phone:22545998204
  },
  {
    agent:"ZIEGA",
    agency:"HOLLY SERVICE",
    city:"YAMOUSSOUKRO",
    location:"QT DJOULAKRO, ROUTE FONDATION, FACE BOULANGERIE ROUGE",
    phone:"22554539292"
  },
  {
    agent:"ZIEGA",
    agency:"ISRAEL FINANCES",
    city:"DOUKOUYO",
    location:"MARCHE PRES DE LA BOUTIQUE",
    phone:22575132008
  },
  {
    agent:"ZIEGA",
    agency:"KABORE FINANCE",
    city:"GONATE",
    location:"MARCHE ROUTE DALOA",
    phone:22574334523
  },
  {
    agent:"ZIEGA",
    agency:"WENDPANGA FINANCE",
    city:"GOHIBLY",
    location:"MARCHE GOHIBLY",
    phone:"22506419070"
  },
  {
    agent:"ZIEGA",
    agency:"WENDPANGA FINANCE",
    city:"VAVOUA",
    location:"AU COMMERCE",
    phone:22506419070
  }
]

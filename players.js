

const players = [
    {
       
        id: 1,
        name: "Cristiano Ronaldo",
        images: ["ronaldo1.jpg", "ronaldo2.jpg", "ronaldo3.jpg", "ronaldo4.jpg", "ronaldo5.jpg"],
        info: "Cristiano Ronaldo is a Portuguese professional footballer, widely regarded as one of the greatest players of all time. He plays as a forward and is known for his incredible speed, strength, heading ability, dribbling, and goal-scoring prowess. \n\nClubs: Sporting CP (Portugal), Manchester United (England), Real Madrid (Spain), Juventus (Italy), Al Nassr (Saudi Arabia).\nInternational: Portugal National Team, UEFA European Championship winner 2016, UEFA Nations League winner 2019.\nAwards: 5× Ballon d'Or, multiple Golden Boots, FIFA World Player awards.\nStrengths: Scoring, finishing, leadership, free kicks, aerial ability.\nSpeed: Exceptional acceleration and sprinting.\n\nكريستيانو رونالدو هو لاعب كرة قدم برتغالي يُعتبر من أعظم اللاعبين في التاريخ. يلعب كمهاجم ويشتهر بسرعته الهائلة، قوته البدنية، قدرته على اللعب بالرأس، مهارات المراوغة، ومهاراته في تسجيل الأهداف.\nالأندية: سبورتينغ لشبونة (البرتغال)، مانشستر يونايتد (إنجلترا)، ريال مدريد (إسبانيا)، يوفنتوس (إيطاليا)، النصر (السعودية).\nالمنتخب: منتخب البرتغال، بطل يورو 2016، بطل دوري الأمم الأوروبية 2019.\nالجوائز: 5× الكرة الذهبية، الحذاء الذهبي، جوائز أفضل لاعب في العالم.\nالمهارات: تسجيل الأهداف، التسديد، القيادة، الركلات الحرة، اللعب الهوائي.\nالسرعة: تسارع ورشاقة استثنائية."
    },
    {
          id: 2,
          name: "Lionel Messi",
          images: ["messi1.jpg", "messi2.jpg", "messi3.jpg", "messi4.jpg", "messi5.jpg"],
          info: "Lionel Messi is an Argentine forward, considered one of the greatest players ever. Famous for dribbling, vision, passing, and finishing.Clubs: Barcelona → PSG → Inter Miami.International: Argentina National Team, Copa America 2021 Winner, FIFA World Cup 2022 Winner.Awards: 7× Ballon d'Or, multiple Golden Shoes, FIFA World Player awards.Strengths: Dribbling, playmaking, finishing, free kicks.Speed: Quick acceleration and agility.ليونيل ميسي هو مهاجم أرجنتيني يُعتبر من أعظم اللاعبين على الإطلاق. مشهور بالمراوغة، الرؤية، التمريرات، والتسجيل.الأندية: برشلونة → باريس سان جيرمان → إنتر ميامي.المنتخب: منتخب الأرجنتين، بطل كوبا أمريكا 2021، بطل كأس العالم 2022.الجوائز: 7× الكرة الذهبية، عدة جوائز الحذاء الذهبي، جوائز أفضل لاعب في العالم.المهارات: المراوغة، صناعة اللعب، التسجيل، الركلات الحرة.السرعة: تسارع ممتاز ومرونة عالية."


     
    },
    {
        id: 3,
        name: "Neymar",
        images: ["neymar1.jpg", "neymar2.jpg", "neymar3.jpg", "neymar4.jpg", "neymar5.jpg"],
        info: "Neymar Jr is a Brazilian forward who played for Santos, Barcelona, PSG, and currently Al Hilal. Known for his flair, creativity, and dribbling skills, Neymar is a key figure in Brazilian football and has been part of several major international tournaments.\nنيمار جونيور هو مهاجم برازيلي لعب لسانتوس وبرشلونة وباريس سان جيرمان وحاليًا الهلال. معروف بأسلوبه المميز وابداعه ومهاراته في المراوغة، ويعتبر شخصية أساسية في كرة القدم البرازيلية وقد شارك في العديد من البطولات الدولية الكبرى."
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        images: ["mbappe1.jpg", "mbappe2.jpg", "mbappe3.jpg", "mbappe4.jpg", "mbappe5.jpg"],
        info: "Kylian Mbappé is a French footballer who played for AS Monaco and PSG and currently Real Madrid. Famous for his speed, finishing, and versatility in attack. Mbappé won the FIFA World Cup with France in 2018 and is considered one of the top young talents in world football.\nكيليان مبابي هو لاعب كرة قدم فرنسي لعب لموناكو وباريس سان جيرمان وحاليًا ريال مدريد. مشهور بسرعته وقدرته على التسجيل وتنوعه في الهجوم. فاز بكأس العالم 2018 مع فرنسا ويعتبر من أفضل المواهب الشابة في كرة القدم العالمية."
    },
    {
        id: 5,
        name: "Mohamed Salah",
        images: ["salah1.jpg", "salah2.jpg", "salah3.jpg", "salah4.jpg", "salah5.jpg"],
        info: "Mohamed Salah is an Egyptian football star who played for Chelsea, Fiorentina, Roma, and currently Liverpool. Known for his speed, dribbling, and finishing skills, Salah is considered one of Africa’s best players and has won the Premier League Golden Boot multiple times.\nمحمد صلاح هو نجم كرة قدم مصري لعب لتشيلسي وفيورنتينا وروما وحاليًا ليفربول. معروف بسرعته ومهاراته في المراوغة والتسجيل، ويعتبر من أفضل لاعبي إفريقيا وفاز بجائزة الحذاء الذهبي في الدوري الإنجليزي عدة مرات."
    },
    {
        id: 6,
        name: "Erling Haaland",
        images: ["haaland1.jpg", "haaland2.jpg", "haaland3.jpg", "haaland4.jpg", "haaland5.jpg"],
        info: "Erling Haaland is a Norwegian striker playing for Manchester City. Known for his physical strength, speed, and exceptional goal-scoring ability at a young age, he is considered one of the most promising talents in modern football.\nإيرلينغ هالاند هو مهاجم نرويجي يلعب لنادي مانشستر سيتي. معروف بقوته البدنية وسرعته وقدرته الكبيرة على تسجيل الأهداف منذ صغره، ويعتبر من ألمع المواهب الصاعدة في كرة القدم الحديثة."
    },
    {
        id: 7,
        name: "Kevin De Bruyne",
        images: ["debruyne1.jpg", "debruyne2.jpg", "debruyne3.jpg", "debruyne4.jpg", "debruyne5.jpg"],
        info: "Kevin De Bruyne is a Belgian midfielder playing for Manchester City. Famous for his vision, passing accuracy, and long-range shooting. He has been pivotal in Manchester City's domestic and European success.\nكيفن دي بروين هو لاعب وسط بلجيكي يلعب لنادي مانشستر سيتي. مشهور برؤيته الدقيقة وتمريراته الممتازة وقدرته على التسديد من مسافات بعيدة. كان له دور كبير في نجاح مانشستر سيتي محليًا وأوروبيًا."
    },
    {
        id: 8,
        name: "Karim Benzema",
        images: ["benzema1.jpg", "benzema2.jpg", "benzema3.jpg", "benzema4.jpg", "benzema5.jpg"],
        info: "Karim Benzema is a French forward who played for Lyon, Real Madrid, and currently Al Ittihad. Known for his finishing, intelligence, and ability to create space for teammates. He won the Ballon d'Or in 2022.\nكريم بنزيما هو مهاجم فرنسي لعب لنادي ليون وريال مدريد وحاليًا الاتحاد. مشهور بقدراته في التسجيل وذكائه وقدرته على خلق الفرص لزملائه. فاز بجائزة الكرة الذهبية عام 2022."
    },
    {
        id: 9,
        name: "Luka Modrić",
        images: ["modric1.jpg", "modric2.jpg", "modric3.jpg", "modric4.jpg", "modric5.jpg"],
        info: "Luka Modrić is a Croatian midfielder playing for Real Madrid. Known for his passing, vision, and leadership. He won the Ballon d'Or in 2018 and has been key in Croatia's World Cup 2018 run.\nلوكا مودريتش هو لاعب وسط كرواتي يلعب لريال مدريد. معروف بتمريراته ورؤيته وقيادته للفريق. فاز بالكرة الذهبية عام 2018 وكان عنصرًا أساسيًا في وصول كرواتيا لنهائي كأس العالم 2018."
    },
    {
        id: 10,
        name: "Vinícius Júnior",
        images: ["vinicius1.jpg", "vinicius2.jpg", "vinicius3.jpg", "vinicius4.jpg", "vinicius5.jpg"],
        info: "Vinícius Júnior is a Brazilian winger playing for Real Madrid. Known for his speed, dribbling, and ability to create scoring opportunities. He is regarded as one of the top young talents in Europe.\nفينيسيوس جونيور هو جناح برازيلي يلعب لريال مدريد. معروف بسرعته ومهاراته في المراوغة وقدرته على خلق فرص التسجيل. يعتبر من أفضل المواهب الشابة في أوروبا."
    },
    {
        id: 11,
        name: "Jude Bellingham",
        images: ["bellingham1.jpg", "bellingham2.jpg", "bellingham3.jpg", "bellingham4.jpg", "bellingham5.jpg"],
        info: "Jude Bellingham is an English midfielder playing for Real Madrid. Known for his maturity, passing, and versatility despite his young age. Considered one of the most promising English talents.\nجود بيلينجهام هو لاعب وسط إنجليزي يلعب لريال مدريد. معروف بنضجه ومهاراته في التمرير وتعدد استخداماته رغم صغر سنه. يعتبر من أبرز المواهب الصاعدة في إنجلترا."
    },
    {
        id: 12,
        name: "Mohamed Elneny",
        images: ["elneny1.jpg", "elneny2.jpg", "elneny3.jpg", "elneny4.jpg", "elneny5.jpg"],
        info: "Mohamed Elneny is an Egyptian midfielder playing for Arsenal. Known for his work rate, passing, and defensive contributions. He has been a consistent performer for club and country.\nمحمد النني هو لاعب وسط مصري يلعب لأرسنال. معروف بمجهوده الكبير وتمريراته ومساهماته الدفاعية. كان دائمًا أداءه ثابتًا مع النادي والمنتخب."
    },
    {
        id: 13,
        name: "Mahmoud Trézéguet",
        images: ["trezeguet1.jpg", "trezeguet2.jpg", "trezeguet3.jpg", "trezeguet4.jpg", "trezeguet5.jpg"],
        info: "Mahmoud Trézéguet is an Egyptian winger playing for Trabzonspor. Known for his speed, crossing ability, and offensive mindset. He has represented Egypt in several international tournaments.\nمحمود تريزيجيه هو جناح مصري يلعب لتربزون سبور. معروف بسرعته وقدرته على العرضيات وعقليته الهجومية. مثل مصر في عدة بطولات دولية."
    },
    {
        id: 14,
        name: "Emam Ashour",
        images: ["emam1.jpg", "emam2.jpg", "emam3.jpg", "emam4.jpg", "emam5.jpg"],info: "Emam Ashour is an Egyptian midfielder playing for Al Ahly. Known for his vision, passing, and ability to control the midfield. Considered a key player in the Egyptian league.\nإمام عاشور هو لاعب وسط مصري يلعب للأهلي. معروف برؤيته وقدرته على التمرير والسيطرة على خط الوسط. يعتبر لاعبًا أساسيًا في الدوري المصري."
    },
    {
        id: 15,
        name: "Ahmed Hegazy",
        images: ["hegazy1.jpg", "hegazy2.jpg", "hegazy3.jpg", "hegazy4.jpg", "hegazy5.jpg"],
        info: "Ahmed Hegazy is an Egyptian defender playing for Al Ittihad. Known for his defensive skills, aerial ability, and leadership. He has been a consistent performer for both club and national team.\nأحمد حجازي هو مدافع مصري يلعب للاتحاد. معروف بمهاراته الدفاعية وقدرته على الفوز بالكرات الهوائية وقيادته للفريق. كان دائمًا أداءه ثابتًا مع النادي والمنتخب."
    },
    { id: 16,
      name: "Lewandowski",
      images: ["lewandowski1.jpg","lewandowski2.jpg","lewandowski3.jpg","lewandowski4.jpg","lewandowski5.jpg"], 
      info:" Robert Lewandowski is a Polish striker currently playing for Barcelona. He is known for his incredible finishing, positioning, and ability to score from almost anywhere on the pitch. He has won multiple top scorer awards in Bundesliga and La Liga, and has been one of the most consistent goal scorers in the world.\nروبرت ليفاندوفسكي مهاجم بولندي يلعب حاليًا لبرشلونة. معروف بقدراته التهديفية الرائعة، تحركاته الذكية على أرض الملعب، وقدرته على تسجيل الأهداف من أي مكان تقريبًا. حصل على العديد من جوائز هداف الدوري الألماني والإسباني وكان من أكثر المهاجمين ثباتًا في العالم. "
    },
    { id: 17, 
      name: "Dembele",
      images: ["dembele1.jpg","dembele2.jpg","dembele3.jpg","dembele4.jpg","dembele5.jpg"], 
      info:" Ousmane Dembele is a French winger playing for Barcelona. Famous for his explosive speed, dribbling, and ability to beat defenders in one-on-one situations. He can play on either wing and is often involved in creating assists and scoring spectacular goals.\nعثمان ديمبلي جناح فرنسي يلعب لبرشلونة. مشهور بسرعته الفائقة، مراوغاته المبهرة، وقدرته على تجاوز المدافعين في مواجهة فردية. يمكنه اللعب على أي جناح وغالبًا ما يساهم في صناعة الأهداف وتسجيل أهداف رائعة. "
    },
    { id: 18, 
      name: "Marmoush", 
      images: ["marmoush1.jpg","marmoush2.jpg","marmoush3.jpg","marmoush4.jpg","marmoush5.jpg"], 
      info:" Karim Marmoush is an Egyptian attacking midfielder known for his agility, vision, and passing skills. He has great potential and is considered one of Egypt's promising young talents. He can create chances and score from outside the box.\nكريم مرموش لاعب وسط هجومي مصري معروف بمرونته ورؤيته الجيدة ومهارات التمرير. يمتلك إمكانيات كبيرة ويعتبر من المواهب الشابة الواعدة في مصر. قادر على خلق الفرص والتسجيل من خارج منطقة الجزاء. "
    },
    { id: 19, 
      name: "Lamine Yamal", 
      images: ["lamineyamal1.jpg","lamineyamal2.jpg","lamineyamal3.jpg","lamineyamal4.jpg","lamineyamal5.jpg"], 
      info:" Lamine Yamal is a young Spanish prodigy at Barcelona, playing mainly as a winger. Known for his speed, technical ability, and dribbling, he is seen as one of the brightest talents in Europe. He is fearless on the ball and loves to take on defenders.\nلامين يامال موهبة إسبانية شابة تلعب لبرشلونة، غالبًا كجناح. معروف بسرعته، قدراته التقنية، ومهارات المراوغة. يعتبر من ألمع المواهب في أوروبا، لا يخاف عند امتلاك الكرة ويحب مواجهة المدافعين. "
    },
    { id: 20, 
      name: "Courtois", 
      images: ["courtois1.jpg","courtois2.jpg","courtois3.jpg","courtois4.jpg","courtois5.jpg"], 
      info:" Thibaut Courtois is a Belgian goalkeeper playing for Real Madrid. Known for his height, reflexes, and commanding presence in the penalty area. He is considered one of the top goalkeepers in the world and has won multiple league titles and Champions League trophies.\nتيبو كورتوا حارس مرمى بلجيكي يلعب لريال مدريد. معروف بطوله، ردود أفعاله السريعة، وحضوره القوي في منطقة الجزاء. يُعتبر من أفضل حراس المرمى في العالم وفاز بالعديد من بطولات الدوري ودوري أبطال أوروبا. "
    },
    { id: 21, 
      name: "Alisson", 
      images: ["alisson1.jpg","alisson2.jpg","alisson3.jpg","alisson4.jpg","alisson5.jpg"], 
      info:" Alisson Becker is a Brazilian goalkeeper playing for Liverpool. Renowned for his shot-stopping, composure, and ability to play out from the back. He has been crucial in Liverpool’s league and European successes.\nأليسون بيكر حارس مرمى برازيلي يلعب لليفربول. مشهور بتصدياته الرائعة، رباطة جأشه، وقدرته على بدء اللعب من الخلف. كان له دور حاسم في نجاحات ليفربول المحلية والأوروبية. "
    },
    { id: 22, 
      name: "Van Dijk", 
      images: ["vandijk1.jpg","vandijk2.jpg","vandijk3.jpg","vandijk4.jpg","vandijk5.jpg"], 
      info: "`Virgil van Dijk is a Dutch central defender for Liverpool, known for his strength, aerial ability, and leadership. He is calm under pressure and often organizes the defenseOne of the most dominant defenders in modern football.\nفيرجيل فان دايك مدافع هولندي يلعب لليفربول، معروف بقوته، قدراته الهوائية، وقيادته. هادئ تحت الضغط وغالبًا ما ينظم الدفاع. يعتبر من أكثر المدافعين سيطرة في كرة القدم الحديثة. "
    },
    { id: 23, 
      name: "Zizo", 
      images: ["zizo1.jpg","zizo2.jpg","zizo3.jpg","zizo4.jpg","zizo5.jpg"], 
      info:" Ahmed Zizo is an Egyptian winger known for his dribbling, creativity, and speed. He is a key player for his team and has scored many important goals in domestic competitions.\nأحمد زيزو جناح مصري معروف بمراوغاته، إبداعه، وسرعته. هو لاعب أساسي لفريقه وسجل العديد من الأهداف المهمة في المسابقات المحلية. "
    },
    { id: 24,
      name: "Pedri", 
      images: ["pedri1.jpg","pedri2.jpg","pedri3.jpg","pedri4.jpg","pedri5.jpg"], 
      info:" Pedri is a Spanish midfielder at Barcelona, renowned for his vision, passing accuracy, and composure on the ball. Despite his young age, he plays like a seasoned professional and often dictates the tempo of the game.\nبيدري لاعب وسط إسباني يلعب لبرشلونة، مشهور برؤيته، دقة تمريراته، ورباطة جأشه عند امتلاك الكرة. رغم صغر سنه، يلعب كمحترف مخضرم وغالبًا ما يتحكم في إيقاع المباراة. "
    },
    { id: 25, 
      name: "Arnold", 
      images: ["arnold1.jpg","arnold2.jpg","arnold3.jpg","arnold4.jpg","arnold5.jpg"], 
      info:" Trent Alexander-Arnold is an English right-back playing for Liverpool. Famous for his crossing, set-piece ability, and attacking runs from defense. He is considered one of the best attacking fullbacks in the world.\nترينت ألكسندر-آرنولد ظهير أيمن إنجليزي يلعب لليفربول. مشهور بعرضياته، قدرته على التسديد من الركلات الثابتة، وانطلاقاته الهجومية من الدفاع. يعتبر من أفضل الأظهرة المهاجمة في العالم. "
    },
    {
      id: 27,
      name: "Raphinha",
     images: ["raphinha1.jpg", "raphinha2.jpg", "raphinha3.jpg", "raphinha4.jpg", "raphinha5.jpg"],
      info: "Raphinha (Raphael Dias Belloli) is a Brazilian winger known for his explosive pace, creative dribbling style, and dangerous left foot. He played for Rennes and Leeds United before joining FC Barcelona, where he became an important part of the attacking line. Raphinha is known for his sharp crosses, long-range shots, and relentless energy on the field, making him one of the most exciting wide players in modern football.\nرافينيا (رافاييل دياز بيلولي) هو جناح برازيلي يتميز بسرعته العالية وقدرته الرائعة على المراوغة وقدم يسارية خطيرة. لعب لنادي رين الفرنسي ثم ليدز يونايتد قبل انتقاله إلى برشلونة، حيث أصبح جزءًا مهمًا من الخط الهجومي. يشتهر رافينيا بعرضياته الدقيقة وتسديداته القوية من خارج المنطقة وروحه القتالية في الملعب، مما يجعله واحدًا من أكثر الأجنحة إثارة في كرة القدم الحديثة."
    },
    {
    id: 28,
    name: "Abdelsaeed",
    images: ["abdelsaeed1.jpg", "abdelsaeed2.jpg", "abdelsaeed3.jpg"],
    info: "Abdelsaeed is a talented midfielder, known for his vision, passing, and game intelligence. Currently playing for Zamalek SC. Strong, experienced, and capable of controlling the tempo of the game.\nعبد الله السعيد لاعب وسط موهوب، معروف برؤيته وتمريراته وذكائه في اللعب. يلعب حاليًا في نادي الزمالك. قوي، ذو خبرة، وقادر على التحكم في إيقاع المباراة."
    },
    {
    id: 29,
    name: "Rodrygo",
    images: ["rodrygo1.jpg", "rodrygo2.jpg", "rodrygo3.jpg"],
    info: "Rodrygo is a Brazilian winger, fast and skillful, playing for Real Madrid. Known for his dribbling, agility, and scoring from the flanks.\nرودريغو جناح برازيلي سريع وماهر، يلعب حاليًا في ريال مدريد. معروف بالمراوغات، والرشاقة، وتسجيل الأهداف من الأطراف."
    },
    {
    id: 30,
    name: "Marawnattia",
    images: ["marawnattia1.jpg", "marawnattia2.jpg", "marawnattia3.jpg"],
    info: "Marawnattia is a creative midfielder with excellent ball control and vision. He is known for linking defense and attack smoothly.\nمروان عطية لاعب وسط مبدع، يمتاز بالتحكم الممتاز في الكرة ورؤيته للملعب. معروف بربط الدفاع بالهجوم بسلاسة."
    },
    {
    id: 31,
    name: "Valverdi",
    images: ["valverdi1.jpg", "valverdi2.jpg", "valverdi3.jpg"],
    info: "Valverdi is a versatile midfielder, strong defensively and capable of initiating attacks. Currently playing for Real Madrid.\nفالفيردي لاعب وسط متعدد الاستخدامات، قوي دفاعيًا وقادر على بدء الهجمات. يلعب حاليًا في ريال مدريد."
    },
    {
    id: 32,
    name: "Ferminlopez",
    images: ["ferminlopez1.jpg", "ferminlopez2.jpg", "ferminlopez3.jpg"],
    info: "Fermin Lopez is a young creative midfielder, great passing range and vision, currently playing for Barcelona.\nفيرمين لوبيز لاعب وسط شاب مبدع، يمتاز بتمريراته ورؤيته الممتازة للملعب، يلعب حاليًا في برشلونة."
    },
    {
    id: 33,
    name: "Nonimadueke",
    images: ["nonimadueke1.jpg", "nonimadueke2.jpg", "nonimadueke3.jpg"],
    info: "Nonimadueke is a fast and agile winger, known for his dribbling skills and speed. Currently at Sevilla.\nنوني مادويكي جناح سريع ورشيق، معروف بمهارات المراوغة والسرعة. يلعب حاليًا في إشبيلية."
    },
    {
    id: 34,
    name: "Vitinha",
    images: ["vitinha1.jpg", "vitinha2.jpg", "vitinha3.jpg"],
    info: "Vitinha is a skilled Portuguese midfielder, great at controlling the game's rhythm and breaking defenses. Currently at PSG.\nفيتينيا لاعب وسط برتغالي ماهر، ممتاز في التحكم بإيقاع المباراة واختراق الدفاعات. يلعب حاليًا في باريس سان جيرمان."
    },
    {
    id: 35,
    name: "Olmo",
    images: ["olmo1.jpg", "olmo2.jpg", "olmo3.jpg"],
    info: "Olmo is a Spanish attacking midfielder, known for creativity, assists, and long-range shots. Playing for RB Leipzig.\nأولمو لاعب وسط هجومي إسباني، معروف بالإبداع والتمريرات الحاسمة والتسديد من بعيد. يلعب حاليًا في لايبزيغ."
    },
    {
    id: 36,
    name: "Harrykane",
    images: ["harrykane1.jpg", "harrykane2.jpg", "harrykane3.jpg"],
    info: "Harry Kane is a prolific English striker, top scorer, and great penalty taker. Currently playing for Bayern Munich.\nهاري كين مهاجم إنجليزي رائع، هداف ممتاز وقادر على تسديد الركلات الثابتة بدقة. يلعب حاليًا في بايرن ميونخ."
    },
    {
    id: 37,
    name: "Bernardosilva",
    images: ["bernardosilva1.jpg", "bernardosilva2.jpg", "bernardosilva3.jpg"],
    info: "Bernardo Silva is a Portuguese winger/midfielder, technically gifted, great dribbler and playmaker. Currently at Manchester City.\nبرناردو سيلفا جناح/لاعب وسط برتغالي، موهوب تقنيًا، ماهر بالمراوغات وصناعة اللعب. يلعب حاليًا في مانشستر سيتي."
    },
    {
    id: 38,
    name: "Asensio",
    images: ["asensio1.jpg", "asensio2.jpg", "asensio3.jpg"],
    info: "Marco Asensio is a Spanish winger with excellent technique, capable of scoring from distance. Currently at Real Madrid.\nماركو أسينسيو جناح إسباني يمتاز بالمهارة العالية، قادر على التسجيل من بعيد. يلعب حاليًا في ريال مدريد."
    },
    {
    id: 39,
    name: "Antoniorudiger",
    images: ["antoniorudiger1.jpg", "antoniorudiger2.jpg", "antoniorudiger3.jpg"],
    info: "Antonio Rudiger is a strong and fast defender, known for his tackling and aerial ability. Currently at Real Madrid.\nأنطونيو روديجر مدافع قوي وسريع، معروف بالتدخلات والقدرة على اللعب الهوائي. يلعب حاليًا في ريال مدريد."
    },
    {
    id: 40,
    name: "Paucubarsi",
    images: ["paucubarsi1.jpg", "paucubarsi2.jpg", "paucubarsi3.jpg"],
    info: "Pau Cubarsi is a versatile defender, solid in defense, good at passing and building from the back. Currently at Barcelona.\nباو كوبارسي مدافع متعدد الاستخدامات، صلب في الدفاع، جيد في التمرير والبناء من الخلف. يلعب حاليًا في برشلونة."
    },
    {
    id: 41,
    name: "Hakimi",
    images: ["hakimi1.jpg", "hakimi2.jpg", "hakimi3.jpg"],
    info: "Achraf Hakimi is a Moroccan fullback, very fast and attacking-minded, capable of scoring and assisting. Currently at Paris Saint-Germain.\nأشرف حكيمي ظهير مغربي سريع جدًا وهجومي، قادر على التسجيل وصناعة الأهداف. يلعب حاليًا في باريس سان جيرمان."
    },
    {
      id: 42,
      name: "Mohamed Osama",
      images: ["mo2.jpg","mo.jpg","mo1.jpg"],
       info: "A passionate and dedicated player, always striving to give his best on the field and inspire his teammates.<br>لاعب متحمس ومخلص، يسعى دائمًا لتقديم أفضل ما لديه على أرض الملعب وإلهام زملائه في الفريق."
    }
 ];
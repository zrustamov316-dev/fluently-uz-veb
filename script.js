const data = {
  sections: [
    {
      id: "languages",
      title: "Tillar",
      tracks: [
        {
          id: "english",
          title: "Ingliz tili",
          lessons: [
            {
              lesson_number: 1,
              title: "Greetings & Introductions",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Hello, Hi, Good morning, Good evening." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "My name is..., I am from..." },
                { slide: 3, title: "Namuna gaplar", summary: "How are you? Nice to meet you." },
                { slide: 4, title: "Savol va muloqot", summary: "am, is, are — basic intro." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Where are you from? / What's your name?" },
                { slide: 6, title: "Xulosa", summary: "Salomlashish va o'zini tanishtirish asoslari." }
              ],
              task: "Introduce yourself in 3-4 English sentences."
            },
            {
              lesson_number: 2,
              title: "Alphabet, Spelling & Numbers",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "English 26 letters and vowels." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "How do you spell your name?" },
                { slide: 3, title: "Namuna gaplar", summary: "Numbers 1-20 and 20-100." },
                { slide: 4, title: "Savol va muloqot", summary: "Phone numbers and ages." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Classroom spelling and number drill." },
                { slide: 6, title: "Xulosa", summary: "Harflarni aytish va raqamlarni to'g'ri talaffuz qilish." }
              ],
              task: "Spell your name and say your age and phone number."
            },
            {
              lesson_number: 3,
              title: "Countries, Nationalities & Languages",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Uzbekistan, UK, USA, Russia." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Uzbek, British, American, Russian." },
                { slide: 3, title: "Namuna gaplar", summary: "I speak Uzbek and a little English." },
                { slide: 4, title: "Savol va muloqot", summary: "Where is he/she from?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Country, nationality and language check." },
                { slide: 6, title: "Xulosa", summary: "Davlat, millat va til nomlarini farqlash." }
              ],
              task: "Write 4 sentences about countries, nationalities, and languages."
            },
            {
              lesson_number: 4,
              title: "Family Members & Possessives",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Mother, father, brother, sister." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "my, your, his, her, our, their." },
                { slide: 3, title: "Namuna gaplar", summary: "This is my brother; her name is..." },
                { slide: 4, title: "Savol va muloqot", summary: "Who is this? / Whose bag is this?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Possessive adjectives practice." },
                { slide: 6, title: "Xulosa", summary: "Oila a'zolari va egalik olmoshlari." }
              ],
              task: "Describe 4 family members using possessive adjectives."
            },
            {
              lesson_number: 5,
              title: "Everyday Objects & Demonstratives",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Book, pen, laptop, phone, bag." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "this / that (singular)." },
                { slide: 3, title: "Namuna gaplar", summary: "these / those (plural)." },
                { slide: 4, title: "Savol va muloqot", summary: "What is this/that on the desk?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Demonstrative pronouns check." },
                { slide: 6, title: "Xulosa", summary: "Yaqin va uzoq, birlik va ko'plik ko'rsatish olmoshlari." }
              ],
              task: "Write 4 sentences using this, that, these, and those."
            },
            {
              lesson_number: 6,
              title: "Present Simple: Affirmative Sentences",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Daily routines and habits." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Base verb + -s/-es for he/she/it." },
                { slide: 3, title: "Namuna gaplar", summary: "I study daily; she reads at night." },
                { slide: 4, title: "Savol va muloqot", summary: "Time expressions: every day, on Mondays." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Third-person -s check." },
                { slide: 6, title: "Xulosa", summary: "Present Simple darak gaplari." }
              ],
              task: "Write 4 affirmative Present Simple sentences about your week."
            },
            {
              lesson_number: 7,
              title: "Present Simple: Negative & Questions",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "don't / doesn't in negative sentences." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "do / does in questions." },
                { slide: 3, title: "Namuna gaplar", summary: "Do you play football? Yes, I do." },
                { slide: 4, title: "Savol va muloqot", summary: "Short answers: No, he doesn't." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Interview Q&A practice." },
                { slide: 6, title: "Xulosa", summary: "Present Simple inkor va so'roq gaplar." }
              ],
              task: "Write 2 negative sentences and 2 questions in Present Simple."
            },
            {
              lesson_number: 8,
              title: "Adverbs of Frequency",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "always, usually, often, sometimes, never." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Position before main verb / after 'to be'." },
                { slide: 3, title: "Namuna gaplar", summary: "I usually wake up at 7 a.m." },
                { slide: 4, title: "Savol va muloqot", summary: "How often do you...?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Habit frequency check." },
                { slide: 6, title: "Xulosa", summary: "Takrorlanish ravishlari va joylashuvi." }
              ],
              task: "Write 4 sentences about your habits using frequency adverbs."
            },
            {
              lesson_number: 9,
              title: "Time, Days & Daily Routine",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "What time is it? / It's 8:30." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Days of the week and at / on / in." },
                { slide: 3, title: "Namuna gaplar", summary: "Morning, afternoon, evening, night." },
                { slide: 4, title: "Savol va muloqot", summary: "School and study timeline." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Time and preposition check." },
                { slide: 6, title: "Xulosa", summary: "Soat, kunlar va kun tartibi." }
              ],
              task: "Describe your daily routine with at least 3 exact times."
            },
            {
              lesson_number: 10,
              title: "Jobs, School & Workplaces",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Teacher, engineer, doctor, student." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Where do they work? School, office, hospital." },
                { slide: 3, title: "Namuna gaplar", summary: "He works in an IT company." },
                { slide: 4, title: "Savol va muloqot", summary: "What do you want to be?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Job and workplace matching." },
                { slide: 6, title: "Xulosa", summary: "Kasblar va ish joylari haqida gapirish." }
              ],
              task: "Write 4 sentences about professions and where people work."
            },
            {
              lesson_number: 11,
              title: "Likes, Dislikes & Free Time",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "like, love, enjoy, hate + -ing / noun." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "I enjoy coding and playing games." },
                { slide: 3, title: "Namuna gaplar", summary: "Do you like reading or music?" },
                { slide: 4, title: "Savol va muloqot", summary: "Weekend hobbies." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Hobby preference check." },
                { slide: 6, title: "Xulosa", summary: "Yoqtirish va yoqtirmaslikni ifodalash." }
              ],
              task: "Write 4 sentences about what you like and dislike in free time."
            },
            {
              lesson_number: 12,
              title: "Food, Drinks & Ordering",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Bread, rice, tea, coffee, fruit, water." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Countable vs uncountable basics." },
                { slide: 3, title: "Namuna gaplar", summary: "some / any in offers and requests." },
                { slide: 4, title: "Savol va muloqot", summary: "At a cafe: Can I have..., please?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Menu ordering roleplay." },
                { slide: 6, title: "Xulosa", summary: "Oziq-ovqat, ichimlik va buyurtma berish." }
              ],
              task: "Write a short cafe order with 3-4 food and drink items."
            },
            {
              lesson_number: 13,
              title: "Home, Rooms & Furniture",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Room, kitchen, bedroom, desk, chair." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "There is / there are." },
                { slide: 3, title: "Namuna gaplar", summary: "Is there a desk? Yes, there is." },
                { slide: 4, title: "Savol va muloqot", summary: "Prepositions: in, on, under, next to." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Room layout description check." },
                { slide: 6, title: "Xulosa", summary: "Xona, jihozlar va joylashuv predloglari." }
              ],
              task: "Describe your room or study desk using there is/are and prepositions."
            },
            {
              lesson_number: 14,
              title: "City Places & Directions",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "School, library, station, park, bank." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Turn left, turn right, go straight." },
                { slide: 3, title: "Namuna gaplar", summary: "Where is the bus stop / library?" },
                { slide: 4, title: "Savol va muloqot", summary: "Near, opposite, between." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Simple route guide check." },
                { slide: 6, title: "Xulosa", summary: "Shahardagi joylar va yo'nalish ko'rsatish." }
              ],
              task: "Write 4 sentences giving directions or location in a town."
            },
            {
              lesson_number: 15,
              title: "Shopping, Clothes & Prices",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Shirt, jacket, shoes, price, cheap, expensive." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "How much is this / are these?" },
                { slide: 3, title: "Namuna gaplar", summary: "Sizes: S, M, L; colors." },
                { slide: 4, title: "Savol va muloqot", summary: "Polite buying phrases." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Price and item check." },
                { slide: 6, title: "Xulosa", summary: "Kiyim-kechak, ranglar va narx so'rash." }
              ],
              task: "Write 4 sentences about clothes, colors, and prices."
            },
            {
              lesson_number: 16,
              title: "Weather, Seasons & Months",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Sunny, rainy, windy, cold, warm, snow." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Spring, summer, autumn, winter." },
                { slide: 3, title: "Namuna gaplar", summary: "What's the weather like today?" },
                { slide: 4, title: "Savol va muloqot", summary: "Months of the year." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Weather and season check." },
                { slide: 6, title: "Xulosa", summary: "Ob-havo, fasllar va oylar." }
              ],
              task: "Write 4 sentences about today's weather and your favorite season."
            },
            {
              lesson_number: 17,
              title: "Present Continuous: Actions Now",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "am / is / are + verb-ing." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Happening right now / at the moment." },
                { slide: 3, title: "Namuna gaplar", summary: "I am studying English right now." },
                { slide: 4, title: "Savol va muloqot", summary: "What are you doing now?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Verb-ing spelling check." },
                { slide: 6, title: "Xulosa", summary: "Hozir davom etayotgan ish-harakatlar." }
              ],
              task: "Write 4 sentences describing what you and others are doing now."
            },
            {
              lesson_number: 18,
              title: "Present Simple vs Present Continuous",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Habits/facts vs actions happening now." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "usually/every day vs now/at the moment." },
                { slide: 3, title: "Namuna gaplar", summary: "I practice daily; now I am typing." },
                { slide: 4, title: "Savol va muloqot", summary: "Spotting time clue words." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Contrast comparison check." },
                { slide: 6, title: "Xulosa", summary: "Present Simple va Present Continuous farqi." }
              ],
              task: "Write 2 pairs of sentences contrasting Present Simple and Continuous."
            },
            {
              lesson_number: 19,
              title: "Past Simple: Was / Were & Regular Verbs",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Past actions and states." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "was / were; verb + -ed." },
                { slide: 3, title: "Namuna gaplar", summary: "Yesterday I studied and practiced." },
                { slide: 4, title: "Savol va muloqot", summary: "Time markers: yesterday, last week, ago." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Past -ed form check." },
                { slide: 6, title: "Xulosa", summary: "O'tgan zamondagi holat va muntazam fe'llar." }
              ],
              task: "Write 4 Past Simple sentences about what you did yesterday."
            },
            {
              lesson_number: 20,
              title: "Past Simple: Irregular Verbs & Questions",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "went, saw, made, had, got, did." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "did + base verb in questions and negatives." },
                { slide: 3, title: "Namuna gaplar", summary: "Did you finish your homework?" },
                { slide: 4, title: "Savol va muloqot", summary: "Short past answers." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Irregular verb and Q&A check." },
                { slide: 6, title: "Xulosa", summary: "Noto'g'ri fe'llar va o'tgan zamonda savol/inkor." }
              ],
              task: "Write 2 irregular-verb sentences and 2 Past Simple questions."
            },
            {
              lesson_number: 21,
              title: "Abilities & Requests with Can / Could",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "can for ability and permission." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "could for polite requests." },
                { slide: 3, title: "Namuna gaplar", summary: "I can speak English; could you help me?" },
                { slide: 4, title: "Savol va muloqot", summary: "can't / couldn't." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Polite request practice." },
                { slide: 6, title: "Xulosa", summary: "Qobiliyat va muloyim iltimoslar." }
              ],
              task: "Write 2 sentences with can/can't and 2 polite requests with could."
            },
            {
              lesson_number: 22,
              title: "Future Plans: Going To & Will",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "be going to for planned intentions." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "will for quick decisions and promises." },
                { slide: 3, title: "Namuna gaplar", summary: "I am going to build a web page." },
                { slide: 4, title: "Savol va muloqot", summary: "Tomorrow and next week plans." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Plan vs instant choice check." },
                { slide: 6, title: "Xulosa", summary: "Kelasi zamon rejalari va qarorlari." }
              ],
              task: "Write 2 sentences with going to and 2 sentences with will."
            },
            {
              lesson_number: 23,
              title: "Travel, Transport & Experiences",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Train, plane, bus, ticket, trip." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Have you ever visited...?" },
                { slide: 3, title: "Namuna gaplar", summary: "Travel tips and packing list." },
                { slide: 4, title: "Savol va muloqot", summary: "Booking and asking about trips." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Travel vocabulary check." },
                { slide: 6, title: "Xulosa", summary: "Sayohat, transport va tajribalar." }
              ],
              task: "Write 4 sentences about a trip, transport, or travel plan."
            },
            {
              lesson_number: 24,
              title: "Review & Personal Profile Presentation",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Combining greetings, routines and plans." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Tenses check: present, past, future." },
                { slide: 3, title: "Namuna gaplar", summary: "Clear pronunciation and short sentences." },
                { slide: 4, title: "Savol va muloqot", summary: "Self-check against learning goals." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Final mini-presentation check." },
                { slide: 6, title: "Xulosa", summary: "O'zini tanishtirish va zamonlarni birlashtirish." }
              ],
              task: "Write a 6-sentence English self-introduction covering past, present, and future."
            }
          ]
        },
        {
          id: "russian",
          title: "Rus tili",
          lessons: [
            {
              lesson_number: 1,
              title: "Приветствие и знакомство",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Привет, Здравствуйте, Доброе утро." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Меня зовут..., Я из Узбекистана." },
                { slide: 3, title: "Namuna gaplar", summary: "Как дела? Приятно познакомиться." },
                { slide: 4, title: "Savol va muloqot", summary: "Кто ты? / Как тебя зовут?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Приветствие в диалоге." },
                { slide: 6, title: "Xulosa", summary: "Salomlashish va tanishuv iboralari." }
              ],
              task: "Напишите 3–4 предложения о приветствии и знакомстве на русском."
            },
            {
              lesson_number: 2,
              title: "Русский алфавит и чтение",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Гласные и согласные буквы." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Твёрдые и мягкие звуки." },
                { slide: 3, title: "Namuna gaplar", summary: "Буквы е, ё, ю, я и знаки ъ, ь." },
                { slide: 4, title: "Savol va muloqot", summary: "Чтение слогов и простых слов." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Проверка произношения и мягких звуков." },
                { slide: 6, title: "Xulosa", summary: "Rus alifbosi va o'qish qoidalari." }
              ],
              task: "Выпишите 4 слова с мягким знаком или йотированными гласными и прочитайте."
            },
            {
              lesson_number: 3,
              title: "Числа, возраст и время",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Числа от 1 до 20 и десятки до 100." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Сколько вам лет? / Мне ... лет." },
                { slide: 3, title: "Namuna gaplar", summary: "Который час? / Сейчас ..." },
                { slide: 4, title: "Savol va muloqot", summary: "Дни недели и части суток." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Числовой диктант и время." },
                { slide: 6, title: "Xulosa", summary: "Sonlar, yosh va vaqtni aytish." }
              ],
              task: "Напишите возраст, любимое число и текущее время словами."
            },
            {
              lesson_number: 4,
              title: "Род существительных",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Мужской (он), женский (она), средний (оно)." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Окончания слов и определение рода." },
                { slide: 3, title: "Namuna gaplar", summary: "Стол (он), книга (она), окно (оно)." },
                { slide: 4, title: "Savol va muloqot", summary: "Исключения и частые слова." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Определение рода слов." },
                { slide: 6, title: "Xulosa", summary: "Otlarning rodini aniqlash." }
              ],
              task: "Определите род 4 существительных и составьте с ними словосочетания."
            },
            {
              lesson_number: 5,
              title: "Мой, моя, моё, мои",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Согласование по роду и числу." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Мой брат, моя сестра, моё окно, мои друзья." },
                { slide: 3, title: "Namuna gaplar", summary: "Чей это телефон? / Чья это книга?" },
                { slide: 4, title: "Savol va muloqot", summary: "Подстановка местоимений." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Выбор формы мой/моя/моё/мои." },
                { slide: 6, title: "Xulosa", summary: "Egalik olmoshlarining rod va sonda moslashuvi." }
              ],
              task: "Составьте 4 словосочетания с формами мой, моя, моё и мои."
            },
            {
              lesson_number: 6,
              title: "Семья и близкие люди",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Мама, папа, брат, сестра, бабушка, дедушка." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Рассказ о членах семьи." },
                { slide: 3, title: "Namuna gaplar", summary: "Мою сестру зовут..., Она учится." },
                { slide: 4, title: "Savol va muloqot", summary: "Вопросы о семье." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Краткий рассказ о семье." },
                { slide: 6, title: "Xulosa", summary: "Oila a'zolari haqida so'zlash." }
              ],
              task: "Напишите 4 предложения о вашей семье на русском языке."
            },
            {
              lesson_number: 7,
              title: "Учёба, предметы и профессии",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Школа, урок, тетрадь, учитель, программист." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Кем ты хочешь стать? / Я хочу стать..." },
                { slide: 3, title: "Namuna gaplar", summary: "Где работают люди: офис, школа, больница." },
                { slide: 4, title: "Savol va muloqot", summary: "Учебные принадлежности." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Профессии и места работы." },
                { slide: 6, title: "Xulosa", summary: "O'qish, fanlar va kasblar." }
              ],
              task: "Напишите 4 предложения об учёбе и профессиях."
            },
            {
              lesson_number: 8,
              title: "Настоящее время глаголов",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Действия сейчас и регулярно (I и II спряжение)." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Я читаю, ты пишешь, он работает." },
                { slide: 3, title: "Namuna gaplar", summary: "Мы учимся, вы знаете, они говорят." },
                { slide: 4, title: "Savol va muloqot", summary: "Окончания глаголов в настоящем времени." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Спряжение частых глаголов." },
                { slide: 6, title: "Xulosa", summary: "Hozirgi zamon fe'l qo'shimchalari." }
              ],
              task: "Проспрягайте 2 глагола в настоящем времени и составьте 2 фразы."
            },
            {
              lesson_number: 9,
              title: "Любимые занятия и свободное время",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Читать, играть, рисовать, слушать музыку." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Мне нравится... / Я люблю..." },
                { slide: 3, title: "Namuna gaplar", summary: "Что ты делаешь в свободное время?" },
                { slide: 4, title: "Savol va muloqot", summary: "Хобби дома и на улице." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Диалог об интересах." },
                { slide: 6, title: "Xulosa", summary: "Bo'sh vaqt va sevimli mashg'ulotlar." }
              ],
              task: "Напишите 4 предложения о ваших увлечениях и свободном времени."
            },
            {
              lesson_number: 10,
              title: "Распорядок дня",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Утро, день, вечер, ночь." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Встаю, завтракаю, иду на занятия, ложусь спать." },
                { slide: 3, title: "Namuna gaplar", summary: "Во сколько ты встаёшь? / В семь часов." },
                { slide: 4, title: "Savol va muloqot", summary: "Регулярные действия по времени." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Описание режима дня." },
                { slide: 6, title: "Xulosa", summary: "Kun tartibi haqida gapirish." }
              ],
              task: "Опишите свой распорядок дня в 4 предложениях."
            },
            {
              lesson_number: 11,
              title: "Еда, напитки и в кафе",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Хлеб, чай, кофе, вода, суп, фрукты." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Я хочу..., Принесите, пожалуйста..." },
                { slide: 3, title: "Namuna gaplar", summary: "Сколько стоит? / Спасибо, вкусно." },
                { slide: 4, title: "Savol va muloqot", summary: "Заказ еды и напитков." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Вежливый разговор в кафе." },
                { slide: 6, title: "Xulosa", summary: "Kafeda buyurtma berish iboralari." }
              ],
              task: "Составьте 4 фразы для заказа еды и напитков в кафе."
            },
            {
              lesson_number: 12,
              title: "Дом, комната и мебель",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Комната, стол, стул, кровать, шкаф, окно." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Где находится предмет? На, в, под, рядом." },
                { slide: 3, title: "Namuna gaplar", summary: "В моей комнате есть стол и компьютер." },
                { slide: 4, title: "Savol va muloqot", summary: "Описание домашнего пространства." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Предлоги места в комнате." },
                { slide: 6, title: "Xulosa", summary: "Xona, mebel va joylashuv predloglari." }
              ],
              task: "Опишите свою комнату или рабочее место в 4 предложениях."
            },
            {
              lesson_number: 13,
              title: "Город и направление пути",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Улица, площадь, магазин, остановка, парк." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Как пройти к...? / Идите прямо, налево, направо." },
                { slide: 3, title: "Namuna gaplar", summary: "Далеко или близко? Рядом с..." },
                { slide: 4, title: "Savol va muloqot", summary: "Ориентиры в городе." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Подсказка маршрута." },
                { slide: 6, title: "Xulosa", summary: "Shaharda yo'nalish so'rash va ko'rsatish." }
              ],
              task: "Напишите 4 предложения с указанием места или направления в городе."
            },
            {
              lesson_number: 14,
              title: "Одежда, цвета и покупки",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Рубашка, куртка, обувь, синий, чёрный, белый." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Сколько стоит эта вещь? / Дорого или дёшево." },
                { slide: 3, title: "Namuna gaplar", summary: "Размер и цвет предмета." },
                { slide: 4, title: "Savol va muloqot", summary: "Покупка в магазине." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Цвет, размер и цена." },
                { slide: 6, title: "Xulosa", summary: "Kiyim, rang va xarid qilish." }
              ],
              task: "Опишите 4 предмета одежды с указанием цвета и цены."
            },
            {
              lesson_number: 15,
              title: "Погода, времена года и месяцы",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Солнечно, холодно, тепло, дождь, снег, ветер." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Весна, лето, осень, зима." },
                { slide: 3, title: "Namuna gaplar", summary: "Какая сегодня погода? / На улице тепло." },
                { slide: 4, title: "Savol va muloqot", summary: "Месяцы года." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Погодные заметки." },
                { slide: 6, title: "Xulosa", summary: "Ob-havo, fasllar va oylar." }
              ],
              task: "Напишите 4 предложения о погоде и любимом времени года."
            },
            {
              lesson_number: 16,
              title: "Прошедшее время глаголов",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Действия в прошлом: вчера, на прошлой неделе." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Окончания -л, -ла, -ло, -ли по роду и числу." },
                { slide: 3, title: "Namuna gaplar", summary: "Вчера я занимался и читал книгу." },
                { slide: 4, title: "Savol va muloqot", summary: "Что ты делал вчера?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Формы прошедшего времени." },
                { slide: 6, title: "Xulosa", summary: "O'tgan zamon fe'llarining qo'shimchalari." }
              ],
              task: "Напишите 4 предложения о том, что вы делали вчера, учитывая род."
            },
            {
              lesson_number: 17,
              title: "Будущее время глаголов",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Планы на завтра и будущее: завтра, скоро." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Буду + инфинитив или глагол совершенного вида." },
                { slide: 3, title: "Namuna gaplar", summary: "Завтра я буду повторять слова и учиться." },
                { slide: 4, title: "Savol va muloqot", summary: "Что ты будешь делать завтра?" },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Формы будущего времени." },
                { slide: 6, title: "Xulosa", summary: "Kelasi zamon rejalarini ifodalash." }
              ],
              task: "Напишите 4 предложения о своих планах на завтра или выходные."
            },
            {
              lesson_number: 18,
              title: "Могу, нужно, можно, нельзя",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Возможность, необходимость, разрешение, запрет." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Я могу помочь / Мне нужно сделать задание." },
                { slide: 3, title: "Namuna gaplar", summary: "Здесь можно / нельзя..." },
                { slide: 4, title: "Savol va muloqot", summary: "Полезные модальные слова." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Выбор модальных слов." },
                { slide: 6, title: "Xulosa", summary: "Imkoniyat, zarurat, ruxsat va taqiq so'zlari." }
              ],
              task: "Составьте по 1 предложению со словами могу, нужно, можно и нельзя."
            },
            {
              lesson_number: 19,
              title: "Здоровье и самочувствие",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Как ты себя чувствуешь? / Я хорошо себя чувствую." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Устал, отдохнул, болит голова, выздоравливай." },
                { slide: 3, title: "Namuna gaplar", summary: "Советы для отдыха и бодрости." },
                { slide: 4, title: "Savol va muloqot", summary: "Забота о себе." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Самочувствие и отдых." },
                { slide: 6, title: "Xulosa", summary: "Salomatlik va hol-ahvol haqida iboralar." }
              ],
              task: "Напишите 4 фразы о самочувствии и отдыхе после занятий."
            },
            {
              lesson_number: 20,
              title: "Транспорт и поездки",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Автобус, поезд, самолёт, метро, билет, дорога." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "На чём ты едешь в школу или город?" },
                { slide: 3, title: "Namuna gaplar", summary: "Поездка в другой город или страну." },
                { slide: 4, title: "Savol va muloqot", summary: "Полезные слова в пути." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Транспорт и маршрут." },
                { slide: 6, title: "Xulosa", summary: "Transport turlari va safar haqida so'zlash." }
              ],
              task: "Напишите 4 предложения о транспорте и поездке."
            },
            {
              lesson_number: 21,
              title: "В магазине, банке или сервисе",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Здравствуйте, подскажите, пожалуйста..." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Уточнение времени, цены и условий." },
                { slide: 3, title: "Namuna gaplar", summary: "Вежливое обращение к сотруднику." },
                { slide: 4, title: "Savol va muloqot", summary: "Решение бытового вопроса." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Вежливые обращения." },
                { slide: 6, title: "Xulosa", summary: "Xizmat ko'rsatish joylarida muloyim murojaat." }
              ],
              task: "Напишите 4 вежливые фразы для обращения за помощью или информацией."
            },
            {
              lesson_number: 22,
              title: "Сравнение предметов и качеств",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Больше, меньше, лучше, интереснее, быстрее." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Сравнение двух вещей или занятий." },
                { slide: 3, title: "Namuna gaplar", summary: "Этот способ проще и быстрее." },
                { slide: 4, title: "Savol va muloqot", summary: "Выбор лучшего варианта." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Сравнение по признакам." },
                { slide: 6, title: "Xulosa", summary: "Narsa va sifatlarni solishtirish." }
              ],
              task: "Составьте 4 предложения, сравнивая предметы, языки или способы учёбы."
            },
            {
              lesson_number: 23,
              title: "Чтение и пересказ короткого текста",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Главная мысль и ключевые слова." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Кто, что делает, где и почему." },
                { slide: 3, title: "Namuna gaplar", summary: "Краткий пересказ своими словами." },
                { slide: 4, title: "Savol va muloqot", summary: "Ответы на вопросы по тексту." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Ключевые мысли текста." },
                { slide: 6, title: "Xulosa", summary: "Matnni tushunish va qisqa aytib berish." }
              ],
              task: "Прочитайте короткий текст и напишите 3–4 предложения пересказа."
            },
            {
              lesson_number: 24,
              title: "Итоговый рассказ о себе",
              slides: [
                { slide: 1, title: "Mavzu va maqsad", summary: "Имя, возраст, город, учёба, увлечения и планы." },
                { slide: 2, title: "Asosiy qoida / so'zlar", summary: "Связка настоящего, прошлого и будущего времени." },
                { slide: 3, title: "Namuna gaplar", summary: "Чёткие и понятные предложения." },
                { slide: 4, title: "Savol va muloqot", summary: "Проверка грамотности." },
                { slide: 5, title: "Mashq va tekshiruv", summary: "Финальная самопрезентация." },
                { slide: 6, title: "Xulosa", summary: "O'zini tanishtirish hikoyasi." }
              ],
              task: "Напишите связный рассказ о себе из 6 предложений на русском языке."
            }
          ]
        }
      ]
    },
    {
      id: "it",
      title: "Informatika / IT",
      tracks: [
        {
          id: "flowgorithm",
          title: "Flowgorithm",
          lessons: [
            {
              lesson_number: 1,
              title: "Algoritm va blok-sxemalar",
              slides: [
                { slide: 1, title: "Algoritm tushunchasi", summary: "Ketma-ket aniq ko'rsatmalar tizimi." },
                { slide: 2, title: "Asosiy bloklar", summary: "Boshlash, tugatish, jarayon va shart bloklari." },
                { slide: 3, title: "Output va Input", summary: "Ma'lumot kiritish va ekranga chiqarish." },
                { slide: 4, title: "Birinchi sxema va mashq", summary: "Oddiy xabar chiqaruvchi blok-sxema." }
              ],
              task: "Oddiy xabar yoki salomlashuv chiqaruvchi blok-sxema tuzish."
            },
            {
              lesson_number: 2,
              title: "O'zgaruvchilar va arifmetika",
              slides: [
                { slide: 1, title: "Declare va tiplar", summary: "Integer, Real, String va Boolean tiplari." },
                { slide: 2, title: "Qiymat berish (Assign)", summary: "O'zgaruvchiga ifoda yoki qiymat yuklash." },
                { slide: 3, title: "Arifmetik amallar", summary: "+, -, *, / va % amallari." },
                { slide: 4, title: "Hisob-kitob sxemasi va mashq", summary: "Ikki son ustida amallar bajarish." }
              ],
              task: "Foydalanuvchidan ikki son olib, yig'indisi va ko'paytmasini hisoblovchi sxema tuzish."
            },
            {
              lesson_number: 3,
              title: "Shart operatori (If)",
              slides: [
                { slide: 1, title: "Mantiqiy ifodalar", summary: "Taqqoslash va shart ifodalari." },
                { slide: 2, title: "If tarmog'i", summary: "Shart asosida qaror qabul qilish." },
                { slide: 3, title: "True / False yo'llari", summary: "To'g'ri va noto'g'ri tarmoqlarning ishlashi." },
                { slide: 4, title: "Shartli sxema va mashq", summary: "Sonni tekshirish blok-sxemasi." }
              ],
              task: "Berilgan sonning musbat yoki manfiy/nol ekanini aniqlovchi sxema tuzish."
            },
            {
              lesson_number: 4,
              title: "Sikllar (For va While)",
              slides: [
                { slide: 1, title: "Takrorlash zarurati", summary: "Bir xil amallarni takrorlash mantiqi." },
                { slide: 2, title: "While sikli", summary: "Shart rost bo'lguncha takrorlash." },
                { slide: 3, title: "For sikli", summary: "Boshlang'ich, oxirgi qiymat va qadam." },
                { slide: 4, title: "Yig'indi hisoblash sxemasi va mashq", summary: "Ketma-ket sonlar yig'indisini topish." }
              ],
              task: "1 dan N gacha sonlar yig'indisini hisoblovchi siklli blok-sxema tuzish."
            }
          ]
        },
        {
          id: "word",
          title: "Word",
          lessons: [
            {
              lesson_number: 1,
              title: "Interfeys va matn kiritish",
              slides: [
                { slide: 1, title: "Ish maydoni", summary: "Tasma menyu, varaq va holat satri." },
                { slide: 2, title: "Matn terish va kursor", summary: "Matn kiritish, tanlash va o'chirish." },
                { slide: 3, title: "Sahifa sozlamalari", summary: "Hoshiyalar va sahifa yo'nalishi." },
                { slide: 4, title: "Qisqa matn terish mashqi", summary: "Oddiy matnli hujjat yaratish." }
              ],
              task: "Qisqa ma'lumot yoki xabar matnini terib, hujjat sifatida saqlash."
            },
            {
              lesson_number: 2,
              title: "Matnni formatlash",
              slides: [
                { slide: 1, title: "Shrift turi va o'lchami", summary: "Shrift tanlash va o'lchamini belgilash." },
                { slide: 2, title: "Qalin, kursiv, tag chiziq va rang", summary: "Matnni ajratib ko'rsatish usullari." },
                { slide: 3, title: "Tekislash va interval", summary: "Chapga, markazga, o'ngga, kenglik bo'yicha tekislash." },
                { slide: 4, title: "Referat sarlavhasini bezash mashqi", summary: "Sarlavha va asosiy matnni bezash." }
              ],
              task: "Referat yoki maqola sarlavhasini markazlashtirib, matnni o'qimli formatlash."
            },
            {
              lesson_number: 3,
              title: "Ro'yxatlar va jadvallar",
              slides: [
                { slide: 1, title: "Belgili va raqamlangan ro'yxat", summary: "Tartibli va tartibsiz ro'yxatlar." },
                { slide: 2, title: "Jadval yaratish", summary: "Satr va ustunlar sonini belgilash." },
                { slide: 3, title: "Satr/ustun qo'shish va birlashtirish", summary: "Katakchalarni birlashtirish va tahrirlash." },
                { slide: 4, title: "Dars jadvali tuzish mashqi", summary: "Haftalik dars jadvali yaratish." }
              ],
              task: "Kamida 4 ustun va 5 satrdan iborat dars yoki reja jadvalini tuzish."
            },
            {
              lesson_number: 4,
              title: "Rasmlar, obyektlar va chop etish",
              slides: [
                { slide: 1, title: "Rasm va shakl qo'shish", summary: "Hujjatga rasm va geometrik shakllar qo'shish." },
                { slide: 2, title: "Matn atrofida joylashuv", summary: "Wrap Text parametrlari bilan ishlash." },
                { slide: 3, title: "Ko'rib chiqish (Print Preview)", summary: "Chop etishdan oldin sahifani tekshirish." },
                { slide: 4, title: "Tayyor hujjatni saqlash va chop etish mashqi", summary: "Hujjatni yakuniy ko'rinishga keltirish." }
              ],
              task: "Rasm va jadval qo'shilgan tayyor hujjatni sahifa ko'rinishida tekshirib saqlash."
            }
          ]
        },
        {
          id: "excel",
          title: "Excel",
          lessons: [
            {
              lesson_number: 1,
              title: "Jadval, satr, ustun va katakcha",
              slides: [
                { slide: 1, title: "Ish varag'i tuzilishi", summary: "Satrlar (raqam) va ustunlar (harf) kesishmasi." },
                { slide: 2, title: "Katakcha manzili (A1, B2)", summary: "Katakchalarga murojaat qilish qoidasi." },
                { slide: 3, title: "Matn va son kiritish", summary: "Ma'lumotlarni to'g'ri kiritish." },
                { slide: 4, title: "Oddiy ma'lumotlar jadvali mashqi", summary: "Boshlang'ich ro'yxat jadvali tuzish." }
              ],
              task: "Mahsulot yoki o'quvchi ma'lumotlari uchun boshlang'ich jadval yaratish."
            },
            {
              lesson_number: 2,
              title: "Formulalar asoslari",
              slides: [
                { slide: 1, title: "= belgisi qoidasi", summary: "Har bir formula '=' belgisi bilan boshlanadi." },
                { slide: 2, title: "Qo'shish, ayirish, ko'paytirish, bo'lish", summary: "+, -, *, / operatorlari." },
                { slide: 3, title: "Katakchalar orasida hisob", summary: "Masalan, =B2*C2 ko'rinishida hisoblash." },
                { slide: 4, title: "Narx va miqdor jadvali mashqi", summary: "Jami summasini formula bilan hisoblash." }
              ],
              task: "Miqdor va narx ustunlari asosida har bir qatorning umumiy summasini formula orqali hisoblash."
            },
            {
              lesson_number: 3,
              title: "Asosiy funksiyalar",
              slides: [
                { slide: 1, title: "SUM (yig'indi)", summary: "Diapazondagi sonlar yig'indisini topish." },
                { slide: 2, title: "AVERAGE (o'rtacha)", summary: "O'rtacha qiymatni hisoblash." },
                { slide: 3, title: "MIN va MAX", summary: "Eng kichik va eng katta qiymatni aniqlash." },
                { slide: 4, title: "Baholar yoki xarajat hisobi mashqi", summary: "Funksiyalarni amalda qo'llash." }
              ],
              task: "Jadvaldagi sonlar uchun SUM, AVERAGE, MIN va MAX funksiyalaridan foydalanib natija chiqarish."
            },
            {
              lesson_number: 4,
              title: "Jadval bezagi va diagrammalar",
              slides: [
                { slide: 1, title: "Chegaralar va formatlash", summary: "Jadval chegaralari va son formatlari." },
                { slide: 2, title: "Ustunli va doiraviy diagramma", summary: "Ma'lumotlarni grafik ko'rinishda ifodalash." },
                { slide: 3, title: "Sarlavha va o'qlar", summary: "Diagrammani tushunarli nomlash." },
                { slide: 4, title: "Vizual hisobot tayyorlash mashqi", summary: "Jadval va diagrammani birlashtirish." }
              ],
              task: "Tayyor jadval asosida ustunli yoki doiraviy diagramma yasash va bezash."
            }
          ]
        },
        {
          id: "powerpoint",
          title: "PowerPoint",
          lessons: [
            {
              lesson_number: 1,
              title: "Slayd va taqdimot tuzilishi",
              slides: [
                { slide: 1, title: "Taqdimot maqsadi", summary: "Asosiy fikrni qisqa va aniq yetkazish." },
                { slide: 2, title: "Yangi slayd qo'shish", summary: "Slaydlar ketma-ketligini shakllantirish." },
                { slide: 3, title: "Slayd maketlari (Layout)", summary: "Sarlavha, matn va ikki ustunli maketlar." },
                { slide: 4, title: "3 slaydlik kirish taqdimoti mashqi", summary: "Oddiy taqdimot yaratish." }
              ],
              task: "Biror mavzu bo'yicha 3 slayddan iborat qisqa taqdimot tuzish."
            },
            {
              lesson_number: 2,
              title: "Dizayn, fon va matn",
              slides: [
                { slide: 1, title: "Mavzular (Themes) va fon", summary: "Yagona rang va uslub tanlash." },
                { slide: 2, title: "Qisqa va o'qimli matn qoidasi", summary: "Slaydni uzun matn bilan to'ldirmaslik." },
                { slide: 3, title: "Shrift va kontrast", summary: "Fon va matn o'rtasidagi ko'rinuvchanlik." },
                { slide: 4, title: "Slayd dizaynini yangilash mashqi", summary: "Taqdimot ko'rinishini tartiblash." }
              ],
              task: "Taqdimotga yagona dizayn mavzusi berish va matnlarni qisqa tezislarga ajratish."
            },
            {
              lesson_number: 3,
              title: "Rasm, jadval va vizual elementlar",
              slides: [
                { slide: 1, title: "Rasm va piktogrammalar", summary: "Mavzuga mos vizual materiallar qo'shish." },
                { slide: 2, title: "Jadval va shakllar", summary: "Taqqoslash va sxemalar chizish." },
                { slide: 3, title: "Vizual muvozanat", summary: "Bo'sh joy va elementlar joylashuvi." },
                { slide: 4, title: "Mavzuga oid ko'rgazmali slayd mashqi", summary: "Vizual elementlar bilan boyitish." }
              ],
              task: "Kamida bitta rasm va bitta jadval yoki shakl joylashtirilgan slayd tayyorlash."
            },
            {
              lesson_number: 4,
              title: "Animatsiya, o'tishlar va namoyish",
              slides: [
                { slide: 1, title: "Slayd o'tishlari (Transitions)", summary: "Slaydlar almashish effekti." },
                { slide: 2, title: "Element animatsiyalari (Animations)", summary: "Matn va obyektlarning paydo bo'lish tartibi." },
                { slide: 3, title: "F5 / namoyish rejimi", summary: "To'liq ekranda taqdimotni ko'rsatish." },
                { slide: 4, title: "Yakuniy qisqa taqdimot namoyishi mashqi", summary: "Tayyor taqdimotni tekshirish." }
              ],
              task: "Slaydlarga o'tish effekti qo'shib, to'liq ekran rejimida taqdimotni ko'rib chiqish."
            }
          ]
        },
        {
          id: "html",
          title: "HTML",
          lessons: [
            {
              lesson_number: 1,
              title: "HTML kirish va skelet",
              slides: [
                { slide: 1, title: "Nazariya", summary: "HTML veb-sahifa tuzilmasini belgilaydi." },
                { slide: 2, title: "Sintaksis/teg", summary: "DOCTYPE, html, head va body tuzilmasi." },
                { slide: 3, title: "Kod namunasi", summary: "Asosiy HTML5 sahifa skeleti." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Yopilmagan teglar va noto'g'ri joylashuv." },
                { slide: 5, title: "Xulosa", summary: "Barcha HTML sahifalar shu skeletda quriladi." }
              ],
              task: "To'g'ri HTML5 skeletiga ega sahifa yaratib, title va body ichiga matn yozish."
            },
            {
              lesson_number: 2,
              title: "Sarlavhalar (h1-h6) va paragraflar (p)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Sarlavha ierarxiyasi va matn bloklari." },
                { slide: 2, title: "Sintaksis/teg", summary: "h1-h6 va p teglari." },
                { slide: 3, title: "Kod namunasi", summary: "Sarlavha va bir nechta paragraf misoli." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Kichik matnni kattalashtirish uchun h1 ishlatish." },
                { slide: 5, title: "Xulosa", summary: "Sahifada bitta asosiy h1 va aniq p bloklari bo'lsin." }
              ],
              task: "Bitta h1 sarlavha, h2 bo'lim sarlavhasi va ikkita p paragrafdan iborat blok tuzish."
            },
            {
              lesson_number: 3,
              title: "Matn formatlash (strong, em, mark, br, hr)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Matn ichidagi urg'u va ajratmalar." },
                { slide: 2, title: "Sintaksis/teg", summary: "strong, em, mark, br va hr." },
                { slide: 3, title: "Kod namunasi", summary: "Ajratilgan so'zlar va bo'luvchi chiziq misoli." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Bo'shliq o'rniga ketma-ket br ishlatish." },
                { slide: 5, title: "Xulosa", summary: "Mazmuniy teglar o'qishni osonlashtiradi." }
              ],
              task: "Qisqa matnda muhim so'zlarni strong, urg'uli so'zlarni em bilan ajratib, hr bilan bo'lish."
            },
            {
              lesson_number: 4,
              title: "Havolalar (a) va manzillar",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Sahifalar va manbalar o'rtasida o'tish." },
                { slide: 2, title: "Sintaksis/teg", summary: "a tegi, href va target='_blank'." },
                { slide: 3, title: "Kod namunasi", summary: "Tashqi va sahifa ichidagi (#) havolalar." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "href atributini bo'sh yoki noto'g'ri yozish." },
                { slide: 5, title: "Xulosa", summary: "Havola matni qayerga olib borishini bildirsin." }
              ],
              task: "Kamida 2 ta havola (biri tashqi saytga, biri sahifa bo'limiga) qo'shish."
            },
            {
              lesson_number: 5,
              title: "Rasmlar (img) va alt atributi",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Sahifaga rasm joylashtirish qoidalari." },
                { slide: 2, title: "Sintaksis/teg", summary: "img tegi, src va alt atributlari." },
                { slide: 3, title: "Kod namunasi", summary: "Rasm yo'li va tavsifli alt matni." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "alt atributini tashlab ketish yoki yo'lni adashtirish." },
                { slide: 5, title: "Xulosa", summary: "alt rasm yuklanmaganda yoki ekran o'quvchida muhim." }
              ],
              task: "Sahifaga rasm qo'shib, unga aniq mazmunli alt matn yozish."
            },
            {
              lesson_number: 6,
              title: "Ro'yxatlar (ul, ol, li)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Tartibli va tartibsiz ro'yxatlar farqi." },
                { slide: 2, title: "Sintaksis/teg", summary: "ul, ol va ichida li elementlari." },
                { slide: 3, title: "Kod namunasi", summary: "3 bandli ro'yxat namunasi." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "li ni ul/ol tashqarisida yozish." },
                { slide: 5, title: "Xulosa", summary: "Ketma-ketlik muhim bo'lsa ol, aks holda ul." }
              ],
              task: "Bitta raqamlangan (ol) va bitta belgili (ul) ro'yxat yaratish."
            },
            {
              lesson_number: 7,
              title: "Jadvallar (table, tr, th, td)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Jadval ko'rinishidagi ma'lumotlar tuzilishi." },
                { slide: 2, title: "Sintaksis/teg", summary: "table, thead, tbody, tr, th, td." },
                { slide: 3, title: "Kod namunasi", summary: "Ustun sarlavhalari va ma'lumot satrlari." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Satrlardagi katakchalar sonini teng qilmaslik." },
                { slide: 5, title: "Xulosa", summary: "Jadval faqat jadval ma'lumotlari uchun ishlatiladi." }
              ],
              task: "3 ustun va kamida 3 satrdan iborat HTML jadval yaratish."
            },
            {
              lesson_number: 8,
              title: "Semantik teglar",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Ma'noli teglarning ahamiyati." },
                { slide: 2, title: "Sintaksis/teg", summary: "header, nav, main, section, article, footer." },
                { slide: 3, title: "Kod namunasi", summary: "Sahifa skeletini semantik bo'limlarga ajratish." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Hamma joyda faqat div ishlatish." },
                { slide: 5, title: "Xulosa", summary: "Semantik tuzilma kodni o'qishni osonlashtiradi." }
              ],
              task: "Sahifani header, nav, main, section va footer bo'limlariga ajratib tuzish."
            },
            {
              lesson_number: 9,
              title: "Formalar (form, label, input)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Foydalanuvchidan ma'lumot qabul qilish." },
                { slide: 2, title: "Sintaksis/teg", summary: "form, label va input (text, email, password)." },
                { slide: 3, title: "Kod namunasi", summary: "Ism va email kiritish maydonlari." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "label va input ni bog'lamaslik." },
                { slide: 5, title: "Xulosa", summary: "To'g'ri input type kiritishni yengillashtiradi." }
              ],
              task: "Ism va email kiritish uchun label bilan bog'langan input maydonlaridan iborat forma yasash."
            },
            {
              lesson_number: 10,
              title: "Tugmalar, tanlov va ko'p qatorli maydon",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Tanlash va ko'p qatorli matn kiritish." },
                { slide: 2, title: "Sintaksis/teg", summary: "button, select + option, textarea." },
                { slide: 3, title: "Kod namunasi", summary: "Yo'nalish tanlash va izoh yozish formasi." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "button ga type ni aniq bermaslik." },
                { slide: 5, title: "Xulosa", summary: "Interaktiv formalar foydalanuvchi bilan muloqotni ta'minlaydi." }
              ],
              task: "select ro'yxati, textarea izoh maydoni va yuborish button tugmasidan iborat forma tuzish."
            },
            {
              lesson_number: 11,
              title: "Audio, video va iframe",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Media va tashqi kontentni sahifaga ulash." },
                { slide: 2, title: "Sintaksis/teg", summary: "audio, video va iframe teglari." },
                { slide: 3, title: "Kod namunasi", summary: "Boshqaruv tugmali media va iframe misoli." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "controls atributini qo'shmaslik." },
                { slide: 5, title: "Xulosa", summary: "Media fayllar formati va yo'li to'g'ri bo'lishi kerak." }
              ],
              task: "Sahifaga video yoki audio elementini controls bilan joylashtirish."
            },
            {
              lesson_number: 12,
              title: "Yakuniy loyiha (Ko'p bo'limli HTML sahifa)",
              slides: [
                { slide: 1, title: "Nazariya", summary: "Barcha HTML teglarini bitta loyihada birlashtirish." },
                { slide: 2, title: "Sintaksis/teg", summary: "Semantik tuzilma, ro'yxat, jadval va forma." },
                { slide: 3, title: "Kod namunasi", summary: "O'quv sahifasi maketi namunasi." },
                { slide: 4, title: "Ko'p uchraydigan xato", summary: "Tartibsiz teglar va takroriy bir xil id lar." },
                { slide: 5, title: "Xulosa", summary: "Toza HTML — mustahkam sayt poydevori." }
              ],
              task: "Sarlavha, ro'yxat, jadval va formani o'z ichiga olgan to'liq HTML sahifa yig'ish."
            }
          ]
        },
        {
          id: "css",
          title: "CSS",
          lessons: [
            {
              lesson_number: 1,
              title: "CSS ulash usullari va selektorlar",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "CSS sahifa ko'rinishini boshqaradi." },
                { slide: 2, title: "Yozilish qoidasi", summary: "selektor { xossa: qiymat; }." },
                { slide: 3, title: "Namuna", summary: "Tashqi style.css ulash va teg/class selektorlari." },
                { slide: 4, title: "Xato/farq", summary: "Nuqta-vergul (;) ni tushirib qoldirish." },
                { slide: 5, title: "Xulosa", summary: "Tashqi CSS fayl loyihani tartibli saqlaydi." }
              ],
              task: "HTML sahifaga style.css ulab, teg va .class selektorlari yordamida matn ko'rinishini o'zgartirish."
            },
            {
              lesson_number: 2,
              title: "#id, .class va ustuvorlik (specificity)",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Qaysi qoida ustun kelishini aniqlash." },
                { slide: 2, title: "Yozilish qoidasi", summary: "#id > .class > teg ustuvorligi." },
                { slide: 3, title: "Namuna", summary: "Bir xil elementga berilgan qoidalar solishtiruvi." },
                { slide: 4, title: "Xato/farq", summary: "Hamma joyga !important ishlatib yuborish." },
                { slide: 5, title: "Xulosa", summary: "Ko'p holatda .class ishlatish eng qulay." }
              ],
              task: "Bir elementga .class va #id qoidalarini yozib, qaysi biri ustun kelishini amalda tekshirish."
            },
            {
              lesson_number: 3,
              title: "Ranglar (color, background-color) va gradient",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Matn rangi, fon rangi va o'tishlar." },
                { slide: 2, title: "Yozilish qoidasi", summary: "HEX, RGB, rang nomi va linear-gradient." },
                { slide: 3, title: "Namuna", summary: "Kartochka foni va matn rangini moslash." },
                { slide: 4, title: "Xato/farq", summary: "Past kontrastli ranglar sabab matn o'qilmasligi." },
                { slide: 5, title: "Xulosa", summary: "Ranglar uyg'unligi ko'zni charchatmaydi." }
              ],
              task: "Sahifa foniga gradient yoki rang va kartochkaga kontrastli matn rangi berish."
            },
            {
              lesson_number: 4,
              title: "Shriftlar va matn",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Tipografika va satrlararo masofa." },
                { slide: 2, title: "Yozilish qoidasi", summary: "font-family, font-size, font-weight, line-height, text-align." },
                { slide: 3, title: "Namuna", summary: "Maqola matnini o'qishga qulay sozlash." },
                { slide: 4, title: "Xato/farq", summary: "Juda kichik shrift yoki juda zich qatorlar." },
                { slide: 5, title: "Xulosa", summary: "line-height: 1.5-1.7 matnni yengil o'qitadi." }
              ],
              task: "Matnga shrift o'lchami, qalinligi, tekislash va 1.6 atrofida line-height berish."
            },
            {
              lesson_number: 5,
              title: "Box Model (margin, padding, border, box-sizing)",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Har bir element quti (box) ko'rinishida." },
                { slide: 2, title: "Yozilish qoidasi", summary: "margin, border, padding va box-sizing: border-box." },
                { slide: 3, title: "Namuna", summary: "Ichki va tashqi bo'shliqlar farqi." },
                { slide: 4, title: "Xato/farq", summary: "padding qo'shilganda kenglik oshib ketishi." },
                { slide: 5, title: "Xulosa", summary: "box-sizing: border-box o'lchovlarni aniq qiladi." }
              ],
              task: "Kartochkaga padding, border va margin berib, box-sizing: border-box qo'llash."
            },
            {
              lesson_number: 6,
              title: "Chegaralar va soyalar",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Burchaklarni yumshatish va chuqurlik berish." },
                { slide: 2, title: "Yozilish qoidasi", summary: "border-radius va box-shadow." },
                { slide: 3, title: "Namuna", summary: "Zamonaviy kartochka va tugma ko'rinishi." },
                { slide: 4, title: "Xato/farq", summary: "Haddan tashqari qora va qalin soya." },
                { slide: 5, title: "Xulosa", summary: "Yengil soya elementni fondan ajratadi." }
              ],
              task: "border-radius va yumshoq box-shadow yordamida kartochka yoki tugma yasash."
            },
            {
              lesson_number: 7,
              title: "display xossasi",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Elementlarning oqimdagi joylashuv turi." },
                { slide: 2, title: "Yozilish qoidasi", summary: "block, inline, inline-block, none." },
                { slide: 3, title: "Namuna", summary: "Havolalar yoki tugmalarni qatorga joylash." },
                { slide: 4, title: "Xato/farq", summary: "inline elementga yuqori/pastki margin to'liq ta'sir qilmasligi." },
                { slide: 5, title: "Xulosa", summary: "Kerakli display qiymati tartibni to'g'rilaydi." }
              ],
              task: "display qiymatlarini o'zgartirib, block va inline-block farqini ko'rsatish."
            },
            {
              lesson_number: 8,
              title: "Flexbox asoslari",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Bir o'qli (qator yoki ustun) moslashuvchan tartib." },
                { slide: 2, title: "Yozilish qoidasi", summary: "display: flex, justify-content, align-items, gap." },
                { slide: 3, title: "Namuna", summary: "Menyu yoki kartochkalar qatorini tekislash." },
                { slide: 4, title: "Xato/farq", summary: "flex-wrap ni unutib, elementlarni siqib qo'yish." },
                { slide: 5, title: "Xulosa", summary: "gap orqali elementlar orasida teng masofa hosil bo'ladi." }
              ],
              task: "Flexbox yordamida bir qatorga joylashgan va gap bilan ajratilgan 3 ta blok yasash."
            },
            {
              lesson_number: 9,
              title: "CSS Grid asoslari",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Ikki o'qli (satr va ustunli) panjara tartibi." },
                { slide: 2, title: "Yozilish qoidasi", summary: "display: grid, grid-template-columns, gap." },
                { slide: 3, title: "Namuna", summary: "2 yoki 3 ustunli kartochkalar to'plami." },
                { slide: 4, title: "Xato/farq", summary: "Ustunlar sonini ekran kengligiga moslamaslik." },
                { slide: 5, title: "Xulosa", summary: "Grid murakkabroq panjaralarni oson boshqaradi." }
              ],
              task: "CSS Grid yordamida 2 yoki 3 ustunli kartochkalar to'plamini tuzish."
            },
            {
              lesson_number: 10,
              title: "Pozitsiyalash (position)",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Elementni odatiy oqimdan yoki nisbatan joylashtirish." },
                { slide: 2, title: "Yozilish qoidasi", summary: "static, relative, absolute, sticky, fixed." },
                { slide: 3, title: "Namuna", summary: "Kartochka ustida belgi yoki yuqorida sticky panel." },
                { slide: 4, title: "Xato/farq", summary: "absolute elementni boshqarish uchun ota elementga relative bermaslik." },
                { slide: 5, title: "Xulosa", summary: "Faqat zarur joyda position qo'llang." }
              ],
              task: "relative va absolute yoki sticky yordamida elementni aniq nuqtaga joylashtirish."
            },
            {
              lesson_number: 11,
              title: "Moslashuvchan dizayn (@media)",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Turli ekran o'lchamlariga moslashish." },
                { slide: 2, title: "Yozilish qoidasi", summary: "@media (max-width: 768px) { ... }." },
                { slide: 3, title: "Namuna", summary: "Katta ekranda 3 ustun, telefonda 1 ustun." },
                { slide: 4, title: "Xato/farq", summary: "Gorizontal skrol (overflow) paydo bo'lishi." },
                { slide: 5, title: "Xulosa", summary: "Mobil ekranda o'qish va bosish qulay bo'lishi kerak." }
              ],
              task: "@media so'rovi yordamida kichik ekranda ustunlarni 1 ta qilib moslashtirish."
            },
            {
              lesson_number: 12,
              title: "Yakuniy loyiha (Kartochkali moslashuvchan sahifa)",
              slides: [
                { slide: 1, title: "Xossa/tushuncha", summary: "Rang, shrift, Box Model, Flex/Grid va @media uyg'unligi." },
                { slide: 2, title: "Yozilish qoidasi", summary: "CSS o'zgaruvchilari (:root, --var) va tartibli qoidalar." },
                { slide: 3, title: "Namuna", summary: "To'liq bezatilgan o'quv sahifasi." },
                { slide: 4, title: "Xato/farq", summary: "Qoidalar takrorlanishi va tartibsizlik." },
                { slide: 5, title: "Xulosa", summary: "Toza CSS sahifaga professional ko'rinish beradi." }
              ],
              task: "HTML sahifani ranglar, shriftlar, Flex/Grid va @media yordamida to'liq bezash."
            }
          ]
        },
        {
          id: "javascript",
          title: "JavaScript",
          lessons: [
            {
              lesson_number: 1,
              title: "JavaScript nima va console.log",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "JavaScript sahifaga jonli harakat va mantiq beradi." },
                { slide: 2, title: "Sintaksis", summary: "script tegi va console.log() chaqiruvi." },
                { slide: 3, title: "Kod namunasi", summary: "console.log('Salom, JS!');" },
                { slide: 4, title: "Natija/tahlil", summary: "Brauzer konsolida natijani ko'rish." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Qo'shtirnoq yoki qavsni yopmaslik." },
                { slide: 6, title: "Xulosa", summary: "Konsol kodni tekshirishning eng tez vositasi." }
              ],
              task: "Brauzer konsoliga o'z ismingizni va bitta hisob natijasini console.log orqali chiqarish."
            },
            {
              lesson_number: 2,
              title: "O'zgaruvchilar (let, const)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Ma'lumotni xotirada saqlash uchun nomlangan quti." },
                { slide: 2, title: "Sintaksis", summary: "let (o'zgaruvchi) va const (o'zgarmas)." },
                { slide: 3, title: "Kod namunasi", summary: "const platforma = 'Fluently.uz'; let ball = 0;" },
                { slide: 4, title: "Natija/tahlil", summary: "let qiymatini keyin yangilash mumkin." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "const ga qayta qiymat berish xato keltiradi." },
                { slide: 6, title: "Xulosa", summary: "O'zgarmaydigan qiymatga const, o'zgaradiganiga let ishlating." }
              ],
              task: "Bitta const va bitta let o'zgaruvchi yaratib, let qiymatini yangilash va konsolga chiqarish."
            },
            {
              lesson_number: 3,
              title: "Ma'lumot turlari va typeof",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Asosiy turlar: string, number, boolean, null, undefined." },
                { slide: 2, title: "Sintaksis", summary: "typeof qiymat." },
                { slide: 3, title: "Kod namunasi", summary: "typeof 'matn', typeof 12, typeof true." },
                { slide: 4, title: "Natija/tahlil", summary: "Har bir turning o'z vazifasi bor." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Son o'rniga '12' matn yozib qo'yish." },
                { slide: 6, title: "Xulosa", summary: "Ma'lumot turini bilish xatolarning oldini oladi." }
              ],
              task: "String, number va boolean qiymatlar yaratib, har birining turini typeof bilan tekshirish."
            },
            {
              lesson_number: 4,
              title: "Arifmetik va tayinlash operatorlari",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Hisoblash va qiymatni yangilash amallari." },
                { slide: 2, title: "Sintaksis", summary: "+, -, *, /, %, +=, -=." },
                { slide: 3, title: "Kod namunasi", summary: "let hisob = 10; hisob += 5;" },
                { slide: 4, title: "Natija/tahlil", summary: "hisob qiymati 15 ga teng bo'ladi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "0 ga bo'lish yoki noto'g'ri qavs tartibi." },
                { slide: 6, title: "Xulosa", summary: "+= yozuvni qisqartiradi." }
              ],
              task: "Ikki son ustida arifmetik amal bajarib, natijani += yordamida oshirish."
            },
            {
              lesson_number: 5,
              title: "Satrlar (string) va shablon satrlar",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Matnlarni birlashtirish va ichiga o'zgaruvchi qo'yish." },
                { slide: 2, title: "Sintaksis", summary: "Backtick satrlar va dollar-figurali qavs ifodalari." },
                { slide: 3, title: "Kod namunasi", summary: "Shablon satr orqali mavzu nomini matnga qo'shish." },
                { slide: 4, title: "Natija/tahlil", summary: "Matn ichida qiymatlar ravshan ko'rinadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Oddiy qo'shtirnoq ichida interpolatsiya ishlamasligi." },
                { slide: 6, title: "Xulosa", summary: "Template literal matn yig'ishni osonlashtiradi." }
              ],
              task: "Ism va dars nomini shablon satr ichida birlashtirib, salomlashuv matni chiqarish."
            },
            {
              lesson_number: 6,
              title: "Taqqoslash operatorlari",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Qiymatlarni solishtirib true yoki false qaytarish." },
                { slide: 2, title: "Sintaksis", summary: "===, !==, >, <, >=, <=." },
                { slide: 3, title: "Kod namunasi", summary: "console.log(10 > 5); console.log(5 === '5');" },
                { slide: 4, title: "Natija/tahlil", summary: "=== ham qiymatni, ham turni tekshiradi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "== o'rniga === ni afzal ko'rish." },
                { slide: 6, title: "Xulosa", summary: "Qat'iy tenglik (===) kutilmagan xatolarni kamaytiradi." }
              ],
              task: "Bir nechta taqqoslash ifodasi yozib, true va false natijalarni konsolga chiqarish."
            },
            {
              lesson_number: 7,
              title: "Mantiqiy operatorlar (&&, ||, !)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Bir nechta shartni birlashtirish yoki inkor qilish." },
                { slide: 2, title: "Sintaksis", summary: "&& (VA), || (YOKI), ! (EMAS)." },
                { slide: 3, title: "Kod namunasi", summary: "const ruxsat = tayyor && ruxsatBor;" },
                { slide: 4, title: "Natija/tahlil", summary: "&& da barchasi rost bo'lishi kerak." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Murakkab shartlarda qavslarni aniq qo'ymaslik." },
                { slide: 6, title: "Xulosa", summary: "Mantiqiy operatorlar murakkab shartlarni soddalashtiradi." }
              ],
              task: "&& va || operatorlari yordamida ikki shartni tekshiruvchi mantiqiy ifoda yozish."
            },
            {
              lesson_number: 8,
              title: "Shart operatori (if, else if, else)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Shartga qarab turli kod bloklarini bajarish." },
                { slide: 2, title: "Sintaksis", summary: "if (shart) { ... } else if (...) { ... } else { ... }." },
                { slide: 3, title: "Kod namunasi", summary: "Ballga qarab daraja aniqlash." },
                { slide: 4, title: "Natija/tahlil", summary: "Faqat birinchi rost kelgan shart bloki ishlaydi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Shart o'rniga '=' (tayinlash) yozib qo'yish." },
                { slide: 6, title: "Xulosa", summary: "if/else dastur qaror qabul qilishining asosi." }
              ],
              task: "Ball yoki son qiymatiga qarab kamida 3 xil javob chiqaruvchi if / else if / else yozish."
            },
            {
              lesson_number: 9,
              title: "switch operatori",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Bir o'zgaruvchining aniq qiymatlarini tekshirish." },
                { slide: 2, title: "Sintaksis", summary: "switch (ifoda) { case ...: ... break; default: ... }." },
                { slide: 3, title: "Kod namunasi", summary: "Hafta kuni yoki bo'lim raqamiga mos matn." },
                { slide: 4, title: "Natija/tahlil", summary: "break mos case bajarilgach keyingi case ga o'tmaydi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "break ni unutish (fall-through)." },
                { slide: 6, title: "Xulosa", summary: "Ko'p aniq qiymatlarni tekshirishda switch tartibli ko'rinadi." }
              ],
              task: "1 dan 3 gacha tanlov raqamiga mos xabar chiqaruvchi switch blokini yozish."
            },
            {
              lesson_number: 10,
              title: "for sikli",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Belgilangan miqdorda takrorlash." },
                { slide: 2, title: "Sintaksis", summary: "for (let i = 1; i <= 5; i++) { ... }." },
                { slide: 3, title: "Kod namunasi", summary: "1 dan 5 gacha sonlarni chiqarish." },
                { slide: 4, title: "Natija/tahlil", summary: "Hisoblagich (i) har qadamda o'zgaradi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Shartni noto'g'ri yozib, abadiy siklga tushish." },
                { slide: 6, title: "Xulosa", summary: "Takroriy hisoblashlarda for sikli juda qulay." }
              ],
              task: "for sikli yordamida 1 dan 10 gacha sonlar yig'indisini hisoblab chiqarish."
            },
            {
              lesson_number: 11,
              title: "while va do...while sikllari",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Shart asosida takrorlanuvchi sikllar." },
                { slide: 2, title: "Sintaksis", summary: "while (shart) { ... } va do { ... } while (shart);." },
                { slide: 3, title: "Kod namunasi", summary: "Hisoblagichni oshirib boruvchi while misoli." },
                { slide: 4, title: "Natija/tahlil", summary: "do...while kamida bir marta bajariladi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Siklda o'zgaruvchini o'zgartirmaslik." },
                { slide: 6, title: "Xulosa", summary: "Shart o'zgarguncha davom etadigan holatlarda ishlaydi." }
              ],
              task: "while sikli yordamida 5 dan 1 gacha kamayuvchi tartibda sonlarni chiqarish."
            },
            {
              lesson_number: 12,
              title: "Massivlar (Array) yaratish va indekslar",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Tartiblangan qiymatlar ro'yxati." },
                { slide: 2, title: "Sintaksis", summary: "const mavzular = ['HTML', 'CSS', 'JS'];." },
                { slide: 3, title: "Kod namunasi", summary: "mavzular[0] va mavzular.length." },
                { slide: 4, title: "Natija/tahlil", summary: "Indekslash 0 dan boshlanadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Mavjud bo'lmagan indeksga murojaat qilish (undefined)." },
                { slide: 6, title: "Xulosa", summary: "Massiv bir xil turdagi elementlar ro'yxatini saqlaydi." }
              ],
              task: "4 ta elementdan iborat massiv yaratib, birinchi va oxirgi elementini konsolga chiqarish."
            },
            {
              lesson_number: 13,
              title: "Massiv metodlari",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Massivga element qo'shish, o'chirish va tekshirish." },
                { slide: 2, title: "Sintaksis", summary: "push, pop, shift, unshift, includes." },
                { slide: 3, title: "Kod namunasi", summary: "arr.push('Excel'); arr.includes('CSS');" },
                { slide: 4, title: "Natija/tahlil", summary: "push oxiriga qo'shadi, pop oxirgisini oladi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Metod nomini xato yozish." },
                { slide: 6, title: "Xulosa", summary: "Tayyor metodlar ro'yxat bilan ishlashni tezlashtiradi." }
              ],
              task: "Massivga push bilan yangi element qo'shish, pop bilan o'chirish va includes bilan tekshirish."
            },
            {
              lesson_number: 14,
              title: "Massivlar bo'ylab yurish (for...of, forEach)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Massivdagi har bir elementni navbatma-navbat ko'rib chiqish." },
                { slide: 2, title: "Sintaksis", summary: "for (const item of arr) { ... } va arr.forEach(...)." },
                { slide: 3, title: "Kod namunasi", summary: "Ro'yxatdagi barcha mavzularni chiqarish." },
                { slide: 4, title: "Natija/tahlil", summary: "Har bir element alohida qayta ishlanadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Bo'sh massivni tekshirmasdan amal bajarish." },
                { slide: 6, title: "Xulosa", summary: "for...of o'qish uchun sodda va tushunarli." }
              ],
              task: "for...of sikli yordamida sonlar massividagi barcha elementlarni chiqarish."
            },
            {
              lesson_number: 15,
              title: "Obyektlar (Object) — kalit va qiymat",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Bitta obyektning xususiyatlarini juftlikda saqlash." },
                { slide: 2, title: "Sintaksis", summary: "const dars = { nom: 'HTML', slayd: 5 };." },
                { slide: 3, title: "Kod namunasi", summary: "dars.nom va dars['slayd']." },
                { slide: 4, title: "Natija/tahlil", summary: "Xususiyat qiymatini o'zgartirish yoki yangisini qo'shish mumkin." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Kalit-qiymat orasida vergul (,) o'rniga nuqta-vergul qo'yish." },
                { slide: 6, title: "Xulosa", summary: "Obyektlar murakkab ma'lumotlarni tartibli ifodalaydi." }
              ],
              task: "Dars yoki foydalanuvchi obyektini yaratib, kamida 3 ta xususiyatini konsolga chiqarish."
            },
            {
              lesson_number: 16,
              title: "Obyektlar va massivlar birgalikda",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Obyektlardan tashkil topgan massivlar." },
                { slide: 2, title: "Sintaksis", summary: "const kurslar = [{ nom: 'HTML' }, { nom: 'CSS' }];." },
                { slide: 3, title: "Kod namunasi", summary: "kurslar[0].nom ga murojaat." },
                { slide: 4, title: "Natija/tahlil", summary: "Real loyihalarda ma'lumotlar ko'pincha shu ko'rinishda keladi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Massiv indeksi va obyekt kalitini chalkashtirish." },
                { slide: 6, title: "Xulosa", summary: "Massiv + obyekt — ma'lumotlar bazasiga o'xshash qulay tuzilma." }
              ],
              task: "3 ta dars obyektidan iborat massiv tuzib, ularning nomlarini sikl orqali chiqarish."
            },
            {
              lesson_number: 17,
              title: "Funksiyalar (function declaration va return)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Qayta ishlatiladigan kod bloki." },
                { slide: 2, title: "Sintaksis", summary: "function qoshish(a, b) { return a + b; }." },
                { slide: 3, title: "Kod namunasi", summary: "const natija = qoshish(4, 6);" },
                { slide: 4, title: "Natija/tahlil", summary: "return qiymatni chaqirilgan joyga qaytaradi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "return dan keyin yozilgan kod bajarilmasligi." },
                { slide: 6, title: "Xulosa", summary: "Funksiyalar kodni takrorlanishdan saqlaydi." }
              ],
              task: "Ikki sonni ko'paytirib, natijani return orqali qaytaruvchi funksiya yozish va chaqirish."
            },
            {
              lesson_number: 18,
              title: "Arrow funksiyalar va parametrlar",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Qisqa yoziladigan strelkali funksiyalar." },
                { slide: 2, title: "Sintaksis", summary: "const kvadrat = (x) => x * x;." },
                { slide: 3, title: "Kod namunasi", summary: "Standart parametr bilan: (ism = 'Mehmon') => ..." },
                { slide: 4, title: "Natija/tahlil", summary: "Bir ifodali arrow funksiya qiymatni o'zi qaytaradi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Figurali qavs {} ishlatilganda return yozishni unutish." },
                { slide: 6, title: "Xulosa", summary: "Arrow funksiyalar kodni ixchamlashtiradi." }
              ],
              task: "Arrow funksiya yozib, standart parametr qiymati bilan sinab ko'rish."
            },
            {
              lesson_number: 19,
              title: "Scope (ko'rinish sohasi) va xatolar",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "O'zgaruvchi qayerda ko'rinadi va ishlaydi." },
                { slide: 2, title: "Sintaksis", summary: "Global va blok/funksiya ichidagi ({ ... }) scope." },
                { slide: 3, title: "Kod namunasi", summary: "{} ichidagi let tashqarida ko'rinmaydi." },
                { slide: 4, title: "Natija/tahlil", summary: "ReferenceError sababini aniqlash." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Bir xil nomli o'zgaruvchilarni chalkashtirish." },
                { slide: 6, title: "Xulosa", summary: "Scope ni tushunish xatolarni tez topishga yordam beradi." }
              ],
              task: "Blok ichida yaratilgan o'zgaruvchining ko'rinish doirasini tekshirib, to'g'ri tuzilishini ko'rsatish."
            },
            {
              lesson_number: 20,
              title: "DOM tanlash (querySelector, querySelectorAll)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "DOM — sahifadagi HTML elementlar daraxti." },
                { slide: 2, title: "Sintaksis", summary: "document.querySelector('...') va querySelectorAll('...')." },
                { slide: 3, title: "Kod namunasi", summary: "const btn = document.querySelector('#btn');" },
                { slide: 4, title: "Natija/tahlil", summary: "querySelector birinchi mos elementni qaytaradi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Class oldidan nuqta (.) yoki id oldidan (#) qo'ymaslik." },
                { slide: 6, title: "Xulosa", summary: "Elementni topmasdan turib uni o'zgartirib bo'lmaydi." }
              ],
              task: "HTML sahifadagi elementni querySelector orqali topib, konsolga chiqarish."
            },
            {
              lesson_number: 21,
              title: "DOM o'zgartirish (textContent, innerHTML, classList)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Sahifa matni, ichki HTML va CSS klasslarini o'zgartirish." },
                { slide: 2, title: "Sintaksis", summary: "el.textContent, el.classList.add/remove/toggle." },
                { slide: 3, title: "Kod namunasi", summary: "card.classList.toggle('active');" },
                { slide: 4, title: "Natija/tahlil", summary: "Klass o'zgarganda CSS dizayn ham yangilanadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Foydalanuvchi matnini xavfsiz holda textContent bilan chiqarish." },
                { slide: 6, title: "Xulosa", summary: "classList interaktiv holatlarni boshqarishda juda qulay." }
              ],
              task: "Element matnini textContent bilan yangilash va classList.toggle orqali klassni almashtirish."
            },
            {
              lesson_number: 22,
              title: "Hodisalar (addEventListener)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Foydalanuvchi harakatiga (click, input) javob berish." },
                { slide: 2, title: "Sintaksis", summary: "el.addEventListener('click', () => { ... });." },
                { slide: 3, title: "Kod namunasi", summary: "Tugma bosilganda hisoblagichni +1 qilish." },
                { slide: 4, title: "Natija/tahlil", summary: "Har bosishda hodisa funksiyasi ishga tushadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Funksiyani hozir chaqirib qo'yish (click() o'rniga funksiya berish)." },
                { slide: 6, title: "Xulosa", summary: "addEventListener sahifani interaktiv qiladi." }
              ],
              task: "Tugma bosilganda ekrandagi sonni +1 oshiradigan (yoki matnni o'zgartiradigan) kod yozish."
            },
            {
              lesson_number: 23,
              title: "localStorage bilan ma'lumot saqlash",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "Brauzerda sahifa yangilanganda ham saqlanib qoluvchi xotira." },
                { slide: 2, title: "Sintaksis", summary: "localStorage.setItem(k, v), getItem(k), removeItem(k)." },
                { slide: 3, title: "Kod namunasi", summary: "localStorage.setItem('ball', String(ball));" },
                { slide: 4, title: "Natija/tahlil", summary: "Ma'lumot satr ko'rinishida saqlanadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Obyekt/massivni JSON.stringify va JSON.parse siz saqlash." },
                { slide: 6, title: "Xulosa", summary: "localStorage foydalanuvchi natijasini saqlashga yordam beradi." }
              ],
              task: "Qiymatni localStorage ga saqlab, sahifa qayta yuklanganda uni o'qib chiqarish."
            },
            {
              lesson_number: 24,
              title: "Yakuniy loyiha (Interaktiv mini-ilova)",
              slides: [
                { slide: 1, title: "Tushuncha", summary: "O'zgaruvchi, massiv, funksiya, DOM va hodisalarni birlashtirish." },
                { slide: 2, title: "Sintaksis", summary: "Holat (state) + ekranni yangilovchi render funksiyasi." },
                { slide: 3, title: "Kod namunasi", summary: "Vazifa qo'shish yoki test/hisoblagich mantiqi." },
                { slide: 4, title: "Natija/tahlil", summary: "Foydalanuvchi amaliga mos sahifa darhol yangilanadi." },
                { slide: 5, title: "Xato va ehtiyot choralari", summary: "Bo'sh qiymat kiritilganda tekshiruv qilmaslik." },
                { slide: 6, title: "Xulosa", summary: "Kichik loyihalar JS bilimini mustahkamlaydi." }
              ],
              task: "Vazifalar ro'yxati, hisoblagich yoki qisqa testdan iborat kichik interaktiv mini-ilova yaratish."
            }
          ]
        }
      ]
    }
  ]
};
let activeSectionIdx = 0;
let activeTrackIdx = 0;
let activeLessonIdx = 0;
let activeSlideIdx = 0;

const sectionTabsEl = document.getElementById("sectionTabs");
const tracksGridEl = document.getElementById("tracksGrid");
const lessonsListEl = document.getElementById("lessonsList");
const lessonBadgeEl = document.getElementById("lessonBadge");
const slideCounterEl = document.getElementById("slideCounter");
const slideTitleEl = document.getElementById("slideTitle");
const slideSummaryEl = document.getElementById("slideSummary");
const lessonTaskEl = document.getElementById("lessonTask");
const prevSlideBtn = document.getElementById("prevSlideBtn");
const nextSlideBtn = document.getElementById("nextSlideBtn");

function render() {
  const currentSection = data.sections[activeSectionIdx];
  const currentTrack = currentSection.tracks[activeTrackIdx];
  const currentLesson = currentTrack.lessons[activeLessonIdx];
  const currentSlide = currentLesson.slides[activeSlideIdx];

  sectionTabsEl.innerHTML = "";
  data.sections.forEach((sec, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = idx === activeSectionIdx ? "tab-btn active" : "tab-btn";
    btn.textContent = sec.title;
    btn.addEventListener("click", () => {
      activeSectionIdx = idx;
      activeTrackIdx = 0;
      activeLessonIdx = 0;
      activeSlideIdx = 0;
      render();
    });
    sectionTabsEl.appendChild(btn);
  });

  tracksGridEl.innerHTML = "";
  currentSection.tracks.forEach((tr, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = idx === activeTrackIdx ? "track-card active" : "track-card";
    card.innerHTML = "<h3>" + tr.title + "</h3><span>" + tr.lessons.length + " ta dars</span>";
    card.addEventListener("click", () => {
      activeTrackIdx = idx;
      activeLessonIdx = 0;
      activeSlideIdx = 0;
      render();
    });
    tracksGridEl.appendChild(card);
  });

  lessonsListEl.innerHTML = "";
  currentTrack.lessons.forEach((les, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = idx === activeLessonIdx ? "lesson-item active" : "lesson-item";
    item.textContent = les.lesson_number + "-dars: " + les.title;
    item.addEventListener("click", () => {
      activeLessonIdx = idx;
      activeSlideIdx = 0;
      render();
    });
    lessonsListEl.appendChild(item);
  });

  lessonBadgeEl.textContent = currentTrack.title + " • " + currentLesson.lesson_number + "-dars";
  slideCounterEl.textContent = "Slayd " + (activeSlideIdx + 1) + " / " + currentLesson.slides.length;
  slideTitleEl.textContent = currentSlide.title;
  slideSummaryEl.textContent = currentSlide.summary;
  lessonTaskEl.textContent = currentLesson.task;

  prevSlideBtn.disabled = activeSlideIdx === 0;
  nextSlideBtn.disabled = activeSlideIdx === currentLesson.slides.length - 1;
}

prevSlideBtn.addEventListener("click", () => {
  if (activeSlideIdx > 0) {
    activeSlideIdx--;
    render();
  }
});

nextSlideBtn.addEventListener("click", () => {
  const currentLesson = data.sections[activeSectionIdx].tracks[activeTrackIdx].lessons[activeLessonIdx];
  if (activeSlideIdx < currentLesson.slides.length - 1) {
    activeSlideIdx++;
    render();
  }
});

render();
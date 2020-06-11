# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Author.delete_all
Book.destroy_all



users = User.create!([{
    name: "Mark1",
    email: "mark1e@hotmail.com",
    password: "mark111",
  },
  {
    name: "Mark2",
    email: "mark2@a.com",
    password: "mark222"
  },
  {
    name: "Mark3",
    email: "mark3@gmail.com",
    password: "mark333"
  },
  {
    name: "Mark4",
    email: "mark4@aol.com",
    password: "mark444"
  },
  {
    name: "Demo",
    email: "demo@demo.com",
    password: 12345678
  }
])

dan = Author.create(name: "Dan Brown", bio: "Dan Gerhard Brown was born on June 22, 1964, in Exeter, New Hampshire.He has a younger sister, Valerie (born 1968) and brother, Gregory (born 1974). Brown attended Exeter's public schools until the ninth grade.He grew up on the campus of Phillips Exeter Academy, where his father, Richard G. Brown, was a teacher of mathematics and wrote textbooks from 1968 until his retirement in 1997.His mother, Constance, trained as a church organist and student of sacred music.")
tim = Author.create(name: "Tim Johnston", bio: "Tim Johnston is the author of the novels Descent,The Current, the story collection Irish Girl, and the Young Adult novel Never So Green. A New York Times, USA Today, and Indie national bestseller, Descent has been published internationally and optioned for film. Also optioned for film, The Current won the Midland Authors 2020 Adult Fiction Award." )
j = Author.create(name:"Joanne Rowling", bio:"Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history")
king = Author.create(name:"Stephen King", bio:"Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. His books have sold more than 350 million copies,and many have been adapted into films, television series, miniseries, and comic books. ")
esi = Author.create(name:"Esi Edugyan", bio:"Esi Edugyan (born 1978) is a Canadian novelist. She has twice won the Giller Prize, for her novels Half-Blood Blues and Washington Black.")
kang = Author.create(name:"Han Kang", bio:"Han Kang (Korean: 한강; born November 27, 1970) is a South Korean writer.She won the Man Booker International Prize for fiction in 2016 for The Vegetarian, a novel which deals with a woman’s decision to stop eating meat and its devastating consequences")
usher = Author.create(name:"S. Usher Evans", bio:"S. Usher Evans is an author, blogger, and witty banter aficionado. Born in Pensacola, Florida, she left the sleepy town behind for the fast-paced world of Washington, D.C.. ")

books = Book.create!([{
        title: "The Da Vinci Code",
        isbn: "1234567890113",
        author_id: dan.id,
        writer: "Dan Brown",
        description:"While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter.",
        gender: "action", 
        book_url:"code"
   },
   {
    title: "The Lost Symbol",
    isbn: "1234567890114",
    author_id: dan.id,
    writer: "Dan Brown",
    description:"
    The Lost Symbol is a masterstroke of storytelling–a deadly race through a real-world labyrinth of codes, secrets, and unseen truths… all under the watchful eye of Brown’s most terrifying villain to date. Set within the hidden chambers, tunnels, and temples of Washington, D.C., The Lost Symbol accelerates through a startling landscape toward an unthinkable finale.",
    gender: "action", 
    book_url:"symbol"
   },
   {
    title: "Angels and Demons",
    isbn: "1234567890115",
    author_id: dan.id,
    writer: "Dan Brown",
    description:"When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol — seared into the chest of a murdered physicist — he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati… the most powerful underground organization ever to walk the earth.",
    gender: "action", 
    book_url:"angels"
   },
   {
    title: "The Current",
    isbn: "1234567890116",
    author_id: tim.id,
    writer: "Tim Johnston",
    description:"Grief, suspicion, the innocent and the guilty—all stir to life in this cold northern town where a young woman can come home, but still not be safe. Brilliantly plotted and unrelentingly propulsive, The Current is a beautifully realized story about the fragility of life, the power of the past, and the need, always, to fight back.",
    gender: "fiction", 
    book_url:"curr"
   },
   {
    title: "Harry Potter and the Cursed Child ",
    isbn: "1234567890117",
    author_id: j.id,
    writer: "Joanne Rowling",
    description:"Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016.",
    gender: "action", 
    book_url:"harry"
   },
   {
    title: "Outsider",
    isbn: "1234567890118",
    author_id: king.id,
    writer: "Stephen King",
    description:"In Flint City, Oklahoma, police detective Ralph Anderson arrests the popular English teacher and Little League coach, Terry Maitland, in front of a crowd of baseball spectators. Maitland is charged with the rape and mutilation of Frankie Peterson, an eleven-year-old boy. Maitland hires his friend and lawyer, Howie Gold, to assist him. However, Detective Anderson has eyewitness accounts and forensic evidence which clearly pinpoints Maitland as the main, and only, suspect. In the meantime, eager reporters harass Maitland's wife, Marcy and their two daughters, Sarah and Grace.",
    gender: "action", 
    book_url:"out"
   },
   {
    title: "Washington Black",
    isbn: "1234567890119",
    author_id: esi.id,
    writer:"Esi Edugyan",
    description:"Washington Black is the third novel by Canadian author Esi Edugyan. The novel was published in 2018 by HarperCollins in Canada and by Knopf Publishers internationally. A bildungsroman, the story follows the early life of George Washington Wash Black, chronicling his escape from slavery and his subsequent adventures.",
    gender: "action", 
    book_url:"was"
   },{
    title: "The Vegeterian ",
    isbn: "1234567890120",
    author_id: kang.id,
    writer:"Han Kang",
    description:"The Vegetarian (Korean: 채식주의자; RR: Chaesikjuuija) is a South Korean three-part novel written by Han Kang and first published in 2007. Based on Kang's 1997 short story The Fruit of My Woman, The Vegetarian is set in modern-day Seoul and tells the story of Yeong-hye, a part-time graphic artist and home-maker, whose decision to stop eating meat after a bloody, nightmarish dream about human cruelty leads to devastating consequences in her personal and familial life.",
    gender: "action", 
    book_url:"vege"
   },{
    title: "The city of Veils",
    isbn: "1234567890121",
    author_id: usher.id,
    writer:"S. Usher Evans",
    description:"From bestselling author S. Usher Evans comes the first book in a brand new young adult fantasy series filled with masked mischief and mystery. Fans of Throne of Glass and The Kiss of Deception will fall in love with this brilliant series about a runaway-princess-turned-vigilante who must resume her royal duties when her father and brother are murdered. ",
    gender: "action", 
    book_url:"veils"
   }

]);

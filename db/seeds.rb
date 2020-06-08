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

books = Book.create!([{
        title: "The Da Vinci Code",
        isbn: "1234567890113",
        author_id: dan.id,
        description:"While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter.",
        gender: "action", 
        book_url:"code"
   },
   {
    title: "The Lost Symbol",
    isbn: "1234567890114",
    author_id: dan.id,
    description:"
    The Lost Symbol is a masterstroke of storytelling–a deadly race through a real-world labyrinth of codes, secrets, and unseen truths… all under the watchful eye of Brown’s most terrifying villain to date. Set within the hidden chambers, tunnels, and temples of Washington, D.C., The Lost Symbol accelerates through a startling landscape toward an unthinkable finale.",
    gender: "action", 
    book_url:"symbol"
   },
   {
    title: "Angels and Demons",
    isbn: "1234567890115",
    author_id: dan.id,
    description:"When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol — seared into the chest of a murdered physicist — he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati… the most powerful underground organization ever to walk the earth.",
    gender: "action", 
    book_url:"angels"
   }

]);

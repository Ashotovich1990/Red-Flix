# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Genre.destroy_all
# Movie.destroy_all 
# MovieList.destroy_all
# Actor.destroy_all
# Casting.destroy_all

# require 'open-uri'
# file = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/andrei-rublev.jpg');
# # movie.photo.attach(io: file, filename" whatever) 
# movie.save
# :has_one_attached
# andrei_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/andrei-rublev.jpg')


# andrei_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Andrei+Rublev+.mp4')
# andrei.video.attach(io: andrei_v, filename: 'AndreiRublev.mp4')
# andrei.photo.attach(io: andrei_p, filename: 'AndreiRublev.jpg')

Genre.destroy_all
Movie.destroy_all 
MovieList.destroy_all
Actor.destroy_all
Casting.destroy_all

Genre.create(name: "My List")
Genre.create(name: "Trending Now")
Genre.create(name: "New Releases")
Movie.create(title: "Andrei Rublev", description: "Andrei Rublev is set against the background of 15th-century Russia. Although the film is only loosely based on the life of Andrei Rublev, it seeks to depict a realistic portrait of medieval Russia. Tarkovsky sought to create a film that shows the artist as a world-historic figure and Christianity as an axiom of Russia’s historical identity.", year: 1969, maturity_rating: "R")

Movie.create(title: "Stalker", description: "The film depicts an expedition led by a figure known as the 'Stalker' to take his two clients—a melancholic writer seeking inspiration, and a professor seeking scientific discovery—to a mysterious restricted site known simply as the 'Zone', where there supposedly exists a room which grants a person's innermost desires. The trio travel through unnerving areas filled with the debris of modern society while engaging in many arguments.", year: 1979, maturity_rating: "PG13")

Movie.create(title: "The Color of Pomegranates", description: "The Color of Pomegranates is a biography of the Armenian ashug Sayat-Nova (King of Song) that attempts to reveal the poet's life visually and poetically rather than literally. The film is presented with little dialogue using active tableaux which depict the poet's life in chapters: Childhood, Youth, Prince's Court (where he falls in love with a tsarina), The Monastery, The Dream, Old Age, The Angel of Death and Death.", year: 1969, maturity_rating: "PG13")

MovieList.create(movie_id: 1, genre_id: 2)
MovieList.create(movie_id: 1, genre_id: 3)
MovieList.create(movie_id: 2, genre_id: 2)
MovieList.create(movie_id: 2, genre_id: 3)
MovieList.create(movie_id: 3, genre_id: 3)
Actor.create(first_name: "Andrei", last_name: "Tarkovsky")
Actor.create(first_name: "Sergei", last_name: "Parajanov")
Actor.create(first_name: "Anatoly", last_name: "Solonitsyn")
Actor.create(first_name: "Alexander", last_name: "Kaidanovsky")
Actor.create(first_name: "Sofiko", last_name: " Chiaureli")
Casting.create(movie_id: 1, actor_id: 1, ord: 0)
Casting.create(movie_id: 2, actor_id: 1, ord: 0)
Casting.create(movie_id: 3, actor_id: 2, ord: 0)
Casting.create(movie_id: 1, actor_id: 3, ord: 1)
Casting.create(movie_id: 2, actor_id: 4, ord: 1)
Casting.create(movie_id: 3, actor_id: 5, ord: 1)

Genre.create(name: "Comedies")

Movie.create(title: "The Diamond Arm", description: "The Diamond Arm has become a Russian cult film and is considered by many Russian contemporaries to be one of the finest comedies of all time. It was also one of the all-time leaders at the Soviet box office with over 76,700,000 theatre admissions in the Soviet era. The plot of the film was based on a real-life news item about Swiss smugglers who tried to transport jewels in an orthopedic cast.", year: 1969, maturity_rating: "PG13")
Movie.create(title: "Ivan Vasilievich: Back to the Future", description: "The story begins in 1973 Moscow, where engineer Alexander 'Shurik' Timofeev (Aleksandr Demyanenko) is working on a time machine in his apartment. By accident, he sends Ivan Vasilevich Bunsha (Yuri Yakovlev), superintendent of his apartment building, and George Miloslavsky (Leonid Kuravlev), a small-time burglar, back into the time of Ivan IV 'The Terrible'. The pair is forced to disguise themselves, with Bunsha dressing up as Ivan IV (tsar) and Miloslavsky as a knyaz (duke) of the same name. At the same time, the real Ivan IV (also played by Yuri Yakovlev) is sent by the same machine into Shurik's apartment, he has to deal with modern-day life while Shurik tries to fix the machine so that everyone can be brought back to their proper place in time.", year: 1973, maturity_rating: "PG13")
Movie.create(title: "Operation Y and Shurik's Other Adventures", description: "Three stories about Shurik - a young student. He fights against criminals, falls in love, confuses apartments, passes exams - he lives after all.", year: 1965, maturity_rating: "PG13")
Movie.create(title: "Moscow Does Not Believe in Tears", description: "This is a life story of three girlfriends from youth to autumn ages. Their dreams and wishes, love, disillusions. Different careers. And big late love.", year: 1980, maturity_rating: "PG13")
Movie.create(title: "Office Romance", description: "Both romantic drama and screwball comedy, the film is noted for its scenes of Moscow in the late 1970s, and for its comical depiction of the everyday life and customs of Soviet society during the Era of Stagnation.", year: 1977, maturity_rating: "PG13")
Movie.create(title: "Gentlemen of Fortune", description: "The movie follows the story of an amiable kindergarten director named Troshkin who looks exactly like a cruel criminal nicknamed Docent that has stolen Alexander the Great's helmet at an archaeological excavation. Docent and his gang are caught by police, but Docent is imprisoned in a different jail than his mates. Since Troshkin looks identical to Docent, the police send him undercover to prison with the real criminals to get information about the stolen helmet. He must pretend to be the real felon Docent, so in order to be convincing, Troshkin, a well-educated and good-natured man, has to learn slang and manners of criminals.", year: 1971, maturity_rating: "PG13")
Movie.create(title: "The Irony of Fate", description: "The key subplot is the drab uniformity of Brezhnev-era public architecture. This setting is explained in a humorous animated prologue, in which architects are overruled by politicians and red tape. As a result, the entire country is polluted with identical, unimaginative multistory apartment buildings that can be found in every city, town, and suburb across the former Soviet Union. These buildings are completely uniform in every detail including the door key of each apartment. ", year: 1976, maturity_rating: "PG13")
Movie.create(title: "Mimino", description: "Georgian bush pilot Valiko Mizandari a.k.a. Mimino works at small local airline, flying helicopters between small villages. But he dreams of piloting large international airliners, so he decides to go to Moscow to follow his dream. There in a hotel he meets Armenian truck driver Ruben Khachikyan who is given a place in that hotel by mistake instead of another Khachikyan (Professor), and they have many adventures in Moscow.", year: 1977, maturity_rating: "PG13")
Movie.create(title: "Striped Trip", description: "To escape from a hot tropical place Shuleykin accepts a position on a ship looking after a cargo of twelve cages with tigers. Chief mate has continuous arguments with Marianna about the little tricks she plays on the crew. One day a stowaway monkey opens the cages and the limited capabilities of Shuleykin get exposed. In this situation Marianna unexpectedly turns into a skilled animal trainer.", year: 1961, maturity_rating: "PG13")
Movie.create(title: "Beware of the Car", description: "The movie plot evolves around Yuriy Detochkin, a humble Soviet insurance agent suffering from a minor mental disorder. Detochkin applies great resourcefullness and exceptional driving skill to stealing cars from corrupt Soviet officials in a Robin Hood way, disappointed by the Militsiya (Soviet police) being unable to fight them efficiently. One of the Detochkin's un-innocent victims is Dima Semitsvetov, a retail embezzler hilariously trolled, but still tolerated by his colourful father-in-law Sokol-Kruzhkin, a retired Soviet Army officer. Detochkin sells the stolen cars and anonymously transfers the money to the accounts of various orphanages. Detective Maxim Podberyozovikov investigates his crimes and tries to prosecute him, but faces a serious moral problem in doing that, partly because the suspect appears to be his amateur theater mate and friend.", year: 1966, maturity_rating: "PG13")

MovieList.create(movie_id: 4, genre_id: 4, sample: "true")
MovieList.create(movie_id: 5, genre_id: 4, sample: "true")
MovieList.create(movie_id: 6, genre_id: 4, sample: "true")
MovieList.create(movie_id: 7, genre_id: 4, sample: "true")
MovieList.create(movie_id: 8, genre_id: 4, sample: "false")
MovieList.create(movie_id: 9, genre_id: 4, sample: "false")
MovieList.create(movie_id: 10, genre_id: 4, sample: "false")
MovieList.create(movie_id: 11, genre_id: 4, sample: "false")
MovieList.create(movie_id: 12, genre_id: 4, sample: "false")
MovieList.create(movie_id: 13, genre_id: 4, sample: "false")

=> [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
MovieList.find(9).update(sample: "true")
MovieList.find(10).update(sample: "true")
MovieList.find(11).update(sample: "true")
MovieList.find(12).update(sample: "true")
MovieList.find(13).update(sample: "true")
MovieList.find(14).update(sample: "true")
2, 4, 5, 26, 27, 28, 29
[1, 3, 30, 31, 32, 33, 34]
10, 11, 12, 13
[16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

MovieList.find(18).update(sample: "true")
MovieList.find(19).update(sample: "true")
MovieList.find(20).update(sample: "true")
MovieList.find(22).update(sample: "true")
MovieList.find(25).update(sample: "true")






Genre.create(name: "Dramas")

Movie.create(title: "Leviathan", description: "In a Russian coastal town, Kolya is forced to fight the corrupt mayor when he is told that his house will be demolished. He recruits a lawyer friend to help, but the man's arrival brings further misfortune for Kolya and his family.", year: 2014, maturity_rating: "PG13")

Movie.create(title: "The Fool", description: "Dima Nikitin is an ordinary honest plumber who suddenly decides to face the corrupt system of local politics in order to save the lives of 800 inhabitants of an old dormitory, which is about to collapse.", year: 2014, maturity_rating: "PG13")

Movie.create(title: "Silent Souls", description: "Present days. A man and his companion go on a journey to cremate the dead body of the former beloved wife, on a riverbank in the area where they spent their honeymoon.", year: 2010, maturity_rating: "R")

Movie.create(title: "Brother 2", description: "Arriving in Moscow, Danila discovers Konstantin dead and he sets out to avenge his death; a journey that leads him to Chicago and a whole new experience.", year: 2000, maturity_rating: "R")

Movie.create(title: "Elena", description: "When a sudden illness and an unexpected reunion threaten dutiful housewife Elena's potential inheritance, she must hatch a desperate plan ...", year: 2011, maturity_rating: "PG13")

Movie.create(title: "The Return", description: "In the Russian wilderness, two brothers face a range of new, conflicting emotions when their father - a man they know only through a single photograph - resurfaces.", year: 2003, maturity_rating: "PG13")

Movie.create(title: "How I Ended This Summer", description: "A polar station on a desolate island in the Arctic Ocean. Sergei, a seasoned meteorologist, and Pavel, a recent college graduate, are spending months in complete isolation on the once strategic research base. Pavel receives an important radio message and is still trying to find the right moment to tell Sergei, when fear, lies and suspicions start poisoning the atmosphere.", year: 2010, maturity_rating: "PG13")

Movie.create(title: "Everybody Dies But Me", description: "One Monday morning Katya, Vika and Zhanna learn that there will be a school disco, their first disco, on the coming Saturday night. The girls feverishly start preparing for the event, which rapidly becomes the most important moment ever in their universe, and looks like the ideal way to escape their daily lives.", year: 2008, maturity_rating: "PG13")

Movie.create(title: "The Banishment", description: "A trip to the pastoral countryside reveals a dark, sinister reality for a family from the city.", year: 2007, maturity_rating: "PG13")

Movie.create(title: "The Tribe", description: "A deaf boy joins a boarding school for similar children. Confronted by the violent and criminal antics of some of the other boys and girls, he struggles to conform and join the 'tribe'.", year: 2014, maturity_rating: "R")

Movie.create(title: "Solaris", description: "Psychologist Kris Kelvin is being sent on an interstellar journey to evaluate whether a decades-old space station should continue to study the oceanic planet Solaris. He spends his last day on Earth with his elderly father and retired pilot Berton. Years earlier, Berton had been part of an exploratory team at Solaris but was recalled when he described seeing a four-meter-tall child on the surface of the water. This was dismissed as a hallucination by a panel of scientists, but now that the remaining crew members are making similarly strange reports, Kris's skills are needed.", year: 1972, maturity_rating: "NC-17")

MovieList.create(movie_id: 14, genre_id: 5, sample: "true")
MovieList.create(movie_id: 15, genre_id: 5, sample: "true")
MovieList.create(movie_id: 16, genre_id: 5, sample: "true")
MovieList.create(movie_id: 17, genre_id: 5, sample: "true")
MovieList.create(movie_id: 18, genre_id: 5, sample: "true")
MovieList.create(movie_id: 19, genre_id: 5, sample: "false")
MovieList.create(movie_id: 20, genre_id: 5, sample: "false")
MovieList.create(movie_id: 21, genre_id: 5, sample: "false")
MovieList.create(movie_id: 22, genre_id: 5, sample: "false")
MovieList.create(movie_id: 23, genre_id: 5, sample: "false")

MovieList.create(movie_id: 17, genre_id: 3, sample: "true")
MovieList.create(movie_id: 18, genre_id: 3, sample: "true")
MovieList.create(movie_id: 19, genre_id: 3, sample: "true")
MovieList.create(movie_id: 20, genre_id: 3, sample: "true")

MovieList.create(movie_id: 21, genre_id: 2, sample: "true")
MovieList.create(movie_id: 22, genre_id: 2, sample: "true")
MovieList.create(movie_id: 23, genre_id: 2, sample: "true")
MovieList.create(movie_id: 22, genre_id: 2, sample: "true")
MovieList.create(movie_id: 23, genre_id: 2, sample: "true")


stalker = Movie.find(2)
stalker_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/stalker.jpg')
stalker_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Stalker.mp4')
stalker.video.attach(io: stalker_v, filename: 'stalker.mp4')
stalker.photo.attach(io: stalker_p, filename: 'stalker.jpg')

m = Movie.find(3)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/sayat-nova.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/The+Color+of+Pomegranates+.mp4')
m.video.attach(io: m_v, filename: '3.mp4')
m.photo.attach(io: m_p, filename: '3.jpg')

m = Movie.find(4)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/dimoand+arm.jpg')
m.photo.attach(io: m_p, filename: '4.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/The+Diamond+Arm.mp4')
m.video.attach(io: m_v, filename: '4.mp4')

m = Movie.find(5)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/ivan.jpg')
m.photo.attach(io: m_p, filename: '5.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Ivan+Vasilevich.mp4')
m.video.attach(io: m_v, filename: '5.mp4')

m = Movie.find(6)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/operY.jpg')
m.photo.attach(io: m_p, filename: '6.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Operation+Y.mp4')
m.video.attach(io: m_v, filename: '6.mp4')

m = Movie.find(8)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/office+roman.jpg')
m.photo.attach(io: m_p, filename: '8.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Office+romance+.mp4')
m.video.attach(io: m_v, filename: '8.mp4')

m = Movie.find(9)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/gentlemen+of+fortune.jpg')
m.photo.attach(io: m_p, filename: '9.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Gentlemen+of+Fortune.mp4')
m.video.attach(io: m_v, filename: '9.mp4')

m = Movie.find(10)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/irony+of+fate.jpg')
m.photo.attach(io: m_p, filename: '10.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Irony+of+Fate.mp4')
m.video.attach(io: m_v, filename: '10.mp4')

m = Movie.find(11)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/mimino.jpg')
m.photo.attach(io: m_p, filename: '11.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Mimino.mp4')
m.video.attach(io: m_v, filename: '11.mp4')

m = Movie.find(12)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/srtiped+trip.jpg')
m.photo.attach(io: m_p, filename: '12.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Striped+Trip.mp4')
m.video.attach(io: m_v, filename: '12.mp4')

m = Movie.find(13)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/beware+the+car.jpg')
m.photo.attach(io: m_p, filename: '13.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Beware+of+the+car.mp4')
m.video.attach(io: m_v, filename: '13.mp4')

m = Movie.find(14)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/leviathan.jpg')
m.photo.attach(io: m_p, filename: '14.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Leviathan+.mp4')
m.video.attach(io: m_v, filename: '14.mp4')

m = Movie.find(15)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/fool.jpg')
m.photo.attach(io: m_p, filename: '14.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/The+Fool+.mp4')
m.video.attach(io: m_v, filename: '14.mp4')

m = Movie.find(16)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/silent+souls.jpg')
m.photo.attach(io: m_p, filename: '16.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/SILENT+SOULS+.mp4')
m.video.attach(io: m_v, filename: '16.mp4')

m = Movie.find(17)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/the+brother+2.jpg')
m.photo.attach(io: m_p, filename: '17.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/brother+2.mp4')
m.video.attach(io: m_v, filename: '17.mp4')

m = Movie.find(18)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/elena.jpg')
m.photo.attach(io: m_p, filename: '18.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Elena+.mp4')
m.video.attach(io: m_v, filename: '18.mp4')

m = Movie.find(19)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/the+return.jpg')
m.photo.attach(io: m_p, filename: '19.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/The+Return+.mp4')
m.video.attach(io: m_v, filename: '19.mp4')

m = Movie.find(20)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/how+I+ended+this+summer.jpg')
m.photo.attach(io: m_p, filename: '20.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/HOW+I+ENDED+THIS+SUMMER+.mp4')
m.video.attach(io: m_v, filename: '20.mp4')

m = Movie.find(22)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/the+banishment.jpg')
m.photo.attach(io: m_p, filename: '22.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Banishment.mp4')
m.video.attach(io: m_v, filename: '22.mp4')

m = Movie.find(24)
m_p = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/solaris.jpg')
m.photo.attach(io: m_p, filename: '24.jpg')
m_v = open('https://s3-us-west-1.amazonaws.com/file-up-load-prod/Solaris.mp4')
m.video.attach(io: m_v, filename: '24.mp4')

Genre.create(name: "Unknown Gems")

MovieList.create(movie_id: 1, genre_id: 6)
MovieList.create(movie_id: 2, genre_id: 6)
MovieList.create(movie_id: 3, genre_id: 6)
MovieList.create(movie_id: 24, genre_id: 6)
MovieList.create(movie_id: 22, genre_id: 6)
MovieList.create(movie_id: 20, genre_id: 6)